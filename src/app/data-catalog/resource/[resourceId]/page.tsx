import InfoCard from "@/components/InfoCard"
import { BackIcon } from "@/icons/BackIcon"
import { Card, Typography } from "@mui/material"
import { fetchResource } from "../../DataCatalogActions"
import { Fragment } from "react"
import { notFound } from "next/navigation"
import { ArrowForward } from "@mui/icons-material"
import CodeBlockWrapper from "@/components/CodeBlockWrapper"
import Link from "next/link"
import Image from "next/image"
import { ResourceOverview } from "@/components/DataCatalog/Resource/ResourceOverview"
import { ResourceSpatialExtent } from "@/components/DataCatalog/Resource/ResourceSpatialExtent"
import { ResourceAssociations } from "@/components/DataCatalog/Resource/ResourceAssociations"
import ResourceTutorials from "@/components/DataCatalog/Resource/ResourceTutorials"


export default async function Page({
	params,
}: {
	params: Promise<{ resourceId: string }>
}) {
	const { resourceId } = await params
	const resource = await fetchResource(resourceId)
		.catch(() => notFound())
	if (!resource) notFound()

	return (
		<div className="w-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Link
				href="/data-catalog"
				className="flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1"
			>
				<BackIcon />
				<Typography className="text-xl">Back to data catalog</Typography>
			</Link>
			<ResourceOverview resource={resource} />
			{resource.html_content && (
				<div className="flex flex-col mt-28">
					<Typography variant="h2">More information</Typography>
					<div
						className="prose mt-8 max-w-[750px]"
						dangerouslySetInnerHTML={{ __html: resource.html_content }}
					/>
				</div>
			)}
			<ResourceTutorials resource={resource} />
			<ResourceAssociations resource={resource} />
			<ResourceSpatialExtent resource={resource} />
			{resource.examples && resource.examples.length > 0 && (
				<div className="flex flex-col mt-28">
					<Typography variant="h2">Use Examples</Typography>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
						{resource.examples.map((use_example) => (
							<InfoCard
								key={use_example.id}
								externalLink={true}
								header={use_example.title}
								subHeader={use_example.description}
								cardIcon={
									use_example.favicon_url && (
										<Image
											src={use_example.favicon_url}
											alt=""
											width={24}
											height={24}
										/>
									)
								}
								href={use_example.example_url}
							/>
						))}
					</div>
				</div>
			)}
			{resource.code_examples && resource.code_examples.length > 0 && (
				<div id="code-examples" className="flex flex-col mt-28">
					<Typography variant="h2">Code Examples</Typography>
					{resource.code_examples.map((codeExample) => (
						<Fragment key={codeExample.id}>
							<Typography variant="h3" className="mt-8">
								{codeExample.title}
							</Typography>
							<Typography className="text-base mt-6">
								{codeExample.description}
							</Typography>
							<CodeBlockWrapper
								codeBlocks={codeExample.code.map((code) => ({
									language: code.language,
									codeString: code.source,
								}))}
							/>
						</Fragment>
					))}
				</div>
			)}
			<div id="providers" className="flex flex-col mt-28">
				<Typography variant="h2">Provided by</Typography>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					{resource.providers.map((provider) => (
						<Link
							href={`/data-catalog/provider/${provider.provider.id}`}
							key={provider.provider.id}
						>
							<Card
								key={provider.provider.id}
								className="group bg-card hover:bg-secondary-90 h-full w-full shadow-none rounded-xl"
							>
								<div className="flex flex-col p-6 gap-3">
									<div className="flex flex-row justify-between items-center">
										<Typography variant="h5" className="text-xl xs:text-2xl">
											{provider.provider.name}
										</Typography>
										<div className="transform transition-transform duration-300 group-hover:translate-x-2">
											<ArrowForward />
										</div>
									</div>
									<Typography variant="body1" className="text-sm xs:text-base">
										{provider.provider.description}
									</Typography>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
