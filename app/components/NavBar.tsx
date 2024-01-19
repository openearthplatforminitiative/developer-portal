'use client';

import { OpenEPILogoLarge } from '@/app/icons/OpenEPILogoLarge';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Box from '@mui/material/Box';
import { ExternalLinkIcon } from '@/app/icons/ExternalLinkIcon';
import { usePathname } from 'next/navigation';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import { BurgerMenu } from '@/app/icons/BurgerMenu';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const currentRoute = usePathname();
  const baseStyle: string = 'px-6 py-2 rounded-full';

  const linkClassName = (path: string) =>
    currentRoute.startsWith(path)
      ? baseStyle + ' bg-secondary-90'
      : baseStyle + ' hover:bg-[#1d1b2014]';

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsOpen(true);
  };

  return (
    <nav className='flex flex-row items-center sm:p-12 p-6 justify-between'>
      <Link href={'/'}>
        <Box className='flex lg:flex-row flex-col gap-5 items-center'>
          <OpenEPILogoLarge />
          <Typography className='lg:text-4xl 2xl:inline hidden'>
            | Developer Portal
          </Typography>
        </Box>
      </Link>
      <Box className='xl:flex xl:flex-row xl:text-2xl hidden'>
        <Link href='/data-catalog' className={linkClassName('/data-catalog/')}>
          Data catalog
        </Link>
        <Link href='/resources' className={linkClassName('/resources/')}>
          Resources
        </Link>
        <Link href='/contact' className={linkClassName('/contact/')}>
          Contact
        </Link>
        <Link
          href={'https://openepi.io'}
          target={'_blank'}
          className={
            baseStyle +
            ' flex flex-row items-center gap-1.5 hover:bg-[#1d1b2014]'
          }
        >
          About the project <ExternalLinkIcon />
        </Link>
      </Box>
      <Box className={'xl:hidden'}>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={handleClick}
        >
          <BurgerMenu width={36} height={24} />
        </IconButton>
        <Menu
          open={isOpen}
          onClose={handleClose}
          disableScrollLock={true}
          anchorEl={anchorEl}
        >
          <MenuItem onClick={handleClose}>
            <Link href='/data-catalog' className={'p-2'}>
              <Typography className={'text-lg'}>Data catalog</Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/resources' className={'p-2'}>
              <Typography className={'text-lg'}>Resources </Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href='/contact' className={'p-2'}>
              <Typography className={'text-lg'}>Contact</Typography>
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link
              href={'https://openepi.io'}
              target={'_blank'}
              className={'flex flex-row gap-2 items-center p-2'}
            >
              <Typography className={'text-lg'}>About the project</Typography>
              <ExternalLinkIcon />
            </Link>
          </MenuItem>
        </Menu>
      </Box>
    </nav>
  );
};

export default NavBar;
