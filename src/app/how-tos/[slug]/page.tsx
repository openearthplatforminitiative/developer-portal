import { fetchResource } from "@/app/data-catalog/DataCatalogActions"
import { HowToCard } from "@/components/HowToCard"
import PortableTextStyled from "@/components/PortableTextStyled"
import { ResourceCard } from "@/components/ResourceCard"
import { BackIcon } from "@/icons/BackIcon"
import {
	fetchLatestResourceTutorials,
	fetchRelevantResourceTutorialsForTutorial,
	fetchResourceTutorialBySlug,
	ResourceTutorial,
} from "@/sanity/api"
import { ResourceSummary } from "@/types/resource"
import { Typography } from "@mui/material"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function HowTosPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const howto = await fetchResourceTutorialBySlug(slug)
	if (!howto) notFound()
	const lastUpdated = new Date(howto._updatedAt)
	return (
		<div className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Link
				href="/how-tos"
				className="flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1"
			>
				<BackIcon />
				<Typography className="text-xl">Back to how-to articles</Typography>
			</Link>
			<div id="top" className="flex flex-col gap-8 mt-14">
				<h1 className="leading-[48px] xs:leading-[64px] text-4xl xs:text-6xl">
					{howto.title}
				</h1>
				{lastUpdated && (
					<Typography variant="subtitle1">
						Last updated: {lastUpdated.toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric"
						})}
					</Typography>
				)}
				<PortableTextStyled value={howto.body} />
				<RelevantResources tutorial={howto} />
				<RelevantTutorials tutorial={howto} />
				<LatestTutorials slug={slug} />
			</div>
		</div>
	)
}

async function RelevantTutorials({ tutorial }: { tutorial: ResourceTutorial }) {
	console.log("tutorial", tutorial)
	const relevantResourceTitles = tutorial.relevantResources.resources.map(
		(resource) => resource.title
	)
	const tutorials = await fetchRelevantResourceTutorialsForTutorial(
		relevantResourceTitles,
		tutorial.slug.current
	)
	if (!tutorials || tutorials.length === 0) {
		return null
	}
	return (
		<div>
			<Typography variant="h2" className="text-3xl xs:text-4xl w-fit mb-6">
				Relevant How-To&apos;s
			</Typography>
			<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
				{tutorials.map((tutorial) => (
					<HowToCard key={tutorial._id} tutorial={tutorial} />
				))}
			</div>
		</div>
	)
}
async function LatestTutorials({ slug }: { slug: string }) {
	const tutorials = await fetchLatestResourceTutorials(3, slug)
	return (
		<div>
			<Typography variant="h2" className="text-3xl xs:text-4xl w-fit mb-6">
				Latest How-To&apos;s
			</Typography>
			<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6">
				{tutorials.map((tutorial) => (
					<HowToCard key={tutorial._id} tutorial={tutorial} />
				))}
			</div>
		</div>
	)
}
async function RelevantResources({ tutorial }: { tutorial: ResourceTutorial }) {
	const directResourcesIds = tutorial.relevantResources.resources.map(
		(resource) => resource.id
	)
	const excludedResourceTypes =
		tutorial.relevantResources.excludedResourceTypes || []
	const includeResourceChildren =
		tutorial.relevantResources.includeResourceChildren || false
	const includeResourceParents =
		tutorial.relevantResources.includeResourceParents || false
	const directResources = directResourcesIds.map((id) =>
		fetchResource(id).then((resource) => {
			if (!resource) {
				return null
			}
			return resource
		})
	)
	const resources = await Promise.all(directResources)
	const filteredResources = resources.filter((resource) => !!resource)
	if (filteredResources.length === 0) {
		return null
	}
	const allResources = [...filteredResources] as ResourceSummary[]
	for (const resource of filteredResources) {
		if (resource) {
			if (includeResourceChildren && resource.children) {
				for (const child of resource.children) {
					if (!excludedResourceTypes.includes(child.type)) {
						allResources.push(child)
					}
				}
			}
			if (includeResourceParents && resource.parents) {
				for (const parent of resource.parents) {
					if (!excludedResourceTypes.includes(parent.type)) {
						allResources.push(parent)
					}
				}
			}
		}
	}
	return (
		<div>
			<Typography variant="h2" className="text-3xl xs:text-4xl w-fit mb-6">
				Relevant Resources
			</Typography>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{allResources.map((resource) => (
					<ResourceCard key={resource.id} resource={resource} />
				))}
			</div>
		</div>
	)
}
