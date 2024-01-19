'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card } from '@mui/material';
import { ExternalLinkIcon } from '@/app/icons/ExternalLinkIcon';
import { InternalLinkIcon } from '@/app/icons/InternalLinkIcon';
import Link from 'next/link';
import ResourceCard from '@/app/components/ResourceCard';

const Home = () => {
  return (
    <Box className={'w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20'}>
      <Box className={'flex flex-col gap-8 mb-20'}>
        <Typography className={'text-5xl'}>Open source resources</Typography>
        <Typography className={'text-2xl'}>
          Design and frontend resources, policies and specifications.
        </Typography>
      </Box>
      <Box className={'flex flex-col gap-32'}>
        <Box className={'flex flex-col gap-8'}>
          <Typography className={'text-4xl w-fit'}>Documents</Typography>
          <Box className={'flex flex-row flex-1 flex-wrap gap-6 w-fit'}>
            <Link
              href={'/resources/open-policy'}
              className={'h-full lg:w-fit md:w-fit w-full'}
            >
              <Card
                className={'group bg-[#F2F4EF] hover:bg-secondary-90 h-full'}
              >
                <Box className={'flex flex-col p-6'}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      Our open policy
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <InternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2'>Sub text</Typography>
                </Box>
              </Card>
            </Link>
            <Link
              href={'/resources/metadata-specification'}
              className={'h-full lg:w-fit md:w-fit w-full'}
            >
              <Card
                className={'group bg-[#F2F4EF] hover:bg-secondary-90 h-full'}
              >
                <Box className={'flex flex-col p-6 '}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      Our metadata specification
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <InternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2'>Sub text</Typography>
                </Box>
              </Card>
            </Link>
            <Link
              target={'_blank'}
              href={'https://api-test.openepi.io/'}
              className={'h-full lg:w-fit md:w-fit w-full'}
            >
              <Card
                className={'group bg-[#F2F4EF] hover:bg-secondary-90 h-full'}
              >
                <Box className={'flex flex-col p-6'}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      OpenAPI Specification
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <ExternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2'>Sub text</Typography>
                </Box>
              </Card>
            </Link>
          </Box>
        </Box>
        <Box className={'flex flex-col gap-8'}>
          <Typography className={'text-4xl w-fit'}>Frontend</Typography>
          <Box className={'flex flex-1 flex-wrap gap-6'}>
            <ResourceCard
              header={'Material UI'}
              subHeader={'Sub text'}
              href={'https://mui.com'}
              imageUrl={'/mui.png'}
              alt={'mui logo'}
            />
            <ResourceCard
              header={'Next JS'}
              subHeader={'Sub text'}
              href={'https://nextjs.org'}
              imageUrl={'/next.png'}
              alt={'next logo'}
            />
            <ResourceCard
              header={'Typescript'}
              subHeader={'Sub text'}
              href={'https://www.typescriptlang.org/'}
              imageUrl={'/ts.png'}
              alt={'typescript logo'}
            />
            <ResourceCard
              header={'Tailwind CSS'}
              subHeader={'Sub text'}
              href={'https://tailwindcss.com/'}
              imageUrl={'/tailwind.png'}
              alt={'tailwind css logo'}
            />

            <ResourceCard
              header={'Title'}
              subHeader={'Sub text'}
              href={''}
              imageUrl={'/temp.png'}
              alt={'placeholder logo'}
            />
            <ResourceCard
              header={'Title'}
              subHeader={'Sub text'}
              href={''}
              imageUrl={'/temp.png'}
              alt={'placeholder logo'}
            />
            <ResourceCard
              header={'Title'}
              subHeader={'Sub text'}
              href={''}
              imageUrl={'/temp.png'}
              alt={'placeholder logo'}
            />
            <ResourceCard
              header={'Title'}
              subHeader={'Sub text'}
              href={''}
              imageUrl={'/temp.png'}
              alt={'placeholder logo'}
            />
          </Box>
        </Box>
        <Box className={'flex flex-col gap-8'}>
          <Typography className={'text-4xl'}>Design</Typography>
          <Box className={'flex flex-1 flex-wrap gap-6'}>
            <ResourceCard
              header={'Google fonts'}
              subHeader={'Sub text'}
              href={'https://fonts.google.com/'}
              imageUrl={'/google-fonts.png'}
              alt={'google fonts logo'}
            />
            <ResourceCard
              header={'Material design'}
              subHeader={'Sub text'}
              href={'https://m3.material.io/'}
              imageUrl={'/material-design.png'}
              alt={'material design logo'}
            />
            <ResourceCard
              header={'Material symbols'}
              subHeader={'Sub text'}
              href={
                'https://fonts.google.com/icons?selected=Material+Symbols+Outlined:arrow_back:FILL@0;wght@400;GRAD@0;opsz@24'
              }
              imageUrl={'/material-symbols.png'}
              alt={'material symbols logo'}
            />
            <ResourceCard
              header={'Font awesome'}
              subHeader={'Sub text'}
              href={'https://fontawesome.com/'}
              imageUrl={'/font-awesome.png'}
              alt={'font awesome logo'}
            />
            <ResourceCard
              header={'Title'}
              subHeader={'Sub text'}
              href={''}
              imageUrl={'/temp.png'}
              alt={'placeholder logo'}
            />
            <ResourceCard
              header={'Title'}
              subHeader={'Sub text'}
              href={''}
              imageUrl={'/temp.png'}
              alt={'placeholder logo'}
            />
            <ResourceCard
              header={'Title'}
              subHeader={'Sub text'}
              href={''}
              imageUrl={'/temp.png'}
              alt={'placeholder logo'}
            />
            <ResourceCard
              header={'Title'}
              subHeader={'Sub text'}
              href={''}
              imageUrl={'/temp.png'}
              alt={'placeholder logo'}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
