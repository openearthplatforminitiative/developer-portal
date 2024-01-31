import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { BackIcon } from '@/app/icons/BackIcon';
import InfoCard from '@/app/components/InfoCard';
import { GithubIconBlack } from '@/app/icons/GithubIconBlack';
import { OpenApiIcon } from '@/app/icons/OpenApiIcon';
import CodeBlock from '@/app/components/CodeBlock';
import { getCodeExample } from '@/app/utils';

const Home = () => {
  return (
    <Box className={'lg:max-w-7xl p-6 lg:my-44 my-20'}>
      <Link
        href='/data-catalog'
        className={
          'flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1'
        }
      >
        <BackIcon />
        <Typography className={'text-xl'}> Back to data catalog </Typography>
      </Link>

      <Box className={'flex flex-col gap-8 mt-14'}>
        <Typography
          variant={'h1'}
          className={'leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl'}
        >
          Weather API
        </Typography>
        <Typography className={'text-xl xs:text-2xl'}>
          Global weather forecasts and information about sunrise and sunset
        </Typography>
      </Box>
      <Box className={'flex lg:flex-row flex-col gap-6 mt-20'}>
        <InfoCard
          externalLink={true}
          header={'OpenAPI Spec'}
          subHeader={
            'Specification of all endpoints available in the weather api.'
          }
          CardIcon={OpenApiIcon}
          href={'https://api-test.openepi.io/weather/redoc'}
        />
        <InfoCard
          externalLink={true}
          header={'Github'}
          subHeader={'Explore the source code behind the weather api.'}
          CardIcon={GithubIconBlack}
          href={'https://github.com/openearthplatforminitiative/weather-api'}
        />
      </Box>
      <Box className={'flex flex-col mt-28'}>
        <Typography className={'text-3xl xs:text-4xl'}>More info</Typography>
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Data sources
        </Typography>
        <Typography className={'text-base mt-6'}>
          The data for this Weather API is exclusively retrieved from{' '}
          <a
            href='https://api.met.no'
            className={'underline hover:no-underline'}
          >
            https://api.met.no
          </a>
          , renowned for its comprehensive and accurate meteorological data.
          This source provides users with dependable weather forecasts and
          precise information on sunrise and sunset times. Unless specified
          otherwise, all data and products are licensed under the{' '}
          <a
            href='https://data.norge.no/nlod/en/2.0/'
            className={'underline hover:no-underline'}
          >
            Norwegian Licence for Open Government Data (NLOD) 2.0
          </a>{' '}
          and{' '}
          <a
            href='http://creativecommons.org/licenses/by/4.0'
            className={'underline hover:no-underline'}
          >
            Creative Commons 4.0 BY International licences.
          </a>
        </Typography>
        <Typography className={'text-2xl xs:text-3xl mt-14'}>
          Processing
        </Typography>
        <Typography className={'text-base mt-6'}>
          The data obtained from the Norwegian Meteorological Institute is
          presented as is, without any further processing or modification.
        </Typography>
        <Typography className={'text-3xl xs:text-4xl mt-16'}>
          Examples
        </Typography>
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Example 1
        </Typography>
        <Typography className={'text-base mt-6'}>
          Retrieving weather forecast for a given location for the next 9 days
          using javascript.
        </Typography>
        <CodeBlock
          language={'javascript'}
          codeString={getCodeExample('weather.js')}
        />
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Example 2
        </Typography>
        <Typography className={'text-base mt-6'}>
          Retrieving weather forecast for a given location for the next 9 days
          using python.
        </Typography>
        <CodeBlock
          language={'python'}
          codeString={getCodeExample('weather.py')}
        />
      </Box>
    </Box>
  );
};

export default Home;
