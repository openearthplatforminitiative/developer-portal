'use client';

import { OpenEPILogoLarge } from '@/app/icons/OpenEPILogoLarge';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { ExternalLinkIcon } from '@/app/icons/ExternalLinkIcon';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const currentRoute = usePathname();
  const baseStyle: string = 'px-6 py-2 rounded-full';

  const linkClassName = (path: string) =>
    currentRoute.startsWith(path)
      ? baseStyle + ' bg-secondary-90'
      : baseStyle + ' hover:bg-[#1d1b2014]';

  return (
    <nav className='flex flex-row items-center p-12 justify-between'>
      <Link href={'/'}>
        <Box className='flex flex-row gap-5 items-center'>
          <OpenEPILogoLarge />
          <Typography className='text-4xl'>| Developer Portal</Typography>
        </Box>
      </Link>
      <Box className='flex flex-row text-2xl'>
        <Link href='/data-catalog' className={linkClassName('/data-catalog/')}>
          Data catalog
        </Link>
        <Link href='/credentials' className={linkClassName('/credentials/')}>
          Credentials
        </Link>
        <Link href='/resources' className={linkClassName('/resources/')}>
          Resources
        </Link>
        <Link href='/contact' className={linkClassName('/contact/')}>
          Contact
        </Link>
        <a
          href={'https://openepi.io'}
          target={'_blank'}
          className={
            baseStyle +
            ' flex flex-row items-center gap-1.5 hover:bg-[#1d1b2014]'
          }
        >
          About the project <ExternalLinkIcon />
        </a>
      </Box>
    </nav>
  );
};

export default NavBar;
