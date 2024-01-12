import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { OpenEPILogoSmall } from '@/app/icons/OpenEPILogoSmall';
import { Divider, List, ListItem } from '@mui/material';
import { ExternalLinkIcon } from '@/app/icons/ExternalLinkIcon';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box className={'flex w-full flex-col bg-neutralVariant-90'}>
      <Box className={'flex flex-col items-center m-auto'}>
        <Box className='flex flex-row gap-5 mb-6 mt-11 w-full'>
          <OpenEPILogoSmall />
          <Typography className='text-2xl'>| Developer Portal</Typography>
        </Box>
        <Box className={'flex flex-row justify-between text-base w-full'}>
          <Box>
            <List className={'gap-4'}>
              <ListItem>
                <Link
                  className={'underline hover:no-underline'}
                  href={'/data-catalog'}
                >
                  Data catalog
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  className={'underline hover:no-underline'}
                  href={'/credentials'}
                >
                  Credentials
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  className={'underline hover:no-underline'}
                  href={'/resources'}
                >
                  Resources
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  className={'underline hover:no-underline'}
                  href={'/contact'}
                >
                  Contact
                </Link>
              </ListItem>
              <ListItem>
                <a
                  target={'_blank'}
                  className={
                    'flex flex-row gap-1 items-center underline hover:no-underline'
                  }
                  href={'https://openepi.io'}
                >
                  About the project <ExternalLinkIcon />
                </a>
              </ListItem>
            </List>
          </Box>
          <Box>
            <List className={'gap-4 '}>
              <ListItem className={'text-secondary-main'}>
                The OpenEPI project partners
              </ListItem>
              <ListItem>
                <a
                  target={'_blank'}
                  href='https://knowit.no'
                  className={
                    'flex flex-row gap-1 underline hover:no-underline items-center'
                  }
                >
                  Knowit <ExternalLinkIcon />
                </a>
              </ListItem>
              <ListItem>
                <a
                  target={'_blank'}
                  href='https://capto.no'
                  className={
                    'flex flex-row gap-1 underline hover:no-underline items-center'
                  }
                >
                  Capto
                  <ExternalLinkIcon />
                </a>
              </ListItem>
              <ListItem>
                <a
                  target={'_blank'}
                  href='https://www.creativecommons.org/'
                  className={
                    'flex flex-row gap-1 underline hover:no-underline items-center'
                  }
                >
                  Creative Commons
                  <ExternalLinkIcon />
                </a>
              </ListItem>
              <ListItem>
                <a
                  target={'_blank'}
                  href='https://openfuture.eu/'
                  className={
                    'flex flex-row gap-1 underline hover:no-underline items-center'
                  }
                >
                  Open Future
                  <ExternalLinkIcon />
                </a>
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box className={'flex flex-col gap-6 pt-14 pb-20'}>
          <Divider />
          <Typography>
            2023 - Except where otherwise noted, content on this site is
            licensed under a Creative Commons Attribution 4.0 International
            license.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
