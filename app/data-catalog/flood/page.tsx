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
        <Typography className={'text-5xl'}>Flood API</Typography>
        <Typography className={'text-2xl'}>Sub header</Typography>
      </Box>
      <Box className={'flex lg:flex-row flex-col gap-6 mt-20'}>
        <InfoCard
          externalLink={true}
          header={'OpenAPI Spec'}
          subHeader={'Some text about the OpenAPI spec.'}
          CardIcon={OpenApiIcon}
          href={'https://api-test.openepi.io/flood/redoc'}
        />
        <InfoCard
          externalLink={true}
          header={'Github'}
          subHeader={'Some text about the Github repository.'}
          CardIcon={GithubIconBlack}
          href={'https://github.com/openearthplatforminitiative/flood-api'}
        />
      </Box>
      <Box className={'flex flex-col mt-28'}>
        <Typography className={'text-4xl'}>More info</Typography>
        <Typography className={'text-3xl mt-8'}>Data sources</Typography>
        <Typography className={'text-base mt-6'}>
          There is a need for a robust and accessible digital infrastructure for
          open data and algorithms on weather, water, earth, and vegetation,
          across projects, sectors, and contexts – providing a base for the
          necessary local technology innovation. The Open Earth Platform
          (OpenEPI) is an initiative to prepare for such an infrastructure.
        </Typography>
        <Typography className={'text-3xl mt-14'}>Methods</Typography>
        <Typography className={'text-base mt-6'}>
          There is a need for a robust and accessible digital infrastructure for
          open data and algorithms on weather, water, earth, and vegetation,
          across projects, sectors, and contexts – providing a base for the
          necessary local technology innovation. The Open Earth Platform
          (OpenEPI) is an initiative to prepare for such an infrastructure.
        </Typography>
        <Typography className={'text-3xl mt-14'}>Processing</Typography>
        <Typography className={'text-base mt-6'}>
          There is a need for a robust and accessible digital infrastructure for
          open data and algorithms on weather, water, earth, and vegetation,
          across projects, sectors, and contexts – providing a base for the
          necessary local technology innovation. The Open Earth Platform
          (OpenEPI) is an initiative to prepare for such an infrastructure.
        </Typography>
        <Typography className={'text-4xl mt-16'}>Examples</Typography>
        <Typography className={'text-3xl mt-8'}>Example 1</Typography>
        <Typography className={'text-base mt-6'}>
          There is a need for a robust and accessible digital infrastructure for
          open data and algorithms on weather, water, earth, and vegetation,
          across projects, sectors, and contexts – providing a base for the
          necessary local technology innovation. The Open Earth Platform
          (OpenEPI) is an initiative to prepare for such an infrastructure.
        </Typography>
        <CodeBlock
          language={'javascript'}
          codeString={getCodeExample('flood.js')}
        />
      </Box>
    </Box>
  );
};

export default Home;
