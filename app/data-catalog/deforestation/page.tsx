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
          Deforestation API
        </Typography>
        <Typography variant={'h2'} className={'text-xl xs:text-2xl'}>
          Aggregated deforestation data on a global scale
        </Typography>
      </Box>
      <Box className={'flex lg:flex-row flex-col gap-6 mt-20'}>
        <InfoCard
          externalLink={true}
          header={'OpenAPI Spec'}
          subHeader={
            'Specification of all endpoints available in the deforestation api.'
          }
          CardIcon={OpenApiIcon}
          href={'https://api-test.openepi.io/deforestation/redoc'}
        />
        <InfoCard
          externalLink={true}
          header={'Github'}
          subHeader={'Explore the source code behind the deforestation api.'}
          CardIcon={GithubIconBlack}
          href={
            'https://github.com/openearthplatforminitiative/deforestation-api'
          }
        />
      </Box>
      <Box className={'flex flex-col mt-28'}>
        <Typography className={'text-3xl xs:text-4xl'}>More info</Typography>
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Data sources
        </Typography>
        <Typography className={'text-base mt-6'}>
          The deforestation data covers the period from 2001 to 2022 and is
          provided by the{' '}
          <a
            href={'https://glad.umd.edu/'}
            className={'underline hover:no-underline'}
          >
            Global Land Analysis and Discovery (GLAD)
          </a>{' '}
          laboratory at the University of Maryland, in partnership with{' '}
          <a
            href={'https://www.globalforestwatch.org/'}
            className={'underline hover:no-underline'}
          >
            Global Forest Watch (GFW)
          </a>
          . The data are freely available for use under a{' '}
          <a
            href={'https://creativecommons.org/licenses/by/4.0/'}
            className={'underline hover:no-underline'}
          >
            Creative Commons Attribution 4.0 International License
          </a>
          . River basin polygons data is provided by{' '}
          <a
            href={'https://www.hydrosheds.org/products/hydrobasins'}
            className={'underline hover:no-underline'}
          >
            HydroSHEDS
          </a>
          . The basin data are feely available for both non-commercial and
          commercial use under a licence agreement included in the{' '}
          <a
            href={
              'https://data.hydrosheds.org/file/technical-documentation/HydroSHEDS_TechDoc_v1_4.pdf'
            }
            className={'underline hover:no-underline'}
          >
            HydroSHEDS Technical Documentation
          </a>
          .
        </Typography>
        <Typography className={'text-2xl xs:text-3xl mt-14'}>
          Processing
        </Typography>
        <Typography className={'text-base mt-6'}>
          Using the river basin polygons, the deforestation data are aggregated
          per basin and year.
        </Typography>
        <Typography className={'text-3xl xs:text-4xl mt-16'}>
          Examples
        </Typography>
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Example 1
        </Typography>
        <Typography className={'text-base mt-6'}>
          Get the total forest cover loss within the queried river basin over
          the given time period using JavaScript.
        </Typography>
        <CodeBlock
          language={'javascript'}
          codeString={getCodeExample('deforestation.js')}
        />
      </Box>
    </Box>
  );
};

export default Home;
