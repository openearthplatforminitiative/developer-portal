import Box from '@mui/material/Box';
import { ComponentType } from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { InternalLinkIcon } from '@/app/icons/InternalLinkIcon';

export interface CardProps {
  id?: number;
  header: string;
  subHeader: string;
  CardIcon: ComponentType;
  href: string;
}

const ApiCard = ({ header, subHeader, CardIcon, href }: CardProps) => {
  return (
    <Link
      href={href}
      className={
        'flex flex-1 md:min-w-[280px] min-w-[230px] 2xs:max-w-[calc(100%-0.75rem)] sm:max-w-[calc(48%-0.75rem)] lg:max-w-[calc(31%-0.75rem)]'
      }
    >
      <Card
        className={
          'group gap-6 bg-[#F2F4EF] hover:bg-secondary-90 relative overflow-visible transition duration-300 w-full h-full'
        }
      >
        <Box className={'absolute -left-6 -top-6'}>
          <CardIcon />
        </Box>
        <Box className={'flex flex-col pt-8 pb-10 pr-6 pl-6'}>
          <Box className={'flex flex-row justify-between my-2'}>
            <Typography className={'text-2xl'}>{header}</Typography>
            <Box className='transform transition-transform duration-300 group-hover:translate-x-2'>
              <InternalLinkIcon />
            </Box>
          </Box>
          <Typography className={'text-base'}>{subHeader}</Typography>
        </Box>
      </Card>
    </Link>
  );
};

export default ApiCard;
