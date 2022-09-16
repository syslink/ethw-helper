import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const links = {
  github: 'https://github.com/ethereum-boilerplate/ethereum-boilerplate/',
  discord: 'https://moralis.io/?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat',
};

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>
      {/* <Text>
        ⭐️ Please star this{' '}
        <Link href={links.github} isExternal alignItems={'center'}>
          ethereum-pow-helper <ExternalLinkIcon />
        </Link>
        , every star makes us very happy!
      </Text>
      <Text>
        📖 Join in {' '}
        <Link href={links.discord} isExternal alignItems={'center'}>
          Discord <ExternalLinkIcon />
        </Link>
      </Text> */}
    </Box>
  );
};

export default Footer;
