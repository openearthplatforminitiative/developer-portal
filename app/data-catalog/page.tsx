import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PythonLogo } from '@/app/icons/PythonLogo';
import { JavascriptLogo } from '@/app/icons/JavascriptLogo';
import { FloodIcon } from '@/app/icons/FloodIcon';
import { WeatherIcon } from '@/app/icons/WeatherIcon';
import { GeocodingIcon } from '@/app/icons/GeocodingIcon';
import { DeforestationIcon } from '@/app/icons/DeforestationIcon';
import { SoilIcon } from '@/app/icons/SoilIcon';
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
    subHeader: 'This section provides access to real-time flood forecasts.',
    CardIcon: FloodIcon,
    href: '/data-catalog/flood',
  },
  {
    id: 3,
    header: 'Geocoding',
    subHeader: 'This section provides geocoding and address lookup services.',
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
  {
    id: 5,
    header: 'Soil',
    subHeader: 'This section provides precise soil data on a global scale.',
    CardIcon: SoilIcon,
    href: '/data-catalog/soil',
  },
];

const Home = () => {
  return (
    <Box className={'w-full h-full lg:max-w-7xl p-8 lg:my-44 my-20'}>
      <Box className={'flex flex-col gap-8 mb-20'}>
        <Typography
          variant={'h1'}
          className={'leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl'}
        >
          Data catalog of open data
        </Typography>
        <Typography className={'text-xl xs:text-2xl'}>
          We currently have 5 APIs available.
        </Typography>
      </Box>
      <Box className={'flex flex-wrap gap-14 mt-16'}>
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
        <Typography variant={'h2'} className={'text-3xl xs:text-4xl'}>
          Client libraries
        </Typography>
        <Typography className={'text-xl xs:text-2xl'}>
          We provide two client libraries to make use of our data easier.
        </Typography>
        <Box className={'flex lg:flex-row flex-col gap-6 mt-16 w-full'}>
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
  );
};

export default Home;
