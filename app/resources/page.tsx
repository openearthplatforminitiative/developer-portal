'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent } from '@mui/material';
import { ExternalLinkIcon } from '@/app/icons/ExternalLinkIcon';
import { InternalLinkIcon } from '@/app/icons/InternalLinkIcon';
import Link from 'next/link';

const Home = () => {
  return (
    <main className={'ml-[300px] mr-[387px] my-44'}>
      <Box className={'flex flex-col gap-8 mb-20'}>
        <Typography className={'text-5xl'}>Open source resources</Typography>
        <Typography className={'text-2xl'}>
          Design and frontend resources, policies and specifications.
        </Typography>
      </Box>
      <Box className={'flex flex-col gap-32'}>
        <Box className={'flex flex-col gap-8'}>
          <Typography className={'text-4xl'}>Documents</Typography>
          <Box className={'grid grid-cols-3 gap-6'}>
            <Link href={'/resources/open-policy'}>
              <Card className={'group bg-[#F2F4EF] hover:bg-secondary-90'}>
                <CardContent
                  className={'flex flex-row items-center justify-between'}
                >
                  <Box className={'flex flex-col'}>
                    <Typography variant='h5' component='div'>
                      Our open policy
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Sub text
                    </Typography>
                  </Box>
                  <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                    <InternalLinkIcon />
                  </Box>
                </CardContent>
              </Card>
            </Link>
            <Link href={'/resources/metadata-policy'}>
              <Card className={'group bg-[#F2F4EF] hover:bg-secondary-90'}>
                <CardContent
                  className={'flex flex-row items-center justify-between'}
                >
                  <Box className={'flex flex-col'}>
                    <Typography variant='h5' component='div'>
                      Our metadata policy
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Sub text
                    </Typography>
                  </Box>
                  <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                    <InternalLinkIcon />
                  </Box>
                </CardContent>
              </Card>
            </Link>
            <Link target={'_blank'} href={'https://api-test.openepi.io/'}>
              <Card className={'group bg-[#F2F4EF] hover:bg-secondary-90'}>
                <CardContent
                  className={'flex flex-row items-center justify-between'}
                >
                  <Box className={'flex flex-col'}>
                    <Typography variant='h5' component='div'>
                      OpenAPI specification
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Sub text
                    </Typography>
                  </Box>
                  <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                    <ExternalLinkIcon />
                  </Box>
                </CardContent>
              </Card>
            </Link>
          </Box>
        </Box>

        <Box className={'flex flex-col gap-8'}>
          <Typography className={'text-4xl'}>Frontend</Typography>
          <Box className={'grid grid-cols-4 gap-6'}>
            <Link target={'_blank'} href={'https://mui.com'}>
              <Card
                className={'group w-fit bg-[#F2F4EF] hover:bg-secondary-90'}
              >
                <img src={'/mui.png'} alt={'mui logo'} />
                <Box className={'flex flex-col p-6'}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      Material UI
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <ExternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
              </Card>
            </Link>
            <Link target={'_blank'} href={'https://nextjs.org'}>
              <Card
                className={'group w-fit bg-[#F2F4EF] hover:bg-secondary-90'}
              >
                <img src={'/next.png'} alt={'next logo'} />
                <Box className={'flex flex-col p-6'}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      Next JS
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <ExternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
              </Card>
            </Link>
            <Link target={'_blank'} href={'https://www.typescriptlang.org/'}>
              <Card
                className={'group w-fit bg-[#F2F4EF] hover:bg-secondary-90'}
              >
                <img src={'/ts.png'} alt={'typescript logo'} />
                <Box className={'flex flex-col p-6'}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      Typescript
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <ExternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
              </Card>
            </Link>
            <Link target={'_blank'} href={'https://tailwindcss.com/'}>
              <Card
                className={'group w-fit bg-[#F2F4EF] hover:bg-secondary-90'}
              >
                <img src={'/tailwind.png'} alt={'tailwind css logo'} />
                <Box className={'flex flex-col p-6'}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      Tailwind CSS
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <ExternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
              </Card>
            </Link>
            <Card className={'w-fit bg-[#F2F4EF]'}>
              <img src={'/temp.png'} alt={'placeholder'} />
              <Box className={'flex flex-col p-6'}>
                <Box className={'flex flex-row justify-between items-center'}>
                  <Typography variant='h5' component='div'>
                    Title
                  </Typography>
                  <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                    <ExternalLinkIcon />
                  </Box>
                </Box>
                <Typography variant='body2' color='text.secondary'>
                  Sub text
                </Typography>
              </Box>
            </Card>
            <Card className={'w-fit bg-[#F2F4EF]'}>
              <img src={'/temp.png'} alt={'placeholder'} />
              <Box className={'flex flex-col p-6'}>
                <Box className={'flex flex-row justify-between items-center'}>
                  <Typography variant='h5' component='div'>
                    Title
                  </Typography>
                  <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                    <ExternalLinkIcon />
                  </Box>
                </Box>
                <Typography variant='body2' color='text.secondary'>
                  Sub text
                </Typography>
              </Box>
            </Card>
            <Card className={'w-fit bg-[#F2F4EF]'}>
              <img src={'/temp.png'} alt={'placeholder'} />
              <CardContent
                className={'flex flex-row items-center justify-between'}
              >
                <Box className={'flex flex-col'}>
                  <Typography variant='h5' component='div'>
                    Title
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
                <ExternalLinkIcon />
              </CardContent>
            </Card>
            <Card className={'w-fit bg-[#F2F4EF]'}>
              <img src={'/temp.png'} alt={'placeholder'} />
              <CardContent
                className={'flex flex-row items-center justify-between'}
              >
                <Box className={'flex flex-col'}>
                  <Typography variant='h5' component='div'>
                    Title
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
                <ExternalLinkIcon />
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box className={'flex flex-col gap-8'}>
          <Typography className={'text-4xl'}>Design</Typography>
          <Box className={'grid grid-cols-4 gap-6'}>
            <Link target={'_blank'} href={'https://fonts.google.com/'}>
              <Card
                className={'group w-fit bg-[#F2F4EF] hover:bg-secondary-90'}
              >
                <img src={'/google-fonts.png'} alt={'mui logo'} />
                <Box className={'flex flex-col p-6'}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      Google fonts
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <ExternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
              </Card>
            </Link>
            <Link className={'w-fit'} href={'https://m3.material.io/'}>
              <Card
                className={'group w-fit bg-[#F2F4EF] hover:bg-secondary-90'}
              >
                <img src={'/material-design.png'} alt={'mui logo'} />
                <Box className={'flex flex-col p-6'}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      Material design
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <ExternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
              </Card>
            </Link>
            <Link
              target={'_blank'}
              href={
                'https://fonts.google.com/icons?selected=Material+Symbols+Outlined:arrow_back:FILL@0;wght@400;GRAD@0;opsz@24'
              }
            >
              <Card
                className={'group w-fit bg-[#F2F4EF] hover:bg-secondary-90'}
              >
                <img src={'/material-symbols.png'} alt={'mui logo'} />
                <Box className={'flex flex-col p-6'}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      Material symbols
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <ExternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
              </Card>
            </Link>
            <Link target={'_blank'} href={'https://fontawesome.com/'}>
              <Card
                className={'group w-fit bg-[#F2F4EF] hover:bg-secondary-90'}
              >
                <img src={'/font-awesome.png'} alt={'placeholder'} />
                <Box className={'flex flex-col p-6'}>
                  <Box className={'flex flex-row justify-between items-center'}>
                    <Typography variant='h5' component='div'>
                      Font awesome
                    </Typography>
                    <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                      <ExternalLinkIcon />
                    </Box>
                  </Box>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
              </Card>
            </Link>
            <Card className={'w-fit bg-[#F2F4EF]'}>
              <img src={'/temp.png'} alt={'placeholder'} />
              <Box className={'flex flex-col p-6'}>
                <Box className={'flex flex-row justify-between items-center'}>
                  <Typography variant='h5' component='div'>
                    Title
                  </Typography>
                  <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                    <ExternalLinkIcon />
                  </Box>
                </Box>
                <Typography variant='body2' color='text.secondary'>
                  Sub text
                </Typography>
              </Box>
            </Card>
            <Card className={'w-fit bg-[#F2F4EF]'}>
              <img src={'/temp.png'} alt={'placeholder'} />
              <Box className={'flex flex-col p-6'}>
                <Box className={'flex flex-row justify-between items-center'}>
                  <Typography variant='h5' component='div'>
                    Title
                  </Typography>
                  <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                    <ExternalLinkIcon />
                  </Box>
                </Box>
                <Typography variant='body2' color='text.secondary'>
                  Sub text
                </Typography>
              </Box>
            </Card>
            <Card className={'w-fit bg-[#F2F4EF]'}>
              <img src={'/temp.png'} alt={'placeholder'} />
              <Box className={'flex flex-col p-6'}>
                <Box className={'flex flex-row justify-between items-center'}>
                  <Typography variant='h5' component='div'>
                    Title
                  </Typography>
                  <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                    <ExternalLinkIcon />
                  </Box>
                </Box>
                <Typography variant='body2' color='text.secondary'>
                  Sub text
                </Typography>
              </Box>
            </Card>
            <Card className={'w-fit bg-[#F2F4EF]'}>
              <img src={'/temp.png'} alt={'placeholder'} />
              <Box className={'flex flex-col p-6'}>
                <Box className={'flex flex-row justify-between items-center'}>
                  <Typography variant='h5' component='div'>
                    Title
                  </Typography>
                  <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
                    <ExternalLinkIcon />
                  </Box>
                </Box>
                <Typography variant='body2' color='text.secondary'>
                  Sub text
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
