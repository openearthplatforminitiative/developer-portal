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
              <Card className={'bg-[#F2F4EF] hover:bg-secondary-90'}>
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
                  <InternalLinkIcon />
                </CardContent>
              </Card>
            </Link>
            <a target={'_blank'} href={'https://mui.com'}>
              <Card className={'bg-[#F2F4EF] hover:bg-secondary-90'}>
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
                  <InternalLinkIcon />
                </CardContent>
              </Card>
            </a>
            <a target={'_blank'} href={'https://mui.com'}>
              <Card className={'bg-[#F2F4EF] hover:bg-secondary-90'}>
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
                  <ExternalLinkIcon />
                </CardContent>
              </Card>
            </a>
          </Box>
        </Box>

        <Box className={'flex flex-col gap-8'}>
          <Typography className={'text-4xl'}>Frontend</Typography>
          <Box className={'grid grid-cols-3 gap-6'}>
            <Card className={'w-fit bg-[#F2F4EF] hover:bg-secondary-90'}>
              <img src={'/mui.png'} alt={'mui logo'} />
              <CardContent
                className={'flex flex-row items-center justify-between'}
              >
                <Box className={'flex flex-col'}>
                  <Typography variant='h5' component='div'>
                    Material UI
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
                <CardActions>
                  <a target={'_blank'} href={'https://mui.com'}>
                    <ExternalLinkIcon />
                  </a>
                </CardActions>
              </CardContent>
            </Card>
            <a
              className={'w-fit'}
              target={'_blank'}
              href={'https://nextjs.org//'}
            >
              <Card className={'w-fit bg-[#F2F4EF] hover:bg-secondary-90'}>
                <img
                  src={'/next.png'}
                  alt={'next logo'}
                  className={'w-[80%] h-[80%]'}
                />
                <CardContent
                  className={'flex flex-row items-center justify-between'}
                >
                  <Box className={'flex flex-col'}>
                    <Typography variant='h5' component='div'>
                      Next JS
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Sub text
                    </Typography>
                  </Box>
                  <ExternalLinkIcon />
                </CardContent>
              </Card>
            </a>
          </Box>
        </Box>
        <Box className={'flex flex-col gap-8'}>
          <Typography className={'text-4xl'}>Design</Typography>
          <Box className={'grid grid-cols-4 gap-6'}>
            <a
              className={'w-fit'}
              target={'_blank'}
              href={'https://fonts.google.com/'}
            >
              <Card className={'w-fit bg-[#F2F4EF] hover:bg-secondary-90'}>
                <img src={'/google-fonts.png'} alt={'mui logo'} />
                <CardContent
                  className={'flex flex-row items-center justify-between'}
                >
                  <Box className={'flex flex-col'}>
                    <Typography variant='h5' component='div'>
                      Google fonts
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Sub text
                    </Typography>
                  </Box>
                  <ExternalLinkIcon />
                </CardContent>
              </Card>
            </a>
            <a
              className={'w-fit'}
              target={'_blank'}
              href={'https://m3.material.io/'}
            >
              <Card className={'w-fit bg-[#F2F4EF] hover:bg-secondary-90'}>
                <img src={'/material-design.png'} alt={'mui logo'} />
                <CardContent
                  className={'flex flex-row items-center justify-between'}
                >
                  <Box className={'flex flex-col'}>
                    <Typography variant='h5' component='div'>
                      Material Design
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Sub text
                    </Typography>
                  </Box>
                  <ExternalLinkIcon />
                </CardContent>
              </Card>
            </a>
            <a
              className={'w-fit'}
              target={'_blank'}
              href={
                'https://fonts.google.com/icons?selected=Material+Symbols+Outlined:arrow_back:FILL@0;wght@400;GRAD@0;opsz@24'
              }
            >
              <Card className={'w-fit bg-[#F2F4EF] hover:bg-secondary-90'}>
                <img src={'/material-symbols.png'} alt={'mui logo'} />
                <CardContent
                  className={'flex flex-row items-center justify-between'}
                >
                  <Box className={'flex flex-col'}>
                    <Typography variant='h5' component='div'>
                      Material Symbols
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                      Sub text
                    </Typography>
                  </Box>

                  <ExternalLinkIcon />
                </CardContent>
              </Card>
            </a>
            <Card className={'w-fit bg-[#F2F4EF] hover:bg-secondary-90'}>
              <img src={'/font-awesome.png'} alt={'placeholder'} />
              <CardContent
                className={'flex flex-row items-center justify-between'}
              >
                <Box className={'flex flex-col'}>
                  <Typography variant='h5' component='div'>
                    Font awesome
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Sub text
                  </Typography>
                </Box>
                <ExternalLinkIcon />
              </CardContent>
            </Card>
            <Card className={'w-fit bg-[#F2F4EF] hover:bg-secondary-90'}>
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
            <Card className={'w-fit bg-[#F2F4EF] hover:bg-secondary-90'}>
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
            <Card className={'w-fit bg-[#F2F4EF] hover:bg-secondary-90'}>
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
            <Card className={'w-fit bg-[#F2F4EF] hover:bg-secondary-90'}>
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
      </Box>
    </main>
  );
};

export default Home;
