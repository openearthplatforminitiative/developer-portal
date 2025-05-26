import {
	fetchResourceTutorialsByResourceNames,
	ResourceTutorial,
} from "@/sanity/api"
import { Typography } from "@mui/material"
import { Suspense } from "react"
import { Tutorial } from "./ResourceTutorial"

const ResourceTutorialsLoader = ({
	resourceNames,
}: {
	resourceNames: string[]
}) => {
	const tutorialsPromise = fetchResourceTutorialsByResourceNames(resourceNames)
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
			<Typography variant="h2">Tutorials</Typography>
			<div className="not-visited:grid grid-cols-1 md:grid-cols-3 mt-8">
				{tutorials.map((tutorial) => (
					<Tutorial key={tutorial._id} tutorial={tutorial} />
				))}
			</div>
		</div>
	)
}

export default ResourceTutorialsLoader
