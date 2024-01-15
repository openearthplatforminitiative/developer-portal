import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <main className={'ml-[300px] mr-[387px] my-44'}>
      <Box className={'flex flex-col gap-8 mb-20'}>
        <Typography className={'text-5xl'}>Flood API</Typography>
        <Typography className={'text-2xl'}>Sub header</Typography>
      </Box>
    </main>
  );
};

export default Home;
