"use client"

import { ResourceTutorial, sanityClient } from "@/sanity/api"
import { ArrowForward } from "@mui/icons-material"
import { Typography } from "@mui/material"
import Link from "next/link"
import { useParams } from "next/navigation"
import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image"

type ResourceTutorialProps = {
	tutorial: ResourceTutorial
}

export const Tutorial = ({ tutorial }: ResourceTutorialProps) => {
	const params = useParams()
	const builder = imageUrlBuilder(sanityClient)
	return (
		<Link
			key={tutorial._id}
			href={`${params.resourceId}/tutorials/${tutorial.slug.current}`}
		>
			<div className="group relative w-full bg-card rounded-xl overflow-hidden cursor-pointer">
				<Image
					src={
						tutorial.mainImage !== null
							? builder.image(tutorial.mainImage).toString()
							: "/article-placeholder.png"
					}
					alt={tutorial.title}
					width={500}
					height={500}
					className="rounded-t-xl object-cover w-full aspect-square saturate-50 brightness-50 group-hover:saturate-100 group-hover:brightness-100 transition-all duration-300"
				/>
				<div className="flex flex-col justify-between items-end h-full p-6 gap-2 absolute w-full bottom-0">
					<ArrowForward
						fontSize="inherit"
						className="text-4xl transform transition-transform duration-300 group-hover:translate-x-2 text-neutral-100"
					/>
					<Typography
						variant="h4"
						className="text-4xl font-medium text-neutral-100 align-bottom"
					>
						{tutorial.title}
					</Typography>
				</div>
			</div>
		</Link>
	)
}
