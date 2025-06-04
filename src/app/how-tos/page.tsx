import { HowToArticles } from "@/components/Resources/HowToArticles"
import { Typography } from "@mui/material"

export default function HowTosPage() {
	return (
		<div className="w-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<div id="top" className="flex flex-col gap-8 mt-14">
				<Typography
					variant="h1"
					className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl"
				>
					How-To Articles
				</Typography>
				<Typography className="text-xl xs:text-2xl">
					Articles to help you get started with OpenEPI's data resources and its
					features.
				</Typography>
				<HowToArticles />
			</div>
		</div>
	)
}
