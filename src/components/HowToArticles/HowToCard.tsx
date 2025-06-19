"use client"

import { ResourceTutorial, sanityClient } from "@/sanity/api"
import { ArrowForward } from "@mui/icons-material"
import { Typography } from "@mui/material"
import Link from "next/link"
import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image"

type HowToCardProps = {
	tutorial: ResourceTutorial
}

export const HowToCard = ({ tutorial }: HowToCardProps) => {
	const builder = imageUrlBuilder(sanityClient)
	return (
		<Link key={tutorial._id} href={`/how-tos/${tutorial.slug.current}`}>
			<div className="group flex flex-col relative w-full h-full rounded-xl overflow-hidden cursor-pointer">
				<Image
					src={
						tutorial.mainImage !== null
							? builder.image(tutorial.mainImage).toString()
							: "/article-placeholder.png"
					}
					alt={tutorial.title}
					width={500}
					height={309}
					className="rounded-xl object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-800 ease-in-out"
				/>
				<div className="absolute flex flex-col justify-between items-start w-full bottom-0">
					<div className="h-16 w-full bg-linear-to-b from-neutral-0/0 to-neutral-0/50" />
					<div className="w-full max-h-full flex gap-6 items-end bg-neutral-0/50 text-neutral-100 text-semibold p-6">
						<Typography variant="h4" className="text-2xl line-clamp-4">
							{tutorial.title}
						</Typography>
						<ArrowForward
							fontSize="inherit"
							className="text-2xl leading-10 transform transition-transform duration-300 group-hover:translate-x-2"
						/>
					</div>
				</div>
			</div>
		</Link>
	)
}
