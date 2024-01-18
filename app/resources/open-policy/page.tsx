import Link from 'next/link';
import { BackIcon } from '@/app/icons/BackIcon';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Box className={'w-full h-full lg:max-w-7xl p-6 lg:mt-0 -mt-24'}>
      <Link
        href='/resources'
        className={
          'flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1'
        }
      >
        <BackIcon />
        <Typography className={'text-xl'}> Back to resources </Typography>
      </Link>

      <Box>
        <Box className={'flex flex-col gap-8 mt-14 mb-20'}>
          <Typography className={'text-5xl'}>Our open policy</Typography>
          <Typography className={'text-2xl'}>Lead paragraph</Typography>
        </Box>
        <Box>
          <Box className={'flex flex-col gap-8'}>
            <Typography className={'text-4xl'}>Background</Typography>
            <Typography className={'text-base'}>
              Begin your journey by creating a user account. This will be your
              gateway to a world of data-driven possibilities. Click the
              &quot;Sign Up&quot; button, fill in your details, and voila!
              You&apos;re one step closer to unlocking the full potential of our
              platform.
            </Typography>
          </Box>
          <Box className={'flex flex-col gap-8'}>
            <Typography className={'text-3xl mt-14'}>Sub heading</Typography>
            <Typography className={'text-base'}>
              Begin your journey by creating a user account. This will be your
              gateway to a world of data-driven possibilities. Click the
              &quot;Sign Up&quot; button, fill in your details, and voila!
              You&apos;re one step closer to unlocking the full potential of our
              platform. There is a need for a robust and accessible digital
              infrastructure for open data and algorithms on weather, water,
              earth, and vegetation, across projects, sectors, and contexts –
              providing a base for the necessary local technology innovation.
              The Open Earth Platform (OpenEPI) is an initiative to prepare for
              such an infrastructure.
            </Typography>
            <Typography className={'text-base'}>
              There is a need for a robust and accessible digital infrastructure
              for open data and algorithms on weather, water, earth, and
              vegetation, across projects, sectors, and contexts – providing a
              base for the necessary local technology innovation. The Open Earth
              Platform (OpenEPI) is an initiative to prepare for such an
              infrastructure.
            </Typography>
          </Box>
          <Box className={'flex flex-col gap-8 mt-14'}>
            <Typography className={'text-3xl'}>Sub heading</Typography>
            <Typography className={'text-base'}>
              Begin your journey by creating a user account. This will be your
              gateway to a world of data-driven possibilities. Click the
              &quot;Sign Up&quot; button, fill in your details, and voila!
              You&apos;re one step closer to unlocking the full potential of our
              platform. There is a need for a robust and accessible digital
              infrastructure for open data and algorithms on weather, water,
              earth, and vegetation, across projects, sectors, and contexts –
              providing a base for the necessary local technology innovation.
              The Open Earth Platform (OpenEPI) is an initiative to prepare for
              such an infrastructure.
            </Typography>
            <Typography className={'text-base'}>
              There is a need for a robust and accessible digital infrastructure
              for open data and algorithms on weather, water, earth, and
              vegetation, across projects, sectors, and contexts – providing a
              base for the necessary local technology innovation. The Open Earth
              Platform (OpenEPI) is an initiative to prepare for such an
              infrastructure.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
