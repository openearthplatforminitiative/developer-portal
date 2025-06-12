import { fetchLatestResourceTutorials } from "@/sanity/api"
import { Suspense } from "react"
import { HowToCard } from "@/components/HowToArticles/HowToCard"
import { HowToArticleSkeleton } from "../HowToArticles/skeleton"

export const HowToArticles = () => {
	return (
		<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
			<Suspense fallback={
				<>
					<HowToArticleSkeleton />
					<HowToArticleSkeleton />
					<HowToArticleSkeleton />
				</>
			}>
				<Content />
			</Suspense>
		</div>
	)
}

const Content = async () => {
	const tutorials = await fetchLatestResourceTutorials()
	if (!tutorials || tutorials.length === 0) {
		return null
	}
	return (
		tutorials.map((tutorial) => (
			<HowToCard key={tutorial._id} tutorial={tutorial} />
		))
	)
}
