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
  Stack,
  useToast
} from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { getEllipsisTxt } from 'utils/format';
import { IERC20Balances } from './types';
import Erc20ABI from './erc20ABI.json';
import SwapAllErc20 from './Reborn.json';
import BigNumber from 'bignumber.js';

const ERC20Balances: FC<IERC20Balances> = ({ account, web3, chainId }) => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  const [tokenList, setTokenList] = useState([])
  const [balances, setBalances] = useState({})

  const toast = useToast();

  const delegatorAddr = {10001: '0x3a9Fe5AC9Bab2d4457433185276a20718bFE6e2F', 513100: '0x6624b3b7501e9dd7D4003eB24C392EF07e27b1D4'};
  const unit = {10001: 'ETHW', 513100: 'ETF'}

  const getBalance = (erc20Addr: string, decimals: number) => {
    var contract = new web3.eth.Contract(Erc20ABI, erc20Addr);
    const contractFunc = contract.methods['balanceOf'];        
    contractFunc(account).call({from: account}).then(result => {
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

  useEffect(() => {
    if (account != null) {
      const etherScanURL = 'https://api.ethplorer.io/getAddressInfo/' + account + '?apiKey=freekey';
      
      fetch(etherScanURL)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data == null || data.tokens == null) return;
          const tokens = []
          data.tokens.map(token => {
            if (token.tokenInfo.decimals == 0) return;
            tokens.push(token.tokenInfo);
            getBalance(token.tokenInfo.address, token.tokenInfo.decimals);
          })
          setTokenList(tokens);
        });
    }
  }, [account]);

  const approve = (erc20Addr) => {
    var contract = new web3.eth.Contract(Erc20ABI, erc20Addr);
    var contractFunc = contract.methods['allowance'];  
    contractFunc(account, delegatorAddr[chainId]).call({from: account}).then(result => {
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
        const data = contractFunc(delegatorAddr[chainId], '0x' + new BigNumber(1).shiftedBy(28).toString(16)).encodeABI();
        const tx = {
            from: account,
            to: erc20Addr,
            data,
            value: 0
        }
        contractFunc(delegatorAddr[chainId], '0x' + new BigNumber(1).shiftedBy(28).toString(16)).estimateGas({from: account}).then(gasLimit => {
          tx.gasLimit = gasLimit;
          web3.eth.sendTransaction(tx)
              .on('transactionHash', txHash => {
                  
              })
              .on('receipt', receipt => {
                getBalance(erc20Addr, 18);
                toast({
                  title: 'Approved Successfully',
                  description: "Has been approved successfully",
                  status: 'success',
                  position: 'top-right',
                  isClosable: true,
                });
              })
              .on('error', error => {
                  
              });
         });
      }
    });   
  }

  const getAmountOut = (erc20Addr) => {
    var contract = new web3.eth.Contract(SwapAllErc20, delegatorAddr[chainId]);
    var contractFunc = contract.methods['getAmountOutETH'];  
    contractFunc([erc20Addr]).call({from: account}).then(result => {
      try {
        const balance = new BigNumber(result).shiftedBy(-18).toString();
        toast({
          title: unit[chainId] + ' AmountOut',
          description: balance + ' ' + unit[chainId],
          status: 'success',
          position: 'top-right',
          isClosable: true,
        });
      } catch (error) {
        console.log(erc20Addr, 'error');
      }
    });
  }

  const swap2ETHw = (erc20Addr) => {
    var contract = new web3.eth.Contract(SwapAllErc20, delegatorAddr[chainId]);
    var contractFunc = contract.methods['swap'];  
    const data = contractFunc([erc20Addr]).encodeABI();
    const tx = {
        from: account,
        to: delegatorAddr[chainId],
        data,
        value: 0
    }

    console.log('tx1', tx, erc20Addr);
    contractFunc([erc20Addr]).estimateGas({from: account}).then(gasLimit => {
      tx.gasLimit = gasLimit;
      console.log('tx2', tx);
      web3.eth.sendTransaction(tx)
          .on('transactionHash', txHash => {
              
          })
          .on('receipt', receipt => {
            toast({
              title: 'Swap ETH-w Successfully',
              description: "Has been swapped successfully",
              status: 'success',
              position: 'top-right',
              isClosable: true,
            });
          })
          .on('error', error => {
              
          });
      });
  }

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        ERC20 Balances
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
    </>
  );
};

export default ERC20Balances;
