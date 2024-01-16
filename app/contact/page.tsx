import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <Box>
      <Typography className={'text-5xl mb-20'}>
        Need help or want to get involved
      </Typography>
      <Box className={'flex flex-row mb-16'}>
        <Box className={'flex flex-col w-1/2 mr-30'}>
          <Typography className={'text-3xl'}>
            Submit bugs, feature requests and more
          </Typography>
          <Typography className={'mt-8 mb-10 text-base'}>
            Here you will find a overview of all our repositories. If your issue
            doesn&apos;t apply to any of the repositories we recommend you use
            our Discord or submit a general enquiry.
          </Typography>
          <Button
            variant={'contained'}
            className={'bg-primary-main rounded-full w-1/2'}
          >
            To the Github Project
          </Button>
        </Box>
        <Box className={'flex flex-col gap-30 w-1/2'}>
          <Typography className={'text-3xl'}>
            Join the community and join the discussion
          </Typography>
          <Typography className={'mt-8 mb-10 text-base'}>
            See what’s going on, get help or start a conversation on our open
            Discord server.
          </Typography>
          <Button
            variant={'contained'}
            className={'bg-primary-main rounded-full w-1/2'}
          >
            Join on Discord
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
