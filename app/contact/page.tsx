import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { GithubIconWhite } from '@/app/icons/GithubIconWhite';
import { DiscordIcon } from '@/app/icons/DiscordIcon';
import Link from 'next/link';

const Home = () => {
  return (
    <Box className={'w-full h-full lg:max-w-7xl p-6 lg:my-44 my-20'}>
      <Typography
        variant={'h1'}
        className={
          'leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl mb-20'
        }
      >
        Need help or want to get involved
      </Typography>
      <Box className={'flex sm:flex-row flex-col gap-28'}>
        <Box className={'flex flex-col sm:w-1/2'}>
          <Typography variant={'h2'} className={'text-2xl xs:text-3xl '}>
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
            className={'w-fit'}
          >
            <Button
              variant={'contained'}
              className={
                'bg-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none text-xl px-8 py-4'
              }
              startIcon={<GithubIconWhite />}
            >
              To the Github project
            </Button>
          </Link>
        </Box>
        <Box className={'flex flex-col gap-30 sm:w-1/2'}>
          <Typography variant={'h2'} className={'text-2xl xs:text-3xl'}>
            Join the community and join the discussion
          </Typography>
          <Typography className={'mt-8 mb-10 text-base'}>
            See what’s going on, get help or start a conversation on our open
            Discord server.
          </Typography>
          <Link
            href={'https://discord.gg/R4ASSWRe7c'}
            target={'_blank'}
            className={'w-fit'}
          >
            <Button
              variant={'contained'}
              className={
                'bg-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none text-xl px-8 py-4'
              }
              startIcon={<DiscordIcon />}
            >
              Join on Discord
            </Button>
          </Link>
        </Box>
      </Box>
      <Divider className={'my-16'} />
      <Box className={'flex sm:flex-row flex-col gap-28'}>
        <Box className={'sm:w-1/2'}>
          <Typography variant={'h2'} className={'text-xl xs:text-2xl mb-8'}>
            Send us a line
          </Typography>
          <Typography className={'text-lg'}>
            You may also contact us directly through email:
          </Typography>
          <a
            href='mailto:contact@openepi.io'
            className={
              'flex sm:text-base text-xl text-primary-main underline hover:no-underline mt-4'
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
