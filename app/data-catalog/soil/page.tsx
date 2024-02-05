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
          Soil API
        </Typography>
        <Typography className={'text-xl xs:text-2xl'}>
          Global soil information based on{' '}
          <a
            href={'https://www.isric.org/explore/soilgrids'}
            className={'underline hover:no-underline'}
          >
            SoilGrids
          </a>
          -data
        </Typography>
      </Box>
      <Box className={'flex lg:flex-row flex-col gap-6 mt-20'}>
        <InfoCard
          externalLink={true}
          header={'OpenAPI Spec'}
          subHeader={
            'Specification of all endpoints available in the soil api.'
          }
          CardIcon={OpenApiIcon}
          href={'https://api-test.openepi.io/soil/redoc'}
        />
        <InfoCard
          externalLink={true}
          header={'Github'}
          subHeader={'Explore the source code behind the soil api.'}
          CardIcon={GithubIconBlack}
          href={'https://github.com/openearthplatforminitiative/soil-api'}
        />
      </Box>
      <Box className={'flex flex-col mt-28'}>
        <Typography className={'text-3xl xs:text-4xl'}>More info</Typography>
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Data sources
        </Typography>
        <Typography className={'text-base mt-6'}>
          The API is exclusively fetching data from ISRIC (International Soil
          Reference and Information Centre) - World Soil Information&apos;s{' '}
          <a
            href={'https://files.isric.org/soilgrids/latest/data/'}
            className={'underline hover:no-underline'}
          >
            WebDAV functionality
          </a>
          . The service uses{' '}
          <a
            href={'https://www.isric.org/explore/soilgrids'}
            className={'underline hover:no-underline'}
          >
            SoilGrids
          </a>{' '}
          data, which is licensed under the{' '}
          <a
            href={'https://creativecommons.org/licenses/by/4.0/'}
            className={'underline hover:no-underline'}
          >
            CC BY 4.0
          </a>{' '}
          license. The data are available at 250 meter resolution.
        </Typography>
        <Typography className={'text-base mt-6'}>
          The nature of the available soil data can be separated into two
          categories: soil type and soil properties. Soil type data is
          categorical and represents the dominant soil type at the queried
          location. The 30 available soil types are: Acrisols, Albeluvisols,
          Alisols, Andosols, Arenosols, Calcisols, Cambisols, Chernozems,
          Cryosols, Durisols, Ferralsols, Fluvisols, Gleysols, Gypsisols,
          Histosols, Kastanozems, Leptosols, Lixisols, Luvisols, Nitisols,
          Phaeozems, Planosols, Plinthosols, Podzols, Regosols, Solonchaks,
          Solonetz, Stagnosols, Umbrisols, and Vertisols. More information about
          the soil types can be found{' '}
          <a
            href={
              'https://www.fao.org/soils-portal/data-hub/soil-classification/world-reference-base/en/'
            }
            className={'underline hover:no-underline'}
          >
            here
          </a>
          .
        </Typography>
        <Typography className={'text-base mt-6'}>
          Soil property data is continuous and represents the value of a
          specific soil property at the queried location and depth. The
          available soil properties are: Bulk density (bdod), Cation exchange
          capacity (cec), Coarse fragments (cfvo), Clay (clay), Nitrogen
          (nitrogen), Organic carbon density (ocd), Organic carbon stocks (ocs),
          pH water (phh2o), Sand (sand), Silt (silt), and Soil organic carbon
          (soc). For more information about the data, please visit the{' '}
          <a
            href={'https://www.isric.org/explore/soilgrids/faq-soilgrids'}
            className={'underline hover:no-underline'}
          >
            SoilGrids FAQ
          </a>
          .
        </Typography>
        <Typography className={'text-2xl xs:text-3xl mt-14'}>
          Processing
        </Typography>
        <Typography className={'text-base mt-6'}>
          The data is retrieved from the ISRIC WebDAV service through various
          raster files and processed to be served through the API. For example,
          soil types are mapped from integer values to the corresponding soil
          type names. Additionally, the units of the soil properties are added
          to the responses.
        </Typography>
        <Typography className={'text-3xl xs:text-4xl mt-16'}>
          Examples
        </Typography>
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Example 1
        </Typography>
        <Typography className={'text-base mt-6'}>
          Retrieving the soil type at the queried location using JavaScript.
        </Typography>
        <CodeBlock
          language={'javascript'}
          codeString={getCodeExample('soil-type.js')}
        />
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Example 2
        </Typography>
        <Typography className={'text-base mt-6'}>
          Retrieving the soil type at the queried location using Python.
        </Typography>
        <CodeBlock
          language={'python'}
          codeString={getCodeExample('soil-type.py')}
        />
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Example 3
        </Typography>
        <Typography className={'text-base mt-6'}>
          Retrieving the value of the soil property at the queried location and
          depth using JavaScript.
        </Typography>
        <CodeBlock
          language={'javascript'}
          codeString={getCodeExample('soil-property.js')}
        />
        <Typography className={'text-2xl xs:text-3xl mt-8'}>
          Example 4
        </Typography>
        <Typography className={'text-base mt-6'}>
          Retrieving the value of the soil property at the queried location and
          depth using Python.
        </Typography>
        <CodeBlock
          language={'python'}
          codeString={getCodeExample('soil-property.py')}
        />
      </Box>
    </Box>
  );
};

export default Home;
