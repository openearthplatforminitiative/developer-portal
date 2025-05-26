"use client"

import * as React from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { useParams, useRouter } from 'next/navigation';
import { fetchResourceTutorialBySlug, ResourceTutorial, sanityClient } from '@/sanity/api';
import { useEffect, useState } from 'react';
import { DialogContent, Skeleton } from '@mui/material';
import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image"
import PortableTextStyled from '@/components/PortableTextStyled';

export default function Page() {
  const [tutorial, setTutorial] = useState<ResourceTutorial>();

  const router = useRouter()
  const { tutorialSlug } = useParams() as { tutorialSlug: string }

  const builder = imageUrlBuilder(sanityClient);

  useEffect(() => {
    fetchResourceTutorialBySlug(tutorialSlug).then((tutorial) => {
      console.log(tutorial);
      setTutorial(tutorial);
    });
  }, [tutorialSlug]);

  const handleClose = () => {
    router.back()
  };

  if (!tutorial) {
    return (
      <Dialog onClose={handleClose} open={true}>
        <Skeleton variant="rectangular" width={500} height={300} />
      </Dialog>
    );
  }

  return (
    <Dialog onClose={handleClose} open={true}>
      <Image
        src={tutorial.mainImage !== null
          ? builder.image(tutorial.mainImage).toString()
          : "/article-placeholder.png"}
        alt={tutorial.title}
        width={500}
        height={300}
        className="rounded-t-xl object-cover w-full"
      />
      <DialogTitle>{tutorial.title}</DialogTitle>
      <DialogContent>
        <PortableTextStyled content={tutorial.body} />
      </DialogContent>
    </Dialog>
  );
}