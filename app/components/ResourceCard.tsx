import { Card } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ExternalLinkIcon } from '@/app/icons/ExternalLinkIcon';
import Link from 'next/link';

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
    <Link target={'_blank'} href={href} className={'w-fit'}>
      <Card
        className={'group rounded-xl w-fit bg-[#F2F4EF] hover:bg-secondary-90'}
      >
        <img src={imageUrl} alt={alt} />
        <Box className={'flex flex-col p-6'}>
          <Box className={'flex flex-row justify-between items-center'}>
            <Typography variant='h5' component='div'>
              {header}
            </Typography>
            <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
              <ExternalLinkIcon />
            </Box>
          </Box>
          <Typography variant='body2' color='text.secondary'>
            {subHeader}
          </Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default ResourceCard;
