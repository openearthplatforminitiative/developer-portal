import { Button, Link, Typography } from "@mui/material"
import { HowToCard } from "./HowToCard"
import { fetchLatestResourceTutorials } from "@/sanity/api"

export async function LatestTutorials({ slug }: { slug: string }) {
	const tutorials = await fetchLatestResourceTutorials(3, slug)
	return (
		<div>
			<Typography variant="h2" className="mt-8 mb-6">
				Latest How-To&apos;s
			</Typography>
			<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
				{tutorials.map((tutorial) => (
					<HowToCard key={tutorial._id} tutorial={tutorial} />
				))}
			</div>
			<Link href="/how-tos" className="mt-2">
				<Button
					className="rounded-full pointer-events-auto normal-case shadow-none text-xl px-8 py-4 translate-y-1/2"
					variant="contained"
				>
					Explore all our how-to articles
				</Button>
			</Link>
		</div>
	)
}
