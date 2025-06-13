import { fetchResource } from "@/app/data-catalog/DataCatalogActions"
import { HowToCard } from "@/components/HowToArticles/HowToCard"
import PortableTextStyled from "@/components/PortableTextStyled/PortableTextStyled"
import { ResourceCard } from "@/components/ResourceCard"
import { BackIcon } from "@/icons/BackIcon"
import {
	fetchLatestResourceTutorials,
	fetchRelevantResourceTutorialsForTutorial,
	fetchResourceTutorialBySlug,
	fetchResourceTutorials,
	ResourceTutorial,
} from "@/sanity/api"
import { ResourceSummary } from "@/types/resource"
import { Tooltip, Typography } from "@mui/material"
import Link from "next/link"
import { notFound } from "next/navigation"
import Image from "next/image"
import { getImageDimensions } from "@sanity/asset-utils"
import { CameraAltOutlined } from "@mui/icons-material"
import imageUrlBuilder from "@sanity/image-url"
import { sanityClient } from "@/sanity/api"
import { TableOfContents } from "@/components/HowToArticles/TableOfContents"
import { TableOfContentsMenu } from "@/components/HowToArticles/TableOfContentsMenu"

export const revalidate = 600

export const dynamicParams = true

export async function generateStaticParams() {
	const howtos: ResourceTutorial[] = await fetchResourceTutorials()
	return howtos.map((howto) => ({
		slug: String(howto.slug.current),
	}))
}

export default async function HowTosPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const howto = await fetchResourceTutorialBySlug(slug)
	if (!howto) notFound()
	const lastUpdated = new Date(howto._updatedAt)
	const { width, height } = getImageDimensions(howto.mainImage)
	const builder = imageUrlBuilder(sanityClient)
	return (
		<article className="w-full h-full lg:max-w-7xl px-8 lg:my-44 my-20">
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
						Last updated:{" "}
						{lastUpdated.toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</Typography>
				)}
				<div className="relative w-fit">
					<Image
						src={
							howto.mainImage.asset?._ref
								? builder.image(howto.mainImage.asset._ref).toString()
								: ""
						}
						alt={howto.mainImage.alt ?? ""}
						loading="lazy"
						height={height}
						width={width}
						className="rounded-xl w-full object-cover"
					/>
					{howto.mainImage && howto.mainImage?.caption && (
						<Tooltip placement="left-end" title={howto.mainImage.caption} arrow>
							<div className="flex justify-center items-center h-fit aspect-square rounded-full bg-secondary-90 text-secondary-main hover:bg-secondary-80 absolute text-[12px] bottom-0 right-0 p-2 m-2">
								<CameraAltOutlined fontSize="inherit" />
							</div>
						</Tooltip>
					)}
				</div>
				<div className="grid grid-cols-1 md:grid-cols-[16rem_minmax(0,1fr)] gap-8 max-w-full">
					<div className="md:sticky top-24 self-start w-full">
						<TableOfContents value={howto.body} />
					</div>
					<div className="w-full max-w-full">
						<PortableTextStyled value={howto.body} />
					</div>
				</div>
				<div className="sticky self-end bottom-8 right-0  md:hidden">
					<TableOfContentsMenu value={howto.body} />
				</div>
				<hr />
				{lastUpdated && (
					<Typography variant="subtitle1">
						Last updated:{" "}
						{lastUpdated.toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric",
						})}
					</Typography>
				)}
				<RelevantResources tutorial={howto} />
				<RelevantTutorials tutorial={howto} />
				<LatestTutorials slug={slug} />
			</div>
		</article>
	)
}

async function RelevantTutorials({ tutorial }: { tutorial: ResourceTutorial }) {
	const relevantResourceTitles =
		tutorial.relevantResources?.resources?.map((resource) => resource.title) ??
		[]
	const tutorials = await fetchRelevantResourceTutorialsForTutorial(
		relevantResourceTitles,
		tutorial.slug.current
	)
	if (!tutorials || tutorials.length === 0) {
		return null
	}
	return (
		<div>
			<Typography variant="h2" className="mt-8 mb-6">
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
			<Typography variant="h2" className="mt-8 mb-6">
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
	const directResourcesIds =
		tutorial.relevantResources?.resources?.map((resource) => resource.id) ?? []
	const excludedResourceTypes =
		tutorial.relevantResources?.excludedResourceTypes || []
	const includeResourceChildren =
		tutorial.relevantResources?.includeResourceChildren || false
	const includeResourceParents =
		tutorial.relevantResources?.includeResourceParents || false
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
			<Typography variant="h2" className="mt-8 mb-6">
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
