"use client"

import { ArrowForward, PublicOutlined, WbSunny } from "@mui/icons-material"
import Link from "next/link"
import { ResourceSummary } from "@/app/data-catalog/DataCatalogTypes"
import { motion } from "framer-motion"

type ResourceCardProps = {
	resource: ResourceSummary
}

export const ResourceCard = ({ resource }: ResourceCardProps) => {
	const tagClasses = "text-sm px-2 py-1 rounded-lg"

	const tagColors = () => {
		switch (resource.type) {
			case "API":
				return (
					<div className={`${tagClasses} bg-primary-90/90 text-primary-10`}>
						{resource.type}
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
						break;
					</div>
				)
		}
	}

	const spatialTag = () => {
		if (resource.has_spatial_extent) {
			return (
				<div className={`${tagClasses} bg-neutral-80/50 flex items-center`}>
					<PublicOutlined fontSize="small" />
				</div>
			)
		}
	}

	const spatialCoversTag = () => {
		if (resource.covers_all) {
			return (
				<div className={`${tagClasses} bg-neutral-80/50 flex items-center`}>
					Covers
				</div>
			)
		} else if (resource.covers_some) {
			return (
				<div className={`${tagClasses} bg-neutral-80/50 flex items-center`}>
					Covers Some
				</div>
			)
		}
	}
	const spatialIntersectsTag = () => {
		if (resource.intersects_all) {
			return (
				<div className={`${tagClasses} bg-neutral-80/50 flex items-center`}>
					Intersects
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

	const Icon = resource.icon ?? WbSunny

	return (
		<motion.div
			layout
			exit={{ opacity: 0 }}
			className="group flex items-center justify-between gap-6 rounded-lg px-6 py-4 bg-neutral-95 hover:bg-neutral-90 cursor-pointer"
		>
			<Link
				className="flex flex-col gap-2 w-full h-full"
				href={`/data-catalog/resource/${resource.id}`}
			>
				<div className="flex items-center gap-2">
					<span className="material-symbols-outlined font-medium">
						{resource.icon}
					</span>
					<h3>{resource.title}</h3>
				</div>
				<div className="flex flex-wrap items-center gap-2">
					{spatialTag()}
					{tagColors()}
					{spatialCoversTag()}
					{spatialIntersectsTag()}
				</div>
			</Link>
			<ArrowForward className="transition group-hover:translate-x-2" />
		</motion.div>
	)
}
