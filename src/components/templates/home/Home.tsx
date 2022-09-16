import { CheckCircleIcon, SettingsIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import { Heading, VStack, List, ListIcon, ListItem } from '@chakra-ui/react';
import { Container, Link, Button } from '@chakra-ui/react';
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from "@web3-react/core";
import { Default } from 'components/layouts/Default';
import { ERC20Balances, IERC20Balances } from 'components/templates/balances/ERC20';

const Home = () => {
  const { active, account, library, chainId, connector, activate, deactivate } = useWeb3React()
  
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


  return (
    <VStack w={'full'}>
      <Heading size="md" marginBottom={6}>
        <Button onClick={() => active ? disconnect() : connect()} colorScheme='teal' variant='outline'>
          {active ? <span><b>{account}</b></span> : <span>Connect to MetaMask</span>}
        </Button>        
      </Heading>

      <Container maxW="100%" p={3} marginTop={100} as="main" minH="70vh">
        <ERC20Balances account={account} web3={library} chainId={chainId}/>
      </Container>
    </VStack>
  );
};

export default Home;
