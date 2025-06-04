import { ResourceTutorial, sanityClient } from "@/sanity/api"
import { ArrowForward } from "@mui/icons-material"
import { Typography } from "@mui/material"
import Link from "next/link"
import imageUrlBuilder from "@sanity/image-url"
import Image from "next/image"

type HowToCardProps = {
	tutorial: ResourceTutorial
}

export const HowToSmallerCard = ({ tutorial }: HowToCardProps) => {
	console.log("HowToSmallerCard", tutorial)
	const builder = imageUrlBuilder(sanityClient)
	return (
		<Link
			key={tutorial._id}
			href={`/how-tos/${tutorial.slug.current}`}
		>
			<div className="relative group bg-neutral-95 flex gap-1 xs:gap-2 w-full h-24 xs:h-36 rounded-xl cursor-pointer">
				<Image
					src={
						tutorial.mainImage !== null
							? builder.image(tutorial.mainImage).toString()
							: "/article-placeholder.png"
					}
					alt={tutorial.title}
					width={100}
					height={100}
					className="object-cover h-full w-auto aspect-square rounded-xl"
				/>
				<div className="flex flex-row justify-between shrink items-start p-2 xs:p-4 gap-2">
					<Typography
						variant="h4"
						className="text-base xs:text-xl line-clamp-3 xs:line-clamp-4"
					>
						{tutorial.title}
					</Typography>
					<ArrowForward
						fontSize="inherit"
						className="text-xl self-center transform transition-transform duration-300 group-hover:translate-x-2"
					/>
				</div>
			</div>
		</Link>
	)
}
