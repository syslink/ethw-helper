import {
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  VStack,
  Heading,
  Box,
  Text,
  Avatar,
  HStack,
  useColorModeValue,
  useToast,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { getEllipsisTxt } from 'utils/format';
import Erc20ABI from './erc20ABI.json';
import Reborn from './Reborn.json';
import BigNumber from 'bignumber.js';


interface IBalances {
  [address: string]: string
}

type Web3Info = {
  account: string;
  web3: any;
  chainId: number;
}

const ERC20Balances: FC<Web3Info> = ({ account, web3, chainId }) => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [tokenList, setTokenList] = useState<any[]>([])
  const [balances, setBalances] = useState<IBalances>({})
  const [rbtBalance, setRbtBalance] = useState<string>('0');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const toast = useToast();

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  let burnRBTNumber = '';

  const delegatorAddr: Record<number, string> = {10001: '0x3a9Fe5AC9Bab2d4457433185276a20718bFE6e2F', 513100: '0x6624b3b7501e9dd7D4003eB24C392EF07e27b1D4'}
  const unit: Record<number, string> = {10001: 'ETHW', 513100: 'ETF'}

  const getBalance = (erc20Addr: string, decimals: number) => {
    const contract = new web3.eth.Contract(Erc20ABI, erc20Addr);
    const contractFunc = contract.methods['balanceOf'];        
    contractFunc(account).call({from: account}).then((result: any) => {
      try {
        const balance = new BigNumber(result).shiftedBy(decimals * -1).toString();
        console.log(erc20Addr, balance);
        balances[erc20Addr] = balance;
        setBalances(JSON.parse(JSON.stringify(balances)));
      } catch (error) {
        console.log(erc20Addr, 'error');
      }
    });
  }

  const getRBTBalance = () => {
    const contract = new web3.eth.Contract(Erc20ABI, delegatorAddr[chainId]);
    const contractFunc = contract.methods['balanceOf'];        
    contractFunc(account).call({from: account}).then((result: any) => {
      try {
        const balance = new BigNumber(result).shiftedBy(-18).toString();
        setRbtBalance(balance);
      } catch (error) {
        console.log(error);
      }
    });
  }

  useEffect(() => {
    if (account != null) {
      const etherScanURL = `https://api.ethplorer.io/getAddressInfo/${account}?apiKey=freekey`;
      
      fetch(etherScanURL)
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data);
          if (data == null || data.tokens == null) {return;}
          const tokens: any[] = []
          data.tokens.forEach((token: any) => {
            if (token.tokenInfo.decimals === 0) {return;}
            tokens.push(token.tokenInfo);
            getBalance(token.tokenInfo.address, token.tokenInfo.decimals);
          })
          setTokenList(tokens);
        });
      
      getRBTBalance();
    }
  }, [account]);

  const approve = (erc20Addr: string) => {
    const contract = new web3.eth.Contract(Erc20ABI, erc20Addr);
    let contractFunc = contract.methods['allowance'];  
    contractFunc(account, delegatorAddr[chainId]).call({from: account}).then((result: any) => {
      if (result > 0) {
        toast({
          title: 'Approved...',
          description: "Has been approved, don't need to approve again",
          status: 'info',
          position: 'top-right',
          isClosable: true,
        });
      } else {
        contractFunc = contract.methods['approve'];  
        const data = contractFunc(delegatorAddr[chainId], `0x${new BigNumber(1).shiftedBy(28).toString(16)}`).encodeABI();
        const tx = {
            from: account,
            to: erc20Addr,
            data,
            value: 0,
            gasLimit: 0
        }
        contractFunc(delegatorAddr[chainId], `0x${new BigNumber(1).shiftedBy(28).toString(16)}`).estimateGas({from: account}).then((gasLimit: any) => {
          tx.gasLimit = gasLimit;
          web3.eth.sendTransaction(tx)
                .on('receipt', () => {
                getBalance(erc20Addr, 18);
                toast({
                  title: 'Approved Successfully',
                  description: "Has been approved successfully",
                  status: 'success',
                  position: 'top-right',
                  isClosable: true,
                });
              })
              .on('error', () => {
                toast({
                  title: 'Approved Failed',
                  description: "Failed",
                  status: 'error',
                  position: 'top-right',
                  isClosable: true,
                });
              });
         });
      }
    });   
  }

  const getAmountOut = (erc20Addr: string) => {
    const contract = new web3.eth.Contract(Reborn, delegatorAddr[chainId]);
    const contractFunc = contract.methods['getAmountOutETH'];  
    contractFunc([erc20Addr]).call({from: account}).then((result: any) => {
      try {
        const balance = new BigNumber(result).shiftedBy(-18).toString();
        toast({
          title: `${unit[chainId]} AmountOut`,
          description: `${balance} ${unit[chainId]}`,
          status: 'success',
          position: 'top-right',
          isClosable: true,
        });
      } catch (error) {
        console.log(erc20Addr, 'error');
      }
    });
  }

  const swap2ETHw = (erc20Addr: string) => {
    const contract = new web3.eth.Contract(Reborn, delegatorAddr[chainId]);
    const contractFunc = contract.methods['swap'];  
    const data = contractFunc([erc20Addr]).encodeABI();
    const tx = {
        from: account,
        to: delegatorAddr[chainId],
        data,
        value: 0,
        gasLimit: 0
    }

    console.log('tx1', tx, erc20Addr);
    contractFunc([erc20Addr]).estimateGas({from: account}).then((gasLimit: any) => {
      tx.gasLimit = gasLimit;
      console.log('tx2', tx);
      web3.eth.sendTransaction(tx)
          .on('receipt', () => {
            toast({
              title: 'Swap ETH-w Successfully',
              description: "Has been swapped successfully",
              status: 'success',
              position: 'top-right',
              isClosable: true,
            });
          })
          .on('error', () => {
            toast({
              title: 'Swap Failed',
              description: "Failed",
              status: 'error',
              position: 'top-right',
              isClosable: true,
            });
          });
      });
  }
  const handleInputChange = (e: any) => {
    burnRBTNumber = `0x${new BigNumber(e.target.value).shiftedBy(18).toString(16)}`;
  }

  const burnRBT = () => {
    const contract = new web3.eth.Contract(Reborn, delegatorAddr[chainId]);
    const contractFunc = contract.methods['burnRBT'];  
    const data = contractFunc(burnRBTNumber).encodeABI();
    const tx = {
        from: account,
        to: delegatorAddr[chainId],
        data,
        value: 0,
        gasLimit: 0
    }
    
    web3.eth.getBalance(account).then((preBalance: string) => {
      contractFunc(burnRBTNumber).estimateGas({from: account}).then((gasLimit: any) => {
        tx.gasLimit = gasLimit;
        web3.eth.sendTransaction(tx)
            .on('transactionHash', () => {
              setIsLoading(true);
            })
            .on('receipt', (receipt: any) => {
              onClose();
              setIsLoading(false);
              getRBTBalance();
              const usedGasFee = new BigNumber(receipt.gasUsed).multipliedBy(new BigNumber(receipt.effectiveGasPrice));
              web3.eth.getBalance(account).then((postBalance: string) => {
                console.log(2, postBalance);
                const ethAmount = usedGasFee.plus(new BigNumber(postBalance)).minus(new BigNumber(preBalance)).shiftedBy(-18).toString();
                toast({
                  title: 'Successfully',
                  description: `Burn RBT to get ${ethAmount} ${unit[chainId]}`,
                  status: 'success',
                  position: 'top-right',
                  isClosable: true,
                });
              });
            })
            .on('error', () => {
              setIsLoading(false);
              toast({
                title: 'Burn Failed',
                description: "Failed",
                status: 'error',
                position: 'top-right',
                isClosable: true,
              });
            });
        });
    });
  }

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        <HStack justifyContent='space-between'>
          <div>Your ERC20</div>
          <HStack spacing='18px'>
            <div>RBT:{rbtBalance}</div>
            <Button colorScheme='teal' variant='outline' onClick={onOpen}>Burn</Button>
          </HStack>
        </HStack>
      </Heading>
      {tokenList?.length ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table className="table-tiny">
              <Thead>
                <Tr>
                  <Th>Token</Th>
                  <Th>Value</Th>
                  <Th isNumeric>Address</Th>
                  <Th>Operator</Th>
                </Tr>
              </Thead>
              <Tbody>
                {tokenList?.map((token, key) => (
                  <Tr key={`${token?.symbol}-${key}-tr`} _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                    <Td>
                      <HStack>
                        <Avatar size="sm" src={token?.logo || ''} name={token?.name} />
                        <VStack alignItems={'flex-start'}>
                          <Text as={'span'}>{token?.name}</Text>
                          <Text fontSize={'xs'} as={'span'}>
                            {token?.symbol}
                          </Text>
                        </VStack>
                      </HStack>
                    </Td>
                    <Td>{balances[token?.address]}</Td>
                    <Td isNumeric>{getEllipsisTxt(token?.address || '')}</Td>
                    <Td>
                      <VStack spacing={4} align='center'>
                        <Button colorScheme='teal' variant='outline' onClick={() => approve(token?.address)}>Approve</Button>
                        <Button colorScheme='teal' variant='outline' onClick={() => getAmountOut(token?.address)}>Estimate Amount</Button>
                        <Button colorScheme='teal' variant='outline' onClick={() => swap2ETHw(token?.address)}>Swap out {unit[chainId]}</Button>
                      </VStack>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box>Looks Like you do not have any ERC20 tokenList</Box>
      )}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Burn RBT to get {unit[chainId]}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Burned Number</FormLabel>
              <Input ref={initialRef} onChange={handleInputChange} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={burnRBT} isLoading={isLoading} loadingText='Burnning'>
              Burn
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ERC20Balances;
