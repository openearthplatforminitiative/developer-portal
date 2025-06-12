import { HowToCard } from "@/components/HowToArticles/HowToCard"
import { fetchResourceTutorials } from "@/sanity/api"
import { Typography } from "@mui/material"
import { Suspense } from "react"
import HowTosSkeleton from "./[slug]/loading"

export default function HowTosPage() {
	async function Content() {
		const tutorials = await fetchResourceTutorials()
		return tutorials.map((tutorial) => (
			<HowToCard key={tutorial._id} tutorial={tutorial} />
		))
	}

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
				<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
					<Suspense
						fallback={
							<>
								<HowTosSkeleton />
								<HowTosSkeleton />
								<HowTosSkeleton />
							</>
						}
					>
						<Content />
					</Suspense>
				</div>
			</div>
		</div>
	)
}
