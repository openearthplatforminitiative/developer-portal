import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
import Chip from '@mui/material/Chip';
import { CheckIcon } from '@/app/icons/CheckIcon';
import ApiCard, { CardProps } from '@/app/components/ApiCard';
import InfoCard from '@/app/components/InfoCard';

const cards: CardProps[] = [
  {
    id: 1,
    header: 'Weather',
    subHeader: 'This section provides access to real-time weather data.',
    CardIcon: WeatherIcon,
    href: '/data-catalog/weather',
  },
  {
    id: 2,
    header: 'Flood',
    subHeader: 'This section offers geocoding and address lookup services.',
    CardIcon: FloodIcon,
    href: '/data-catalog/flood',
  },
  {
    id: 3,
    header: 'Geocoding',
    subHeader: 'This section offers geocoding and address lookup services.',
    CardIcon: GeocodingIcon,
    href: '/data-catalog/geocoding',
  },
  {
    id: 4,
    header: 'Deforestation',
    subHeader:
      'This section provides data on deforestation and environmental conservation efforts.',
    CardIcon: DeforestationIcon,
    href: '/data-catalog/deforestation',
  },
];

const Home = () => {
  return (
    <Box className={'w-full h-full lg:max-w-7xl p-6 lg:mt-0 -mt-24'}>
      <Box className={'flex flex-col gap-8 mb-20'}>
        <Typography className={'text-5xl'}>
          Data catalog of open data
        </Typography>
        <Typography className={'text-2xl'}>Sub header</Typography>
      </Box>
      {/*
        <Box className={'flex flex-col gap-4'}>
          <Typography> Resource type </Typography>
          <Box className={'flex flex-row gap-2'}>
            <Chip
              variant='outlined'
              color='success'
              icon={<CheckIcon />}
              label={'Show all'}
              clickable
            />
            <Chip
              variant='outlined'
              color='success'
              icon={<CheckIcon />}
              label={'API'}
              clickable
            />
            <Chip
              variant='outlined'
              color='success'
              icon={<CheckIcon />}
              label={'Databank'}
              clickable
            />
          </Box>
        </Box>
      */}
      <Box
        className={
          'grid lg:grid-cols-3 grid-flow-row gap-14 mt-16 lg:mx-0 mx-6'
        }
      >
        {cards.map((card) => (
          <ApiCard
            key={card.id}
            header={card.header}
            subHeader={card.subHeader}
            CardIcon={card.CardIcon}
            href={card.href}
          />
        ))}
      </Box>
      <Box className={'flex flex-col gap-8 mt-28 w-full'}>
        <Typography className={'text-4xl'}>Client libraries</Typography>
        <Typography className={'text-2xl'}>
          We provide two client libraries to make use of our data easier.
        </Typography>
        <Box className={'flex lg:flex-row flex-col gap-6 mt-16 w-full'}>
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
  );
};

export default Home;
