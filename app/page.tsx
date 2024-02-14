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
    <Box className={'lg:mb-28 mb-16 w-full'}>
      <Box className={'flex xl:flex-row flex-col mb-28'}>
        <Box
          className={
            'flex flex-col bg-primary-90 xl:w-1/2 py-48 overflow-hidden'
          }
        >
          <Box
            className={
              'relative xl:-left-60 -left-64 2xs:top-44 xs:top-80 sm:top-40 lg:top-20 xl:top-32'
            }
          >
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

          <Typography
            variant={'h1'}
            className={
              'leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl font-normal w-full h-full xl:max-w-[37.5rem] pr-20 xl:ml-auto z-10 2xs:pl-8 xs:pl-32 xl:pl-0'
            }
          >
            <b> Global open source data</b> enabling local innovation
          </Typography>
        </Box>
        <Box
          className={
            'flex flex-col bg-neutral-95 xl:w-1/2 gap-10 justify-center xs:pl-32 xl:pl-16 py-16 p-6'
          }
        >
          <Box className={'flex flex-row gap-2'}>
            <Box className={'w-fit h-fit'}>
              <OpenLockIcon />
            </Box>
            <Typography className={'text-2xl xs:text-3xl'}>
              Truly open source
            </Typography>
          </Box>
          <Box className={'flex flex-row gap-2'}>
            <Box className={'w-fit h-fit'}>
              <VerifiedIcon />
            </Box>
            <Typography className={'text-2xl xs:text-3xl'}>
              Verified and quality assured data
            </Typography>
          </Box>
          <Box className={'flex flex-row gap-2'}>
            <Box className={'w-fit h-fit'}>
              <LightBulbIcon />
            </Box>
            <Typography className={'text-2xl xs:text-3xl'}>
              Built to support innovation
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={'flex flex-col sm:w-full sm:max-w-7xl sm:mx-auto px-8'}>
        <Box className={'flex flex-col gap-8 mb-6'}>
          <Typography variant={'h2'} className={'text-3xl xs:text-4xl'}>
            Data catalog of open data
          </Typography>
          <Typography className={'text-xl xs:text-2xl'}>
            We currently have 5 APIs available.
          </Typography>
        </Box>
        <Box
          className={
            'flex flex-col my-28 gap-14 sm:mb-48 2xl:items-end sm:mx-0 w-fit'
          }
        >
          <Box className={'flex flex-row flex-1 flex-wrap gap-14'}>
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
                'This section provides access to real-time flood forecasts.'
              }
              CardIcon={FloodIcon}
              href={'/data-catalog/flood'}
            />
            <ApiCard
              header={'Geocoding'}
              subHeader={
                'This section provides geocoding and address lookup services.'
              }
              CardIcon={GeocodingIcon}
              href={'/data-catalog/geocoding'}
            />
          </Box>
          <Link href={'/data-catalog'} className={'lg:w-fit w-full'}>
            <Button
              variant={'outlined'}
              className={
                'text-primary-main sm:w-fit rounded-full border-neutralVariant-50 normal-case lg:text-sm text-lg w-full h-10'
              }
            >
              View all
            </Button>
          </Link>
        </Box>
        <Box className={'flex flex-col lg:mx-0 mx-2'}>
          <Box className={'flex flex-col gap-8 mb-16'}>
            <Typography variant={'h2'} className={'text-3xl xs:text-4xl'}>
              Client libraries
            </Typography>
            <Typography className={'text-xl xs:text-2xl'}>
              We provide two client libraries to make use of our data easier
            </Typography>
          </Box>
          <Box className={'flex lg:flex-row flex-col gap-6 w-full'}>
            <InfoCard
              externalLink={true}
              header={'Javascript'}
              subHeader={'A javascript client for accessing data from OpenEPI.'}
              CardIcon={JavascriptLogo}
              href={'https://www.npmjs.com/package/openepi-client'}
            />
            <InfoCard
              externalLink={true}
              header={'Python'}
              subHeader={'A python client for accessing data from OpenEPI.'}
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
