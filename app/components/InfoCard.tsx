import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { InternalLinkIcon } from '@/app/icons/InternalLinkIcon';
import Link from 'next/link';
import { CardProps } from '@/app/components/ApiCard';
import { ExternalLinkIcon } from '@/app/icons/ExternalLinkIcon';

interface InfoCardProps extends CardProps {
  externalLink: boolean;
}

const InfoCard = ({
  header,
  subHeader,
  CardIcon,
  href,
  externalLink,
}: InfoCardProps) => {
  return (
    <Link
      href={href}
      target={externalLink ? '_blank' : ''}
      className={
        'flex flex-col gap-6 border rounded-xl px-6 pt-8 pb-10 w-full hover:bg-[#6750a414] group'
      }
    >
      <Box className={' flex flex-row justify-between px-2 items-center'}>
        <Box className={'flex flex-row gap-2'}>
          <CardIcon />
          <Typography className={'text-xl xs:text-2xl'}>{header}</Typography>
        </Box>
        <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
          {externalLink ? <ExternalLinkIcon /> : <InternalLinkIcon />}
        </Box>
      </Box>
      <Typography className={'text-base'}>{subHeader}</Typography>
    </Link>
  );
};

export default InfoCard;
