import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';
import { InternalLinkIcon } from '@/app/icons/InternalLinkIcon';
import { PythonLogo } from '@/app/icons/PythonLogo';
import { JavascriptLogo } from '@/app/icons/JavascriptLogo';
import { FloodIcon } from '@/app/icons/FloodIcon';
import { WeatherIcon } from '@/app/icons/WeatherIcon';
import { GeocodingIcon } from '@/app/icons/GeocodingIcon';
import { DeforestationIcon } from '@/app/icons/DeforestationIcon';
import { SoilIcon } from '@/app/icons/SoilIcon';
import { OceanIcon } from '@/app/icons/OceanIcon';
import { BiodiversityIcon } from '@/app/icons/BiodiversityIcon';
import { AirQualityIcon } from '@/app/icons/AirQualityIcon';
import { CropHealthIcon } from '@/app/icons/CropHealthIcon';

const Home = () => {
  return (
    <main className={'ml-[300px] mr-[387px] mt-44 mb-24'}>
      <Box className={'flex flex-col gap-8 mb-20'}>
        <Typography className={'text-5xl'}>
          Data catalog of open data
        </Typography>
        <Typography className={'text-2xl'}>Sub header</Typography>
      </Box>
      <Box className={'grid grid-cols-4 gap-14'}>
        <Link href={'/data-catalog/weather'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <WeatherIcon />
            <CardContent className={'pt-8 pb-10'}>
              <Box className={'flex flex-row justify-between'}>
                <Typography className={'text-2xl'}>Weather</Typography>
                <InternalLinkIcon />
              </Box>
              <Typography className={'text-base'}>
                This section provides access to real-time weather data.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/flood'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <FloodIcon />
            <CardContent className={'pt-8 pb-10'}>
              <Box className={'flex flex-row justify-between'}>
                <Typography className={'text-2xl'}>Flood</Typography>
                <InternalLinkIcon />
              </Box>
              <Typography className={'text-base'}>
                This section offers geocoding and address lookup services.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/geocoding'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <GeocodingIcon />
            <CardContent className={'pt-8 pb-10'}>
              <Box className={'flex flex-row justify-between'}>
                <Typography className={'text-2xl'}>Geocoding</Typography>
                <InternalLinkIcon />
              </Box>{' '}
              <Typography className={'text-base'}>
                This section offers geocoding and address lookup services.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/deforestation'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <DeforestationIcon />
            <CardContent className={'pt-8 pb-10'}>
              <Box className={'flex flex-row justify-between'}>
                <Typography className={'text-2xl'}>Deforestation</Typography>
                <InternalLinkIcon />
              </Box>{' '}
              <Typography className={'text-base'}>
                This section provides data on deforestation and environmental
                conservation efforts.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/soil'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <SoilIcon />
            <CardContent className={'pt-8 pb-10'}>
              <Box className={'flex flex-row justify-between'}>
                <Typography className={'text-2xl'}>Soil</Typography>
                <InternalLinkIcon />
              </Box>{' '}
              <Typography className={'text-base'}>
                Some descriptive text.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/ocean'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <OceanIcon />
            <CardContent className={'pt-8 pb-10'}>
              <Box className={'flex flex-row justify-between'}>
                <Typography className={'text-2xl'}>Ocean</Typography>
                <InternalLinkIcon />
              </Box>{' '}
              <Typography className={'text-base'}>
                Some descriptive text.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/biodiversity'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <BiodiversityIcon />
            <CardContent className={'pt-8 pb-10'}>
              <Box className={'flex flex-row justify-between'}>
                <Typography className={'text-2xl'}>Biodiversity</Typography>
                <InternalLinkIcon />
              </Box>{' '}
              <Typography className={'text-base'}>
                Some descriptive text.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/air-quality'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <AirQualityIcon />
            <CardContent className={'pt-8 pb-10'}>
              <Box className={'flex flex-row justify-between'}>
                <Typography className={'text-2xl'}>Air Quality</Typography>
                <InternalLinkIcon />
              </Box>{' '}
              <Typography className={'text-base'}>
                Some descriptive text.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/crop-health'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <CropHealthIcon />
            <CardContent className={'pt-8 pb-10'}>
              <Box className={'flex flex-row justify-between'}>
                <Typography className={'text-2xl'}>Crop Health</Typography>
                <InternalLinkIcon />
              </Box>{' '}
              <Typography className={'text-base'}>
                Some descriptive text.
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Box>
      <Box className={'flex flex-col gap-8 mt-28 w-full'}>
        <Typography className={'text-4xl'}>Client libraries</Typography>
        <Typography className={'text-2xl'}>
          We provide two client libraries to make use of our data easier.
        </Typography>
        <Box className={'flex flex-row gap-6 mt-16 w-full'}>
          <Link
            href={'/'}
            className={
              'flex flex-col gap-6 border rounded-xl px-6 pt-8 pb-10 w-full hover:bg-[#6750a414]'
            }
          >
            <Box className={'flex flex-row justify-between'}>
              <Box className={'flex flex-row gap-2'}>
                <JavascriptLogo />
                <Typography className={'text-2xl'}>Javascript</Typography>
              </Box>
              <InternalLinkIcon />
            </Box>
            <Typography className={'text-base'}>
              Some text about the JavaScript client library.
            </Typography>
          </Link>
          <Link
            href={'/'}
            className={
              'flex flex-col gap-6 border rounded-xl px-6 pt-8 pb-10 w-full hover:bg-[#6750a414]'
            }
          >
            <Box className={'flex flex-row justify-between'}>
              <Box className={'flex flex-row gap-2'}>
                <PythonLogo />
                <Typography className={'text-2xl'}>Python</Typography>
              </Box>
              <InternalLinkIcon />
            </Box>{' '}
            <Typography className={'text-base'}>
              Some text about the Python client library.
            </Typography>
          </Link>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
