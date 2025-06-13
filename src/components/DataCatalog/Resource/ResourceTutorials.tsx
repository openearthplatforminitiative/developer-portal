import {
	fetchRelevantResourceTutorialsForResource,
	ResourceTutorial,
} from "@/sanity/api"
import { Typography } from "@mui/material"
import { Suspense } from "react"
import { HowToCard } from "../../HowToArticles/HowToCard"
import { Resource } from "@/types/resource"

type ResourceTutorialsLoaderProps = {
	resource: Resource
}

const ResourceTutorialsLoader = ({
	resource,
}: ResourceTutorialsLoaderProps) => {
	const childrenTitles = resource.children?.map((child) => child.title) || []
	const parentsTitles = resource.parents?.map((parent) => parent.title) || []
	const tutorialsPromise = fetchRelevantResourceTutorialsForResource(
		resource.title,
		parentsTitles,
		childrenTitles,
		resource.type
	)
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<ResourceTutorials tutorialsPromise={tutorialsPromise} />
		</Suspense>
	)
}

const ResourceTutorials = async ({
	tutorialsPromise,
}: {
	tutorialsPromise: Promise<ResourceTutorial[]>
}) => {
	const tutorials = await tutorialsPromise
	if (!tutorials || tutorials.length === 0) {
		return null
	}
	return (
		<div className="flex flex-col mt-28">
			<Typography variant="h3">How-To Articles</Typography>
			<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
				{tutorials.map((tutorial) => (
					<HowToCard key={tutorial._id} tutorial={tutorial} />
				))}
			</div>
		</div>
	)
}

export default ResourceTutorialsLoader
