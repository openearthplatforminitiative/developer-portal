import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ExternalLinkIcon } from '@/app/icons/ExternalLinkIcon';
import Link from 'next/link';
import Image from 'next/image';

interface ResourceCardProps {
  header: string;
  subHeader: string;
  href: string;
  imageUrl: string;
  alt: string;
}
const ResourceCard = ({
  header,
  subHeader,
  imageUrl,
  href,
  alt,
}: ResourceCardProps) => {
  return (
    <Link
      target={'_blank'}
      href={href}
      className={
        'flex flex-1 md:min-w-[350px] min-w-[250px] 2xs:max-w-[calc(100%-0.75rem)] xs:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33%-0.75rem)] h-full'
      }
    >
      <Card
        className={
          'group rounded-xl bg-[#F2F4EF] hover:bg-secondary-90 w-full h-full'
        }
      >
        <Image
          src={imageUrl}
          alt={alt}
          width={0}
          height={0}
          className={'h-full w-full'}
        />
        <Box className={'flex flex-col p-6'}>
          <Box className={'flex flex-row justify-between items-center'}>
            <Typography variant='h5' className={'text-xl xs:text-2xl'}>
              {header}
            </Typography>
            <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
              <ExternalLinkIcon />
            </Box>
          </Box>
          <Typography variant='body2'>{subHeader}</Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default ResourceCard;
