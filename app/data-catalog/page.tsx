import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from 'next/link';

const Home = () => {
  return (
    <main className={'ml-[300px] mr-[387px] mt-44 mb-24'}>
      <Box className={'flex flex-col gap-8 mb-20'}>
        <Typography className={'text-5xl'}>
          Data catalog of open data
        </Typography>
        <Typography className={'text-2xl'}>Sub header</Typography>
      </Box>
      <Box className={'grid grid-cols-3 gap-14'}>
        <Link href={'/data-catalog/weather'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <CardContent className={'pt-8 pb-10'}>
              <Typography className={'text-2xl'}>Weather</Typography>
              <Typography className={'text-base'}>
                This section provides access to real-time weather data.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/flood'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <CardContent className={'pt-8 pb-10'}>
              <Typography className={'text-2xl'}>Flood</Typography>
              <Typography className={'text-base'}>
                This section offers geocoding and address lookup services.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/geocoding'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <CardContent className={'pt-8 pb-10'}>
              <Typography className={'text-2xl'}>Geocoding</Typography>
              <Typography className={'text-base'}>
                This section offers geocoding and address lookup services.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/deforestation'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <CardContent className={'pt-8 pb-10'}>
              <Typography className={'text-2xl'}>Deforestation</Typography>
              <Typography className={'text-base'}>
                This section provides data on deforestation and environmental
                conservation efforts.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/soil'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <CardContent className={'pt-8 pb-10'}>
              <Typography className={'text-2xl'}>Soil</Typography>
              <Typography className={'text-base'}>
                Some descriptive text.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/ocean'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <CardContent className={'pt-8 pb-10'}>
              <Typography className={'text-2xl'}>Ocean</Typography>
              <Typography className={'text-base'}>
                Some descriptive text.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/biodiversity'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <CardContent className={'pt-8 pb-10'}>
              <Typography className={'text-2xl'}>Biodiversity</Typography>
              <Typography className={'text-base'}>
                Some descriptive text.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/air-quality'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <CardContent className={'pt-8 pb-10'}>
              <Typography className={'text-2xl'}>Air Quality</Typography>
              <Typography className={'text-base'}>
                Some descriptive text.
              </Typography>
            </CardContent>
          </Card>
        </Link>
        <Link href={'/data-catalog/crop-health'}>
          <Card className={'gap-6 bg-[#F2F4EF] hover:bg-secondary-90'}>
            <CardContent className={'pt-8 pb-10'}>
              <Typography className={'text-2xl'}>Crop Health</Typography>
              <Typography className={'text-base'}>
                Some descriptive text.
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Box>
      <Box className={'flex flex-col gap-8 mt-28 w-full'}>
        <Typography className={'text-4xl'}>Client libraries</Typography>
        <Typography className={'text-2xl'}>
          We provide two client libraries to make use of our data easier.
        </Typography>
        <Box className={'flex flex-row gap-6 mt-16 w-full'}>
          <Box
            className={
              'flex flex-col gap-6 border rounded-xl px-6 pt-8 pb-10 w-full'
            }
          >
            <Typography className={'text-2xl'}>Javascript</Typography>
            <Typography className={'text-base'}>
              Some text about the JavaScript client library.
            </Typography>
          </Box>
          <Box
            className={
              'flex flex-col gap-6 border rounded-xl px-6 pt-8 pb-10 w-full'
            }
          >
            <Typography className={'text-2xl'}>Python</Typography>
            <Typography className={'text-base'}>
              Some text about the Python client library.
            </Typography>
          </Box>
        </Box>
      </Box>
    </main>
  );
};

export default Home;
