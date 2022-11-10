import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Heading,
  Box,
  useColorModeValue,
  VStack,
  Button,
  Input,
  HStack,
  Checkbox,
  Tooltip,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  FormControl,
  FormLabel,
  FormErrorMessage
} from '@chakra-ui/react';
import { SettingsIcon, DeleteIcon, AddIcon } from '@chakra-ui/icons';
import React, { FC, useEffect, useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Arbitrage from './Arbitrage.json';
import ArbManual from './ArbManual.json';
import Erc20ABI from './erc20ABI.json';
import BigNumber from 'bignumber.js';


type Web3Info = {
  account: string;
  web3: any;
  chainId: number;
}
const arbAddr: Record<number, string> = {10001: '0xdFdd252C40A0826AC1D82d8C84EB82bf6c96b4E8', 513100: '0xadf0938730109c7e60e10b640ad5de6b16f604bc'}
const arbManualAddr: Record<number, string> = {10001: '0x0254C1402AEF852B2A0a5e2E04754F2F2A50684b', 513100: '0xadf0938730109c7e60e10b640ad5de6b16f604bc'}
const middleTokenName: Record<string, string> = {'0xdAC17F958D2ee523a2206206994597C13D831ec7': 'usdt', 
                                                '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': 'usdc', 
                                                '0x6B175474E89094C44Da98b954EedeAC495271d0F': 'dai', 
                                                '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': 'weth'}
const Transactions: FC<Web3Info> = ({ account, web3, chainId }) => {
  const hoverTrColor = useColorModeValue('gray.100', 'gray.700');

  const modal1 = useDisclosure();
  const modal2 = useDisclosure();

  const [arbitrageableTokens, setArbitrageableTokens] = useState<any>({});
  const [fromIndex, setFromIndex] = useState<number>(0);
  const [analysis, setAnalysis] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isManualLoading, setIsManualLoading] = useState<boolean>(false);
  const [bestArbPriceInfo, setBestArbPriceInfo] = useState<string>('');
  const [firstPath, setFirstPath] = useState<string>('');
  const [secondPath, setSecondPath] = useState<string>('');
  const [curBestArbInfo, setCurBestArbInfo] = useState<any>({});
  const [searchStep, setSearchStep] = useState<number>(100);
  const [minGranularity, setMinGranularity] = useState<number>(100);
  const [maxGranularity, setMaxGranularity] = useState<number>(10);
  const [minWethAmount, setMinWethAmount] = useState<number>(1);
  const [minUAmount, setMinUAmount] = useState<number>(10000);
  const [convert2ETH, setConvert2ETH] = useState<boolean>(false);

  const toast = useToast();

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  useEffect(() => {
    if (account != null && analysis) {
      getArbitrageableTokens();
    }
  }, [account, fromIndex, analysis]);

  const getArbitrageableTokens = () => {
    console.log('get tokens', fromIndex);
    const contract = new web3.eth.Contract(Arbitrage, arbAddr[chainId]);
    let contractFunc = contract.methods['findTokens'];        
    contractFunc(fromIndex, fromIndex + searchStep, 100, minWethAmount, minUAmount).call({from: account, gasLimit: '0x' + new BigNumber(30000000).toString(16)}).then((arbInfos: any) => {
      try {
        const len = arbInfos.length;
        setTimeout(() => {
          setFromIndex(fromIndex + searchStep);
        }, 2000);        
        for (var i = 0; i < len; i++) {
          if (arbInfos[i].index == 0) break;
          let arbInfo = arbInfos[i];
          //console.log(arbInfo);
          contractFunc = contract.methods['getTokenPair']; 
          contractFunc(arbInfo.index).call({from: account}).then((pairInfo: any) => {
            //Object.assign(arbInfo, pairInfo);
            pairInfo.index = arbInfo.index;
            pairInfo.amountIn = arbInfo.amountIn;
            pairInfo.gapAmount = arbInfo.gapAmount;
            //console.log(pairInfo);
            arbitrageableTokens[arbInfo.index] = pairInfo;
            // console.log(arbitrageableTokens);
            // const tokens = Object.entries(arbitrageableTokens).map((entry: any) => entry[1]);
            // console.log(tokens);
            setArbitrageableTokens(JSON.parse(JSON.stringify(arbitrageableTokens)));
          })
        }
      } catch (error) {
        console.log(error);
        setAnalysis(false);
      }
    });
  }

  const approve = (erc20Addr: string) => {
  }

  const refresh = (index: number) => {
    const contract = new web3.eth.Contract(Arbitrage, arbAddr[chainId]);
    let contractFunc = contract.methods['findTokens'];   
    console.log(index, index + 1, 100, minWethAmount, minUAmount);     
    contractFunc(index, index + 1, 100, minWethAmount, minUAmount).call({from: account, gasLimit: '0x' + new BigNumber(30000000).toString(16)}).then((arbInfos: any) => {
      try {   
        let arbInfo = arbInfos[0];
        contractFunc = contract.methods['getTokenPair']; 
        contractFunc(arbInfo.index).call({from: account}).then((pairInfo: any) => {
          pairInfo.index = arbInfo.index;
          pairInfo.amountIn = arbInfo.amountIn;
          pairInfo.gapAmount = arbInfo.gapAmount;
          arbitrageableTokens[arbInfo.index] = pairInfo;
          console.log(pairInfo);
          setArbitrageableTokens(JSON.parse(JSON.stringify(arbitrageableTokens)));
        })
      } catch (error) {
        console.log(error);
        setAnalysis(false);
      }
    });
  }

  const getWethPrice = async () => {

  }

  const analyseBestStrat = (index: number, bTokenA: boolean) => {
    const arbitrage = new web3.eth.Contract(Arbitrage, arbAddr[chainId]);
    let contractFunc = arbitrage.methods['getTokenPair'];
    contractFunc(index).call().then((pairInfo: any) => {
      const token0 = bTokenA ? pairInfo.token0 : pairInfo.token1;
      const token1 = bTokenA ? pairInfo.token1 : pairInfo.token0;
      const token0Name = bTokenA ? pairInfo.token0Name : pairInfo.token1Name;
      const token1Name = bTokenA ? pairInfo.token1Name : pairInfo.token0Name;
      const erc20 = new web3.eth.Contract(Erc20ABI, token0);
      contractFunc = erc20.methods['decimals'];  
      contractFunc().call().then((decimals: any) => {
        const arbitrage = new web3.eth.Contract(Arbitrage, arbAddr[chainId]);
        contractFunc = arbitrage.methods['calculateBestArb'];        
        contractFunc(token0, token1, minGranularity, maxGranularity).call({from: account, gasLimit: '0x' + new BigNumber(30000000).toString(16)}).then((bestArbInfo: any) => {
          try {
            console.log(bestArbInfo, decimals);
            setCurBestArbInfo({...bestArbInfo, token0, token1});
            // address tokenIn, uint decimals, uint bestAmountIn, uint bestAmountOut
            const bestAmountIn = new BigNumber(bestArbInfo.bestAmountIn).shiftedBy(decimals * -1).toFixed(6).toString();
            const bestAmountOut = new BigNumber(bestArbInfo.bestAmountOut).shiftedBy(decimals * -1).toFixed(6).toString();
            setBestArbPriceInfo(`${token0Name}: ${bestAmountIn} -> ${bestAmountOut}`);
            const uniMiddleTokenName = middleTokenName[bestArbInfo.uniMiddleToken] == null ? '' : middleTokenName[bestArbInfo.uniMiddleToken];
            const sushiMiddleTokenName = middleTokenName[bestArbInfo.sushiMiddleToken] == null ? '' : middleTokenName[bestArbInfo.sushiMiddleToken];
            if (bestArbInfo.bUniFirst) {
              setFirstPath(`uniswap: ${token0Name}->${uniMiddleTokenName}->${token1Name}`);
              setSecondPath(`sushiswap: ${token1Name}->${sushiMiddleTokenName}->${token0Name}`);
            } else {
              setFirstPath(`sushiswap: ${token0Name}->${sushiMiddleTokenName}->${token1Name}`);
              setSecondPath(`uniswap: ${token1Name}->${uniMiddleTokenName}->${token0Name}`);
            }
            modal1.onOpen();            
          } catch (error) {
            console.log(error);
          }
        });
      });
    });
  }
  
  const fromIndexInputChanged = (index: any) => {
    //console.log(e);
    setFromIndex(parseInt(index));
  }

  const analyse = () => {
    if (analysis) {
      setAnalysis(false);      
    } else {
      setAnalysis(true);      
    }
  }

  // (address srcErc20, address dstErc20, address uniMiddleToken, address sushiMiddleToken, uint amountIn, bool bUniFirst)
  // (uint bestAmountIn, uint bestAmountOut, bool bUniFirst, address uniMiddleToken, address sushiMiddleToken)
  /*
      struct BestArbInfo {
        address tokenIn;
        uint decimals;
        uint bestAmountIn;
        uint bestAmountOut;
        bool bUniFirst;
        address uniMiddleToken;
        address sushiMiddleToken;
      }
  */
  const startArbitrage = () => {
    setIsLoading(false);
    const arbitrage = new web3.eth.Contract(Arbitrage, arbAddr[chainId]);
    let contractFunc = arbitrage.methods['flashArbitrage'];
    const data = contractFunc(curBestArbInfo.token0, curBestArbInfo.token1, 
      curBestArbInfo.uniMiddleToken, curBestArbInfo.sushiMiddleToken, 
      `0x${new BigNumber(curBestArbInfo.bestAmountIn).toString(16)}`,
      curBestArbInfo.bUniFirst, convert2ETH).encodeABI();
    const tx = {
        from: account,
        to: arbAddr[chainId],
        data,
        value: 0,
        gasLimit: 0,
        //maxPriorityFeePerGas: `0x${new BigNumber(1000000000).toString(16)}`,
    }
    contractFunc(curBestArbInfo.token0, curBestArbInfo.token1, 
                 curBestArbInfo.uniMiddleToken, curBestArbInfo.sushiMiddleToken, 
                 `0x${new BigNumber(curBestArbInfo.bestAmountIn).toString(16)}`,
                 curBestArbInfo.bUniFirst, convert2ETH).estimateGas({from: account}).then((gasLimit: any) => {
                    tx.gasLimit = gasLimit;
                    web3.eth.sendTransaction(tx)
                      .on('transactionHash', () => {
                        setIsLoading(true);
                      })
                      .on('receipt', () => {
                        setIsLoading(false);
                        toast({
                          title: 'Arbitrage Successfully',
                          description: "Has been arbitraged successfully",
                          status: 'success',
                          position: 'top-right',
                          isClosable: true,
                        });
                    })
                    .on('error', () => {
                      setIsLoading(false);
                      toast({
                        title: 'Arbitrage Failed',
                        description: "Failed",
                        status: 'error',
                        position: 'top-right',
                        isClosable: true,
                      });
                    });
                 });
  }

  const startManualArbitrage = () => {
    const arbitrage = new web3.eth.Contract(ArbManual, arbManualAddr[chainId]);
    let contractFunc = arbitrage.methods['flashArbitrage'];
    let uniPath = new BigNumber(curBestArbInfo.uniMiddleToken).isEqualTo(new BigNumber(0)) ? 
                    [curBestArbInfo.token0, curBestArbInfo.token1] : [curBestArbInfo.token0, curBestArbInfo.uniMiddleToken, curBestArbInfo.token1];
    
    let sushiPath = new BigNumber(curBestArbInfo.sushiMiddleToken).isEqualTo(new BigNumber(0)) ? 
                    [curBestArbInfo.token1, curBestArbInfo.token0] : [curBestArbInfo.token1, curBestArbInfo.sushiMiddleToken, curBestArbInfo.token0];  
    if (!curBestArbInfo.bUniFirst) {
      uniPath = new BigNumber(curBestArbInfo.uniMiddleToken).isEqualTo(new BigNumber(0)) ? 
                    [curBestArbInfo.token1, curBestArbInfo.token0] : [curBestArbInfo.token1, curBestArbInfo.uniMiddleToken, curBestArbInfo.token0];
    
      sushiPath = new BigNumber(curBestArbInfo.sushiMiddleToken).isEqualTo(new BigNumber(0)) ? 
                      [curBestArbInfo.token0, curBestArbInfo.token1] : [curBestArbInfo.token0, curBestArbInfo.sushiMiddleToken, curBestArbInfo.token1]; 
    }                      
    console.log(uniPath, sushiPath, `0x${new BigNumber(curBestArbInfo.bestAmountIn).toString(16)}`, curBestArbInfo.bUniFirst);                                
    const data = contractFunc(uniPath, sushiPath, `0x${new BigNumber(curBestArbInfo.bestAmountIn).toString(16)}`, curBestArbInfo.bUniFirst).encodeABI();
    const tx = {
        from: account,
        to: arbManualAddr[chainId],
        data,
        value: 0,
        gasLimit: 0,
        //maxPriorityFeePerGas: `0x${new BigNumber(1000000000).toString(16)}`,
    }
    contractFunc(uniPath, sushiPath, `0x${new BigNumber(curBestArbInfo.bestAmountIn).toString(16)}`, curBestArbInfo.bUniFirst)
                .estimateGas({from: account}).then((gasLimit: any) => {
                    tx.gasLimit = gasLimit;
                    web3.eth.sendTransaction(tx)
                      .on('transactionHash', () => {
                        setIsManualLoading(true);
                      })
                      .on('receipt', () => {
                        setIsManualLoading(false);
                        toast({
                          title: 'Arbitrage Successfully',
                          description: "Has been arbitraged successfully",
                          status: 'success',
                          position: 'top-right',
                          isClosable: true,
                        });
                    })
                    .on('error', () => {
                      toast({
                        title: 'Arbitrage Failed',
                        description: "Failed",
                        status: 'error',
                        position: 'top-right',
                        isClosable: true,
                      });
                    });
                 });
  }

  const clearArbInfo = () => {
    setArbitrageableTokens({});
  }

  const addArbInfo = () => {
    
  }

  return (
    <>
      <Heading size="lg" marginBottom={6}>
        <HStack justifyContent='space-between'>
          <div>Arbitrageable Tokens</div>  
          <HStack>      
            <NumberInput value={fromIndex} step={1} min={0} max={100000} onChange={fromIndexInputChanged}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button size='sm' onClick={analyse}>
                {analysis ? 'Stop Analysis' : 'Start Analysis'}
            </Button>
          </HStack>  
          <HStack>      
            <Tooltip label='Set Analysis Parameters'>
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Setting Analysis'
                onClick={modal2.onOpen}
                icon={<SettingsIcon />}
              />
            </Tooltip>
            <Tooltip label='Add Pair'>
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Clear'
                onClick={addArbInfo}
                icon={<AddIcon />}
              />
            </Tooltip>
            <Tooltip label='Clear All Pairs'>
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='Clear'
                onClick={clearArbInfo}
                icon={<DeleteIcon />}
              />
            </Tooltip>
          </HStack>
        </HStack>
      
      </Heading>
      {Object.entries(arbitrageableTokens)?.length ? (
        <Box border="2px" borderColor={hoverTrColor} borderRadius="xl" padding="24px 18px">
          <TableContainer w={'full'}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Index</Th>
                  <Th>TokenA</Th>
                  <Th>TokenB</Th>
                  <Th>ReserveA</Th>
                  <Th>ReserveB</Th>
                  <Th>AmountIn</Th>
                  <Th>EarnedAmount</Th>
                  <Th>Operator</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.entries(arbitrageableTokens)?.map((entry: any) => {
                  const key = entry[1].index;
                  const arbObj = entry[1];
                  return <Tr key={key} _hover={{ bgColor: hoverTrColor }} cursor="pointer">
                    <Td>{arbObj.index}</Td>  
                    <Td>{arbObj.token0Name}</Td>
                    <Td>{arbObj.token1Name}</Td>
                    <Td>{`${arbObj.reserve0} ${arbObj.token0Name}`}</Td>
                    <Td>{`${arbObj.reserve1} ${arbObj.token1Name}`}</Td>
                    <Td>{`${arbObj.amountIn} ${arbObj.token0Name}`}</Td>
                    <Td>{`${arbObj.gapAmount} ${arbObj.token0Name}`}</Td>
                    <Td>
                      <VStack spacing={4} align='center'>
                        <Button colorScheme='teal' variant='outline' onClick={() => analyseBestStrat(arbObj.index, true)}>Analyse {arbObj.token0Name}</Button>
                        <Button colorScheme='teal' variant='outline' onClick={() => analyseBestStrat(arbObj.index, false)}>Analyse {arbObj.token1Name}</Button>
                        <Button colorScheme='teal' variant='outline' onClick={() => approve(arbObj.address)}>Approve</Button>
                        <Button colorScheme='teal' variant='outline' onClick={() => refresh(parseInt(arbObj.index))}>Refresh</Button>
                      </VStack>
                    </Td>
                  </Tr>
                })}
              </Tbody>
              <Tfoot>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
      ) : (
        <Box>Looks Like there is no arbitrageable tokens.</Box>
      )}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={modal1.isOpen}
        onClose={modal1.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Best Arbitrage Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {bestArbPriceInfo}
            <p/>
            {firstPath}
            <p/>
            {secondPath}
            <p/>
            <Checkbox onChange={(e) => setConvert2ETH(e.target.checked)}>Convert to ETH</Checkbox>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={startManualArbitrage} isLoading={isManualLoading} loadingText='Arbitraging'>
              USDT Arbitrage
            </Button>
            <Button colorScheme='blue' mr={3} onClick={startArbitrage} isLoading={isLoading} loadingText='Arbitraging'>
              Arbitrage Now
            </Button>
            <Button onClick={modal1.onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={modal2.isOpen}
        onClose={modal2.onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Arbitrage Setting</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Formik
              initialValues={{ searchStep, minGranularity, maxGranularity, minWethAmount, minUAmount}}
              onSubmit={(values, actions) => {
                console.log(values);
                setSearchStep(values.searchStep);
                setMinGranularity(values.minGranularity);
                setMaxGranularity(values.maxGranularity);
                setMinWethAmount(values.minWethAmount);
                setMinUAmount(values.minUAmount);
                modal2.onClose();
              }}
            >
              {(props) => (
                <Form>
                  <Field name='searchStep'>
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>Search Step</FormLabel>
                        <Input {...field} />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='minGranularity'>
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>Min Granularity</FormLabel>
                        <Input {...field} />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='maxGranularity'>
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>Max Granularity</FormLabel>
                        <Input {...field} />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='minWethAmount'>
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>Min Weth Amount</FormLabel>
                        <Input {...field} />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='minUAmount'>
                    {({ field, form }: any) => (
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel>Min U Amount</FormLabel>
                        <Input {...field} />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <Button
                    mt={4}
                    colorScheme='teal'
                    type='submit'
                  >
                    Confirm
                  </Button>
                </Form>
              )}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Transactions;
