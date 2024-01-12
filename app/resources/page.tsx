'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Card, CardActions, CardContent } from '@mui/material';
import { ExternalLinkIcon } from '@/app/icons/ExternalLinkIcon';
import { InternalLinkIcon } from '@/app/icons/InternalLinkIcon';

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
                <CardActions>
                  <a target={'_blank'} href={'https://mui.com'}>
                    <InternalLinkIcon />
                  </a>
                </CardActions>
              </CardContent>
            </Card>
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
                <CardActions>
                  <a target={'_blank'} href={'https://mui.com'}>
                    <InternalLinkIcon />
                  </a>
                </CardActions>
              </CardContent>
            </Card>
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
                <CardActions>
                  <a target={'_blank'} href={'https://mui.com'}>
                    <ExternalLinkIcon />
                  </a>
                </CardActions>
              </CardContent>
            </Card>
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
          </Box>
        </Box>
        <Box className={'flex flex-col gap-8'}>
          <Typography className={'text-4xl'}>Design</Typography>
          <Box className={'grid auto-cols-max gap-6'}>
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
                <CardActions>
                  <a target={'_blank'} href={'https://fonts.google.com/'}>
                    <ExternalLinkIcon />
                  </a>
                </CardActions>
              </CardContent>
            </Card>
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
                <CardActions>
                  <a target={'_blank'} href={'https://m3.material.io/'}>
                    <ExternalLinkIcon />
                  </a>
                </CardActions>
              </CardContent>
            </Card>
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
                <CardActions>
                  <a
                    target={'_blank'}
                    href={
                      'https://fonts.google.com/icons?selected=Material+Symbols+Outlined:arrow_back:FILL@0;wght@400;GRAD@0;opsz@24'
                    }
                  >
                    <ExternalLinkIcon />
                  </a>
                </CardActions>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
