import { BackIcon } from "@/icons/BackIcon"
import { Typography } from "@mui/material"
import { Suspense } from "react"
import { redirect } from "next/navigation"
import { ResourceCard } from "@/components/ResourceCard"
import Link from "next/link"
import { Category } from "@//types/category"
import { fetchCategory } from "../../DataCatalogActions"

type ProviderLoaderProps = {
	params: Promise<{
		categoryId: string
	}>
}
const page = async ({ params }: ProviderLoaderProps) => {
	const { categoryId } = await params
	const category = await fetchCategory(categoryId)
	if (!category) {
		redirect("/not-found")
	}
	return (
		<Suspense>
			<CategoryPage category={category} />
		</Suspense>
	)
}

type CategoryPageProps = {
	category: Category
}

const CategoryPage = ({ category }: CategoryPageProps) => {
	const DatasetCollections = category.resources.filter(
		(resource) => resource.resource.type === "DATASET_COLLECTION"
	)
	const Datasets = category.resources.filter(
		(resource) => resource.resource.type === "DATASET"
	)
	const APIs = category.resources.filter(
		(resource) => resource.resource.type === "API"
	)
	const MLModels = category.resources.filter(
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
					<Typography
						variant="h1"
						className="flex items-center text-4xl xs:text-5xl gap-4"
					>
						<span className="material-symbols-outlined">{category.icon}</span>
						{category.title}
					</Typography>
				</div>
				<Typography className="text-xl xs:text-2xl">
					{category.abstract}
				</Typography>
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
