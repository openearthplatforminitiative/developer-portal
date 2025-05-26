import { BackIcon } from "@/icons/BackIcon"
import { Card, Typography } from "@mui/material"
import { fetchProvider } from "../../DataCatalogActions"
import { Provider } from "@//types/provider"
import { Suspense } from "react"
import { redirect } from "next/navigation"
import { ArrowOutward } from "@mui/icons-material"
import Link from "next/link"
import { ResourceCard } from "@/components/ResourceCard.tsx"

type ProviderLoaderProps = {
	params: Promise<{
		providerId: string
	}>
}
const page = async ({ params }: ProviderLoaderProps) => {
	const { providerId } = await params
	const provider = await fetchProvider(providerId)
	if (!provider) {
		redirect("/not-found")
	}
	return (
		<Suspense>
			<ProviderPage provider={provider} />
		</Suspense>
	)
}

type ProviderPageProps = {
	provider: Provider
}

const ProviderPage = ({ provider }: ProviderPageProps) => {
	const DatasetCollections = provider.resources.filter(
		(resource) => resource.resource.type === "DATASET_COLLECTION"
	)
	const Datasets = provider.resources.filter(
		(resource) => resource.resource.type === "DATASET"
	)
	const APIs = provider.resources.filter(
		(resource) => resource.resource.type === "API"
	)
	const MLModels = provider.resources.filter(
		(resource) => resource.resource.type === "ML_MODEL"
	)

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
					<Typography variant="h1" className="text-4xl xs:text-5xl">
						{provider.name}
					</Typography>
				</div>
				<Typography className="text-xl xs:text-2xl">
					{provider.description}
				</Typography>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-28">
				<Link href={provider.provider_url} target="_blank">
					<Card
						key={provider.id}
						className="group bg-card hover:bg-secondary-90 h-full w-full shadow-none rounded-xl"
					>
						<div className="flex flex-col p-6 gap-3">
							<div className="flex flex-row justify-between items-center">
								<Typography variant="h5" className="text-xl xs:text-2xl">
									{provider.provider_url}
								</Typography>
								<div className="transform transition-transform duration-300 group-hover:translate-x-2">
									<ArrowOutward />
								</div>
							</div>
						</div>
					</Card>
				</Link>
			</div>
			{DatasetCollections && DatasetCollections.length > 0 && (
				<div className="flex flex-col mt-28">
					<Typography className="text-3xl xs:text-4xl">
						Dataset Collections
					</Typography>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
						{DatasetCollections.map((resource) => (
							<ResourceCard
								key={resource.resource.id}
								resource={resource.resource}
							/>
						))}
					</div>
				</div>
			)}
			{Datasets && Datasets.length > 0 && (
				<div className="flex flex-col mt-28">
					<Typography className="text-3xl xs:text-4xl">Datasets</Typography>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
						{Datasets.map((resource) => (
							<ResourceCard
								key={resource.resource.id}
								resource={resource.resource}
							/>
						))}
					</div>
				</div>
			)}
			{APIs && APIs.length > 0 && (
				<div className="flex flex-col mt-28">
					<Typography className="text-3xl xs:text-4xl">APIs</Typography>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
						{APIs.map((resource) => (
							<ResourceCard
								key={resource.resource.id}
								resource={resource.resource}
							/>
						))}
					</div>
				</div>
			)}
			{MLModels && MLModels.length > 0 && (
				<div className="flex flex-col mt-28">
					<Typography className="text-3xl xs:text-4xl">ML Models</Typography>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
						{MLModels.map((resource) => (
							<ResourceCard
								key={resource.resource.id}
								resource={resource.resource}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default page
