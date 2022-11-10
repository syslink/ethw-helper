import { Heading, VStack, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Container, Button } from '@chakra-ui/react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from "@web3-react/core";
import { ERC20Balances } from 'components/templates/balances/ERC20';
import { Arbitrage } from 'components/templates/arbitrage';

const Home = () => {
  const { active, account, library, chainId, activate, deactivate } = useWeb3React()
  
  const injected = new InjectedConnector({
    supportedChainIds: [1, 513100, 10001],
  })

  async function connect() {
    try {
      console.log('connect')
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  function wallet() {
    if (active) {
      disconnect();
    } else {
      connect();
    }
  }

  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        <Button onClick={() => wallet()} colorScheme='teal' variant='outline'>
          {active ? <span><b>{account}</b></span> : <span>Connect to MetaMask(Only support EthereumPoW/EthereumFair)</span>}
        </Button>        
      </Heading>

      <Tabs>
        <TabList>
          <Tab>Token</Tab>
          <Tab>Arbitrage</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Container maxW="100%" p={3} marginTop={100} as="main" minH="70vh">
              <ERC20Balances account={account} web3={library} chainId={chainId}/>
            </Container>
          </TabPanel>
          <TabPanel>
            <Container maxW="100%" p={3} marginTop={100} as="main" minH="70vh">
              <Arbitrage account={account} web3={library} chainId={chainId}/>
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </VStack>
  );
};

export default Home;
