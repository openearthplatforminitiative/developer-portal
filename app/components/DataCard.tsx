import Box from '@mui/material/Box';
import { ComponentType } from 'react';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { InternalLinkIcon } from '@/app/icons/InternalLinkIcon';

export interface DataCardProps {
  id?: number;
  header: string;
  subHeader: string;
  CardIcon: ComponentType;
  href: string;
}

const DataCard = ({ header, subHeader, CardIcon, href }: DataCardProps) => {
  return (
    <Link href={href}>
      <Card
        className={
          'gap-6 bg-[#F2F4EF] hover:bg-secondary-90 relative overflow-visible'
        }
      >
        <Box className={'absolute -left-6 -top-6'}>
          <CardIcon />
        </Box>
        <CardContent className={'pt-8 pb-10'}>
          <Box className={'flex flex-row justify-between'}>
            <Typography className={'text-2xl'}>{header}</Typography>
            <InternalLinkIcon />
          </Box>
          <Typography className={'text-base'}>{subHeader}</Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default DataCard;
