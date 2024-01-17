import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';
import { BackIcon } from '@/app/icons/BackIcon';
import InfoCard from '@/app/components/InfoCard';
import { GithubIconBlack } from '@/app/icons/GithubIconBlack';
import { OpenApiIcon } from '@/app/icons/OpenApiIcon';

const Home = () => {
  return (
    <Box className={'max-w-7xl'}>
      <Link
        href='/data-catalog'
        className={
          'flex flex-row items-center text-primary-main underline hover:no-underline -mt-20'
        }
      >
        <BackIcon />
        <Typography className={'text-base'}> Back to data catalog </Typography>
      </Link>

      <Box className={'flex flex-col gap-8 mt-14'}>
        <Typography className={'text-5xl'}>Deforestation API</Typography>
        <Typography className={'text-2xl'}>Sub header</Typography>
      </Box>
      <Box className={'flex flex-row gap-6 mt-20'}>
        <InfoCard
          externalLink={true}
          header={'OpenAPI Spec'}
          subHeader={'Some text about the OpenAPI spec.'}
          CardIcon={OpenApiIcon}
          href={'https://api-test.openepi.io/deforestation/redoc'}
        />
        <InfoCard
          externalLink={true}
          header={'Github'}
          subHeader={'Some text about the Github repository.'}
          CardIcon={GithubIconBlack}
          href={
            'https://github.com/openearthplatforminitiative/deforestation-api'
          }
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
      </Box>
    </Box>
  );
};

export default Home;
