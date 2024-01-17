import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { GithubIconWhite } from '@/app/icons/GithubIconWhite';
import { DiscordIcon } from '@/app/icons/DiscordIcon';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from 'next/link';

const Home = () => {
  return (
    <Box className={'max-w-7xl'}>
      <Typography className={'text-5xl mb-20'}>
        Need help or want to get involved
      </Typography>
      <Box className={'flex flex-row gap-28'}>
        <Box className={'flex flex-col w-1/2'}>
          <Typography className={'text-3xl'}>
            Submit bugs, feature requests and more
          </Typography>
          <Typography className={'mt-8 mb-10 text-base'}>
            Here you will find a overview of all our repositories. If your issue
            doesn&apos;t apply to any of the repositories we recommend you use
            our Discord or submit a general enquiry.
          </Typography>
          <Link
            href={'https://github.com/openearthplatforminitiative'}
            target={'_blank'}
          >
            <Button
              variant={'contained'}
              className={
                'bg-primary-main rounded-full w-fit pr-6 pl-4 py-2.5 normal-case text-sm'
              }
              startIcon={<GithubIconWhite />}
            >
              To the Github project
            </Button>
          </Link>
        </Box>
        <Box className={'flex flex-col gap-30 w-1/2'}>
          <Typography className={'text-3xl'}>
            Join the community and join the discussion
          </Typography>
          <Typography className={'mt-8 mb-10 text-base'}>
            See what’s going on, get help or start a conversation on our open
            Discord server.
          </Typography>
          <Link href={'https://discord.gg/HatbmfCY'} target={'_blank'}>
            <Button
              variant={'contained'}
              className={
                'bg-primary-main rounded-full w-fit pr-6 pl-4 py-2.5 normal-case text-sm'
              }
              startIcon={<DiscordIcon />}
            >
              Join on Discord
            </Button>
          </Link>
        </Box>
      </Box>
      <Divider className={'my-16'} />
      <Box className={'flex flex-row gap-28'}>
        <Box className={'w-1/2'}>
          <Typography className={'text-2xl mb-10'}>
            General enquiry about the project
          </Typography>
          <Box className={'flex flex-col w-full gap-3.5'}>
            <TextField
              className={'w-full'}
              variant={'filled'}
              placeholder={'Name'}
            />
            <TextField
              className={'w-full '}
              variant={'filled'}
              placeholder={'Email'}
            />
            <TextField
              className={'w-full h-36'}
              variant={'filled'}
              rows={5}
              placeholder={'Message'}
              multiline={true}
            />
          </Box>
          <Box className={'flex flex-col'}>
            <Box className={'flex flex-row items-center '}>
              <Checkbox />
              <Typography className={'text-base'}>I agree to&nbsp;</Typography>
              <Typography className={'text-base text-primary-main underline'}>
                these terms
              </Typography>
            </Box>
            <Button
              variant={'contained'}
              className={
                'bg-primary-main rounded-full w-fit mt-8 px-6 py-2.5 normal-case text-sm'
              }
            >
              Send message
            </Button>
          </Box>
        </Box>
        <Box className={'w-1/2'}>
          <Typography className={'text-2xl mb-8'}>Send us a line</Typography>
          <Typography className={'text-base'}>
            You may also contact us directly through email:
          </Typography>
          <a
            href='mailto:contact@openepi.io'
            className={
              'flex text-base text-primary-main underline hover:no-underline mt-4'
            }
          >
            contact@openepi.io
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
