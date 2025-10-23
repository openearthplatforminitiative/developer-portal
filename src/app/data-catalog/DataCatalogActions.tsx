import { Feature, Point, Polygon } from "geojson"
import { Resource, ResourceSummary } from "@//types/resource"
import { Provider, ProviderSummary } from "@//types/provider"
import { Category, CategorySummary } from "@//types/category"
import { Pagination } from "@//types/pagination"
import { Providers } from "@/data/providers"
import { Categories } from "@/data/categories"
import {
	booleanContains,
	booleanIntersects,
	booleanWithin,
	polygon,
} from "@turf/turf"
import { RegionSpatialExtent } from "@/types/spatial-extent"

export type SpatialTypes = "REGION" | "GLOBAL" | "NON_SPATIAL"
export type ResourceTypes = "API" | "Dataset" | "ML Model"

export const fetchProviders = async (): Promise<ProviderSummary[]> => {
	return Promise.resolve(Providers)
}

export const fetchProvider = async (
	id: string
): Promise<Provider | undefined> => {
	return Promise.resolve(Providers.find((provider) => provider.id === id))
}

export const fetchDataCatalog = async (
	types: string[],
	features: Feature<Point | Polygon>[],
	spatial: string[],
	categories: string[],
	years: string[],
	providers: string[],
	tags: string[],
	page: number,
	limit: number
): Promise<Pagination<ResourceSummary>> => {
	try {
		const { Resources } = await import("@/data/resources")
		let filteredResources = Resources.slice()

		if (types.length > 0) {
			filteredResources = filteredResources.filter((resource) =>
				types.includes(resource.type)
			)
		}

		if (categories.length > 0) {
			filteredResources = filteredResources.filter((resource) =>
				resource.categories.some((cat) => categories.includes(cat.category.id))
			)
		}

		if (providers.length > 0) {
			filteredResources = filteredResources.filter((resource) =>
				resource.providers.some((prov) => providers.includes(prov.provider.id))
			)
		}

		if (spatial.length > 0) {
			filteredResources = filteredResources.filter((resource) => {
				if (spatial.includes("NON_SPATIAL")) {
					return !resource.has_spatial_extent
				}
				if (
					spatial.includes("GLOBAL") &&
					resource.spatial_extent_type === "GLOBAL"
				) {
					return true
				}
				if (
					spatial.includes("REGION") &&
					resource.spatial_extent_type === "REGION"
				) {
					return true
				}
				return false
			})
		}

		if (features.length > 0) {
			filteredResources = filteredResources.filter((resource) => {
				if (!resource.spatial_extent || resource.spatial_extent.length === 0)
					return false

				if (
					resource.spatial_extent.some((extent) => extent.type === "GLOBAL")
				) {
					resource.covers_all = true
					resource.covers_some = true
					resource.intersects_all = true
					resource.intersects_some = true
					return true
				}

				let coversAll = false
				let coversSome = false
				let intersectsAll = false
				let intersectsSome = false

				for (const extent of resource.spatial_extent) {
					const geometry = (extent as RegionSpatialExtent).geometry
					const featureCoverageResults = features.map((feature) => {
						try {
							const contains = geometry.features.some((resourceFeature) => {
								if (resourceFeature.geometry.type === "MultiPolygon") {
									return resourceFeature.geometry.coordinates.some(
										(polygonCoords) => {
											const polygonFeature = polygon(polygonCoords)
											return booleanWithin(polygonFeature, resourceFeature)
										}
									)
								}
								return booleanContains(feature, resourceFeature)
							})
							const isIntersecting = geometry.features.some((resourceFeature) =>
								booleanIntersects(feature, resourceFeature)
							)
							return { contains, isIntersecting }
						} catch (error) {
							console.error(
								`Error processing geometry for resource ${resource.id}:`,
								error
							)
							return { contains: false, isIntersecting: false }
						}
					})

					const coveredCount = featureCoverageResults.filter(
						(r) => r.contains
					).length
					const intersectingCount = featureCoverageResults.filter(
						(r) => r.isIntersecting
					).length

					if (coveredCount === features.length) coversAll = true
					if (coveredCount > 0) coversSome = true
					if (intersectingCount === features.length) intersectsAll = true
					if (intersectingCount > 0) intersectsSome = true
				}

				resource.covers_all = coversAll
				resource.covers_some = coversSome
				resource.intersects_all = intersectsAll
				resource.intersects_some = intersectsSome

				return intersectsSome
			})
		}

		if (years.length > 0) {
			filteredResources = filteredResources.filter((resource) => {
				if (
					!resource.temporal_extent ||
					resource.temporal_extent.length === 0
				) {
					return false
				}
				return resource.temporal_extent.some((extent) => {
					const startYear = extent.start_date
						? new Date(extent.start_date).getFullYear()
						: null
					const endYear = extent.end_date
						? new Date(extent.end_date).getFullYear()
						: null

					return years.some((year) => {
						const yr = parseInt(year, 10)
						if (startYear && endYear) {
							return yr >= startYear && yr <= endYear
						}
						if (startYear && !endYear) {
							return yr >= startYear
						}
						return false
					})
				})
			})
		}

		if (tags.length > 0) {
			filteredResources = filteredResources.filter((resource) =>
				tags.every((tag) =>
					resource.keywords
						.map((keyword) => keyword.toLowerCase())
						.includes(tag.toLowerCase())
				)
			)
		}

		const spliceFrom = (page - 1) * limit
		const spliceTo = spliceFrom + limit
		const something = {
			total_pages: Math.ceil(filteredResources.length / limit),
			current_page: page,
			data: filteredResources.slice(spliceFrom, spliceTo),
		}
		return Promise.resolve(something)
	} catch (error) {
		return Promise.reject(error)
	}
}

export const fetchResource = async (
	id: string
): Promise<Resource | undefined> => {
	const { Resources } = await import("@/data/resources")
	return Promise.resolve(Resources.find((resource) => resource.id === id))
}

export const fetchCategories = async (): Promise<CategorySummary[]> => {
	return Promise.resolve(Categories)
}

export const fetchCategory = async (
	id: string
): Promise<Category | undefined> => {
	return Promise.resolve(Categories.find((category) => category.id === id))
}
