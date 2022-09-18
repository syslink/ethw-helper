import { Box, Link, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Footer = () => {
  return (
    <Box textAlign={'center'} w="full" p={6}>      
      <Text>
        🙋 You have questions? Ask in the{' '}
        <Link href={"https://discord.gg/VQ8EA78w"} isExternal alignItems={'center'}>
          Discord <ExternalLinkIcon />
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
