"use client"

import { ArrowForward, PublicOutlined } from "@mui/icons-material"
import Link from "next/link"
import { ResourceSummary } from "@//types/resource"

type ResourceCardProps = {
	resource: ResourceSummary
	isLoading?: boolean
}

export const ResourceCard = ({ resource, isLoading }: ResourceCardProps) => {
	const tagClasses = "text-sm px-2 py-1 rounded-lg"

	const tagColors = () => {
		switch (resource.type) {
			case "API":
				return (
					<div className={`${tagClasses} bg-primary-90/90 text-primary-10`}>
						{resource.type}
					</div>
				)
			case "DATASET_COLLECTION":
				return (
					<div className={`${tagClasses} bg-neutral-100/90 text-neutral-10`}>
						Dataset Collection
					</div>
				)
			case "DATASET":
				return (
					<div className={`${tagClasses} bg-secondary-90/90 text-secondary-10`}>
						Dataset
					</div>
				)
			case "ML_MODEL":
				return (
					<div className={`${tagClasses} bg-tertiary-90/90 text-tertiary-10`}>
						ML Model
					</div>
				)
			default:
				return (
					<div className={`${tagClasses} bg-error-90 text-error-main`}>
						{resource.type}
					</div>
				)
		}
	}

	const hasSpatialTag = () => {
		if (resource.has_spatial_extent) {
			return (
				<div className={`${tagClasses} bg-neutral-80/50 flex items-center`}>
					<PublicOutlined fontSize="small" />
				</div>
			)
		}
	}

	const spatialTag = () => {
		if (resource.covers_all) {
			return (
				<div className={`${tagClasses} bg-neutral-80/50 flex items-center`}>
					Covers
				</div>
			)
		} else if (resource.intersects_all) {
			return (
				<div className={`${tagClasses} bg-neutral-80/50 flex items-center`}>
					Intersects
				</div>
			)
		} else if (resource.covers_some) {
			return (
				<div className={`${tagClasses} bg-neutral-80/50 flex items-center`}>
					Covers Some
				</div>
			)
		} else if (resource.intersects_some) {
			return (
				<div className={`${tagClasses} bg-neutral-80/50 flex items-center`}>
					Intersects Some
				</div>
			)
		}
	}

	const Content = () => (
		<>
			<div className="flex items-center gap-2">
				<span className="material-symbols-outlined font-medium">
					{resource.icon}
				</span>
				<h3>{resource.title}</h3>
			</div>
			<div className="flex flex-wrap items-center gap-2">
				{hasSpatialTag()}
				{tagColors()}
				{spatialTag()}
			</div>
		</>
	)
	return (
		<div className={`group h-full flex items-center justify-between gap-6 rounded-lg px-6 py-4 transition-colors ${isLoading ? "animate-pulse bg-neutral-90" : " bg-neutral-95 hover:bg-neutral-90 cursor-pointer"}`}
		>
			<Link
				className="flex flex-col justify-center gap-2 w-full h-full"
				href={`/data-catalog/resource/${resource.id}`}
			>
				<Content />
			</Link>
			<ArrowForward className="transition group-hover:translate-x-2" />
		</div>
	)
}
