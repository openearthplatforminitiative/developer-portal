import Box from '@mui/material/Box';
import { CircleSpinner } from '@/app/components/CircleSpinner';
import Typography from '@mui/material/Typography';
import ApiCard from '@/app/components/ApiCard';
import { WeatherIcon } from '@/app/icons/WeatherIcon';
import { GeocodingIcon } from '@/app/icons/GeocodingIcon';
import { FloodIcon } from '@/app/icons/FloodIcon';
import InfoCard from '@/app/components/InfoCard';
import { JavascriptLogo } from '@/app/icons/JavascriptLogo';
import { PythonLogo } from '@/app/icons/PythonLogo';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { OpenLockIcon } from '@/app/icons/OpenLockIcon';
import { VerifiedIcon } from '@/app/icons/VerifiedIcon';
import { LightBulbIcon } from '@/app/icons/LightBulbIcon';

const Home = () => {
  return (
    <Box className={'-mt-44 mb-44 w-full'}>
      <Box className={'flex flex-row mb-28'}>
        <Box
          className={'flex flex-col bg-primary-90 w-1/2 py-48 overflow-hidden'}
        >
          <Box className={'relative -left-60 top-32'}>
            <Box
              className={
                'absolute animate-spinFrom90 left-[31.5px] top-[31.5px]'
              }
            >
              <CircleSpinner width={397} height={397} />
            </Box>
            <Box className={'absolute animate-spin'}>
              <CircleSpinner width={460} height={460} />
            </Box>
          </Box>
          <Box className={'flex flex-col ml-52 w-fit'}>
            <Typography className={'text-6xl font-semibold'}>
              Global open source data
            </Typography>
            <Typography className={'text-6xl font-normal'}>
              enabling local innovation
            </Typography>
          </Box>
        </Box>
        <Box
          className={
            'flex flex-col bg-neutral-95 w-1/2 gap-10 justify-center pl-16'
          }
        >
          <Box className={'flex flex-row gap-2'}>
            <OpenLockIcon />{' '}
            <Typography className={'text-3xl'}>Truly open source</Typography>
          </Box>
          <Box className={'flex flex-row gap-2'}>
            <VerifiedIcon />
            <Typography className={'text-3xl'}>
              Verified and quality assured data
            </Typography>
          </Box>
          <Box className={'flex flex-row gap-2'}>
            <LightBulbIcon />
            <Typography className={'text-3xl'}>
              Unique factor about the platform
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={'flex flex-col w-full max-w-7xl mx-auto'}>
        <Box className={'flex flex-col gap-8 mb-6'}>
          <Typography className={'text-5xl'}>
            Data catalog of open data
          </Typography>
          <Typography className={'text-2xl'}>
            We currently have 4 APIs available.
          </Typography>
        </Box>
        <Box className={'flex flex-col mt-24 gap-14 mb-48 items-end'}>
          <Box className={'flex flex-row gap-14'}>
            <ApiCard
              header={'Weather'}
              subHeader={
                'This section provides access to real-time weather data.'
              }
              CardIcon={WeatherIcon}
              href={'/data-catalog/weather'}
            />
            <ApiCard
              header={'Flood'}
              subHeader={
                'This section offers geocoding and address lookup services.'
              }
              CardIcon={FloodIcon}
              href={'/data-catalog/flood'}
            />
            <ApiCard
              header={'Geocoding'}
              subHeader={
                'This section offers geocoding and address lookup services.'
              }
              CardIcon={GeocodingIcon}
              href={'/data-catalog/geocoding'}
            />
          </Box>
          <Link href={'/data-catalog'}>
            <Button
              variant={'outlined'}
              className={
                'text-primary-main w-fit rounded-full border-neutralVariant-50 normal-case text-sm'
              }
            >
              View all
            </Button>
          </Link>
        </Box>
        <Box className={'flex flex-col'}>
          <Box className={'flex flex-col gap-8 mb-16'}>
            <Typography className={'text-4xl'}>Client libraries</Typography>
            <Typography className={'text-2xl'}>
              We provide two client libraries to make use of our data easier
            </Typography>
          </Box>
          <Box className={'flex flex-row gap-6 w-full'}>
            <InfoCard
              externalLink={true}
              header={'Javascript'}
              subHeader={'Some text about the JavaScript client library.'}
              CardIcon={JavascriptLogo}
              href={'https://www.npmjs.com/package/openepi-client'}
            />
            <InfoCard
              externalLink={true}
              header={'Python'}
              subHeader={'Some text about the Python client library.'}
              CardIcon={PythonLogo}
              href={'https://pypi.org/project/openepi-client/'}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
