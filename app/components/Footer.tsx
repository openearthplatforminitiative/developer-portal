import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { OpenEPILogoSmall } from '@/app/icons/OpenEPILogoSmall';
import { List, ListItem } from '@mui/material';
import { ExternalLinkIcon } from '@/app/icons/ExternalLinkIcon';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box className={'flex w-full flex-col bg-neutralVariant-90'}>
      <Box className={'flex flex-col items-center m-auto'}>
        <Box className='flex flex-row gap-5 justify-center mb-6 mt-11'>
          <OpenEPILogoSmall />
          <Typography className='text-2xl'>| Developer Portal</Typography>
        </Box>
        <Box className={'flex flex-row justify-between'}>
          <Box>
            <List className={'gap-4'}>
              <ListItem>Data catalog</ListItem>
              <ListItem>Credentials</ListItem>
              <ListItem>Resources</ListItem>
              <ListItem>Contact</ListItem>
              <ListItem className={'gap-1'}>
                About the project <ExternalLinkIcon />
              </ListItem>
            </List>
          </Box>
          <Box>
            <List className={'gap-4'}>
              <ListItem className={'text-secondary-main'}>
                The OpenEPI project partners
              </ListItem>
              <ListItem>
                <a
                  target={'_blank'}
                  href='https://knowit.no'
                  className={'flex flex-row gap-1'}
                >
                  Knowit <ExternalLinkIcon />
                </a>
              </ListItem>
              <ListItem>
                <a
                  target={'_blank'}
                  href='https://capto.no'
                  className={'flex flex-row gap-1'}
                >
                  Capto
                  <ExternalLinkIcon />
                </a>
              </ListItem>
              <ListItem>
                <a
                  target={'_blank'}
                  href='https://www.creativecommons.org/'
                  className={'flex flex-row gap-1'}
                >
                  Creative Commons
                  <ExternalLinkIcon />
                </a>
              </ListItem>
              <ListItem>
                <a
                  target={'_blank'}
                  href='https://openfuture.eu/'
                  className={'flex flex-row gap-1'}
                >
                  Open Future
                  <ExternalLinkIcon />
                </a>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
