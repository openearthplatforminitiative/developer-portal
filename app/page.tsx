import Box from '@mui/material/Box';
import { CircleSpinner } from '@/app/components/CircleSpinner';
import Typography from '@mui/material/Typography';
import ApiCard from '@/app/components/ApiCard';
import { WeatherIcon } from '@/app/icons/WeatherIcon';
import { GeocodingIcon } from '@/app/icons/GeocodingIcon';
import { FloodIcon } from '@/app/icons/FloodIcon';

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
            'flex flex-col bg-neutral-95 w-1/2 items-center justify-center'
          }
        >
          Right side
        </Box>
      </Box>
      <Box className={'w-full h-full max-w-7xl'}>
        <Box>
          <Box className={'flex flex-col gap-8 mb-6'}>
            <Typography className={'text-5xl'}>
              Data catalog of open data
            </Typography>
            <Typography className={'text-2xl'}>
              We currently have 4 APIs available.
            </Typography>
          </Box>
          <Box className={'flex flex-row'}>
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
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
