import InfoCard from "@/app/components/InfoCard"
import { BackIcon } from "@/app/icons/BackIcon"
import { GithubIconBlack } from "@/app/icons/GithubIconBlack"
import { OpenApiIcon } from "@/app/icons/OpenApiIcon"
import { Card, Typography } from "@mui/material"
import { fetchResource } from "../../DataCatalogActions"
import { Resource } from "../../DataCatalogTypes"
import { Fragment, Suspense } from "react"
import { redirect } from "next/navigation"
import { ArrowForward, CloudOutlined, Code, FileDownloadOutlined, ListAlt } from "@mui/icons-material"
import ApiCard from "@/app/components/ApiCard"
import CodeBlockWrapper from "@/app/components/CodeBlockWrapper"
import { ResourceMap } from "@/app/components/ResourceMap"
import Link from "next/link"

type ResourceLoaderProps = {
	params: {
		resourceId: string
	}
}
const page = async ({ params: { resourceId } }: ResourceLoaderProps) => {
	const resource = await fetchResource(resourceId)
	if (!resource) {
		redirect("/not-found")
	}
	return (
		<Suspense>
			<ResourcePage resource={resource} />
		</Suspense>
	)
}

type ResourcePageProps = {
	resource: Resource
}

export const ResourcePage = ({ resource }: ResourcePageProps) => {
	const Icon = resource.categories[0].icon
	return (
		<div className="w-full lg:max-w-7xl px-8 lg:my-44 my-20">
			<Link
				href="/data-catalog"
				className="flex flex-row items-center text-primary-main underline hover:no-underline -mt-20 gap-1"
			>
				<BackIcon />
				<Typography className="text-xl">Back to data catalog</Typography>
			</Link>

			<div className="flex flex-col gap-8 mt-14">
				<div className="flex flex-wrap items-center gap-4">
					<Typography variant="h1" className="flex items-center text-4xl xs:text-5xl gap-4">
						<Icon fontSize="inherit" />{resource.title}
					</Typography>
					<div className="flex items-center gap-2 px-4 py-2 bg-neutral-90 rounded-full text-lg font-medium">{resource.type}</div>
				</div>
				<div className="flex flex-wrap items-center gap-4">
					{resource.version && (
						<div className="flex items-center gap-2 px-4 py-2 bg-neutral-90 rounded-full">Version {resource.version}</div>
					)}
					{resource.license && (
						<div className="flex items-center gap-2 px-4 py-2 bg-neutral-90 rounded-full">{resource.license.name}</div>
					)}
					{resource.release_date && (
						<div className="flex items-center gap-2 px-4 py-2 bg-neutral-90 rounded-full">Released {new Date(resource.release_date).getFullYear()}</div>
					)}
					{resource.update_frequency && (
						<div className="flex items-center gap-2 px-4 py-2 bg-neutral-90 rounded-full">Updated {resource.update_frequency}</div>
					)}
				</div>
				<div className="flex items-center gap-4">
					{resource.keywords && resource.keywords.length > 0 && (
						<Typography variant="body2">
							{resource.keywords.join(" • ")}
						</Typography>
					)}
				</div>
				<Typography className="text-xl xs:text-2xl">
					{resource.abstract}
				</Typography>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-20">
				{resource.openapi_url && (
					<InfoCard
						externalLink={true}
						header="OpenAPI Spec"
						subHeader={`Explore the OpenAPI spec for the ${resource.title}`}
						cardIcon={<OpenApiIcon />}
						href={resource.openapi_url}
					/>
				)}
				{resource.github_url && (
					<InfoCard
						externalLink={true}
						header="Github"
						subHeader={`Explore the source code behind the ${resource.title}.`}
						cardIcon={<GithubIconBlack />}
						href={resource.github_url}
					/>
				)}
				{resource.documentation_url && (
					<InfoCard
						externalLink={true}
						header="Documentation"
						subHeader={`Explore the documentation for the ${resource.title}`}
						cardIcon={<ListAlt />}
						href={resource.documentation_url}
					/>
				)}
				{resource.download_url && (
					<InfoCard
						externalLink={true}
						header="Download"
						subHeader={`Download the ${resource.title}`}
						cardIcon={<FileDownloadOutlined />}
						href={resource.download_url}
					/>
				)}
				{resource.client_library && (
					<InfoCard
						externalLink={false}
						header="Client Libraries"
						subHeader={`Explore the client libraries for the ${resource.title}`}
						cardIcon={<Code />}
						href="/data-catalog/client-libraries" />
				)}
			</div>
			<div className="flex flex-col mt-28">
				<Typography className="text-3xl xs:text-4xl">Provided by</Typography>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
					{resource.providers.map((provider) => (
						<Link
							href={`/data-catalog/provider/${provider.id}`}
							key={provider.id}
						>
							<Card key={provider.id} className="group bg-card hover:bg-secondary-90 h-full w-full shadow-none rounded-xl">
								<div className="flex flex-col p-6 gap-3">
									<div className="flex flex-row justify-between items-center">
										<Typography variant="h5" className="text-xl xs:text-2xl">
											{provider.name}
										</Typography>
										<div className="transform transition-transform duration-300 group-hover:translate-x-2">
											<ArrowForward />
										</div>
									</div>
									<Typography variant="body1" className="text-sm xs:text-base">
										{provider.description}
									</Typography>
								</div>
							</Card>
						</Link>
					))}
				</div>
			</div>
			{resource.spatialExtent && resource.spatialExtent.length > 0 && (
				<div className="flex flex-col mt-28">
					<Typography className="text-3xl xs:text-4xl">Spatial Extent</Typography>
					<div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
						{resource.spatialExtent.map((spatialExtent) => (
							<div key={spatialExtent.id} className="flex flex-col bg-card h-full w-full shadow-none rounded-xl overflow-hidden">
								<div className="w-full aspect-square shrink">
									{spatialExtent.type === "Region" ? (
										<ResourceMap geometry={spatialExtent.geometry} />
									) : (
										<ResourceMap geometry={[{
											type: "Feature",
											geometry: {
												type: "Polygon",
												coordinates: [
													[
														[180, 90],
														[180, -90],
														[-180, -90],
														[-180, 90],
														[180, 90]
													]
												]
											},
											properties: {}
										}]} />
									)}
								</div>
								<div className="flex grow flex-col p-6 gap-3">
									<Typography variant="h5" className="text-xl xs:text-2xl">
										{spatialExtent.type === "Region" ? spatialExtent.region : "Global"}
									</Typography>
									<Typography variant="body1" className="text-sm xs:text-base">
										{spatialExtent.details}
									</Typography>
									<Typography variant="body1" className="text-sm xs:text-base">
										Spatial Resolution: {spatialExtent.spatialResolution}
									</Typography>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
			{resource.html_content && (
				<div className="flex flex-col mt-28">
					<div className="prose" dangerouslySetInnerHTML={{ __html: resource.html_content }} />
				</div>
			)}
			{resource.usedBy && resource.usedBy.length > 0 && (
				<div className="flex flex-col mt-28">
					<Typography className="text-3xl xs:text-4xl">Used by</Typography>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
						{resource.usedBy.map((usedByResource) => (
							<ApiCard
								key={usedByResource.id}
								header={usedByResource.title}
								subHeader={usedByResource.abstract}
								cardIcon={<CloudOutlined />}
								href={usedByResource.id}
							/>
						))}
					</div>
				</div>
			)}
			{resource.basedOn && resource.basedOn.length > 0 && (
				<div className="flex flex-col mt-28">
					<Typography className="text-3xl xs:text-4xl">Based on</Typography>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
						{resource.basedOn.map((basedOnResource) => (
							<ApiCard
								key={basedOnResource.id}
								header={basedOnResource.title}
								subHeader={basedOnResource.abstract}
								cardIcon={<CloudOutlined />}
								href={basedOnResource.id}
							/>
						))}
					</div>
				</div>
			)}
			{resource.useExamples && resource.useExamples.length > 0 && (
				<div className="flex flex-col mt-28">
					<Typography className="text-3xl xs:text-4xl">Use Examples</Typography>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
						{resource.useExamples.map((useExample) => (
							<InfoCard
								key={useExample.id}
								externalLink={false}
								header={useExample.title}
								subHeader={useExample.description}
								cardIcon={<CloudOutlined />}
								href="/data-catalog/resource/1"
							/>
						))}
					</div>
				</div>
			)}
			{resource.codeExamples && resource.codeExamples.length > 0 && (
				<div className="flex flex-col mt-28">
					<Typography className="text-3xl xs:text-4xl">Code Examples</Typography>
					{resource.codeExamples.map((codeExample) => (
						<Fragment key={codeExample.id}>
							<Typography className="text-2xl xs:text-3xl mt-8">{codeExample.title}</Typography>
							<Typography className="text-base mt-6">{codeExample.description}</Typography>
							<CodeBlockWrapper
								codeBlocks={codeExample.code.map((code) => ({
									language: code.language,
									codeString: code.code
								}))}
							/>
						</Fragment>
					))}
				</div>
			)}
		</div>
	)
}

export default page
