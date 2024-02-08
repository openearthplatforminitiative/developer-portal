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
        <Typography className={'text-xl'}> Back to data catalog</Typography>
      </Link>

      <Box className={'flex flex-col gap-8 mt-14'}>
        <Typography
          variant={'h1'}
          className={'leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl'}
        >
          Flood API
        </Typography>
        <Typography className={'text-xl xs:text-2xl'}>
          Flood forecasting based on the{' '}
          <a
            href={'https://www.globalfloods.eu/'}
            className={'underline hover:no-underline'}
          >
            Global Flood Awareness System (GloFAS)
          </a>
        </Typography>
      </Box>
      <Box className={'flex lg:flex-row flex-col gap-6 mt-20'}>
        <InfoCard
          externalLink={true}
          header={'OpenAPI Spec'}
          subHeader={
            'Specification of all endpoints available in the flood api.'
          }
          CardIcon={OpenApiIcon}
          href={'https://api-test.openepi.io/flood/redoc'}
        />
        <InfoCard
          externalLink={true}
          header={'Github'}
          subHeader={'Explore the source code behind the flood api.'}
          CardIcon={GithubIconBlack}
          href={'https://github.com/openearthplatforminitiative/flood-api'}
        />
      </Box>
      <Box className={'flex flex-col mt-28'}>
        <Typography className={'text-3xl xs:text-4xl'}>More info</Typography>
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Data sources
        </Typography>
        <Typography className={'text-base mt-6'}>
          Part of the data for this Flood API consists of the 30-day forecasted
          river discharge data retrieved on a daily basis from the Copernicus{' '}
          <a
            href={
              'https://cds.climate.copernicus.eu/cdsapp#!/dataset/cems-glofas-forecast?tab=overview'
            }
            className={'underline hover:no-underline'}
          >
            Climate Data Store (CDS)
          </a>
          . Upstream area data was retrieved from the{' '}
          <a
            href={
              'https://confluence.ecmwf.int/display/CEMS/Auxiliary+Data#AuxiliaryData-GloFASAuxiliaryData'
            }
            className={'underline hover:no-underline'}
          >
            auxilairy data page
          </a>{' '}
          of the Copernicus Emergency Management Service (CEMS). Additionally,
          return period threshold data was obtained directly from the GloFAS
          team, but this will soon be made available through the CDS as well.
          All the data is on a global scale with resolution 5° by 5°. Please
          note that these datasets are licensed under the{' '}
          <a
            href={'https://www.globalfloods.eu/terms-of-service/'}
            className={'underline hover:no-underline'}
          >
            CEMS-FLOODS datasets licence
          </a>
          , which is not a standard open license. We use them in our pre-project
          to explore relevant data.
        </Typography>
        <Typography className={'text-2xl xs:text-3xl mt-14'}>
          Processing
        </Typography>
        <Typography className={'text-base mt-6'}>
          The forecasted river discharge data is processed in order to obtain
          the summary and detailed forecasts. The summary forecast corresponds
          to the GloFAS{' '}
          <a
            href={
              'https://confluence.ecmwf.int/display/CEMS/GloFAS+Reporting+Points'
            }
            className={'underline hover:no-underline'}
          >
            Reporting Point
          </a>{' '}
          structure, which defines a flood&apos;s intensity, tendency, and peak
          timing over the 30-day forecast horizon for each grid cell. In GloFAS,
          each reporting point is associated with a discharge hydrograph, which
          makes up the detailed forecast provided by the API. The detailed
          forecast provides, for each day of the forecast horizon, values such
          as the five-number summary of the discharge distribution, as well as
          the probabilities of exceeding the 2-, 5-, and 20-year return period
          thresholds.
        </Typography>
        <Typography className={'text-base mt-6'}>
          In our processing pipeline, we first determine the detailed forecast
          by computing simple statistics at each day of the forecasted discharge
          data, making use of the GloFAS return period threshold data. Then, we
          compute the summary forecast by aggregating the detailed forecast data
          over the forecast horizon. Similarly to GloFAS, the upstream area data
          is used to filter out grid cells that have an upstream area smaller
          than 250 km<sup>2</sup>. Currently, the region of interest is limited
          to the following bounding box covering parts of Western, Central, and
          Eastern Africa: -18.0° to 52.0° longitude and -6.0° to 17.0° latitude.
        </Typography>
        <Typography className={'text-3xl xs:text-4xl mt-16'}>
          Examples
        </Typography>
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Example 1
        </Typography>
        <Typography className={'text-base mt-6'}>
          Retrieving the peak day of the summary forecast for the 5° by 5° grid
          cell that the given coordinates fall into using JavaScript.
        </Typography>
        <CodeBlock
          language={'javascript'}
          codeString={getCodeExample('flood-summary.js')}
        />
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Example 2
        </Typography>
        <Typography className={'text-base mt-6'}>
          Retrieving the minimum forecasted discharge of the first day of the
          detailed forecast for the 5° by 5° grid cell that the given
          coordinates fall into using Python.
        </Typography>
        <CodeBlock
          language={'python'}
          codeString={getCodeExample('flood-detailed.py')}
        />
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Example 3
        </Typography>
        <Typography className={'text-base mt-6'}>
          Retrieving the 2-year return period threshold for the 5° by 5° grid
          cell that the given coordinates fall into using JavaScript.
        </Typography>
        <CodeBlock
          language={'javascript'}
          codeString={getCodeExample('flood-threshold.js')}
        />
      </Box>
    </Box>
  );
};

export default Home;
