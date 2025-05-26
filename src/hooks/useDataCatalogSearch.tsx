import { Feature, Polygon, Point } from "geojson"
import { useQuery } from "@tanstack/react-query"
import { fetchDataCatalog } from "@/app/data-catalog/DataCatalogActions"

export const useDataCatalogSearch = (
	types: string[],
	selectedFeatures: Feature<Polygon | Point>[],
	spatial: string[],
	categories: string[],
	years: string[],
	providers: string[],
	tags: string[],
	currentPage: number,
	perPage: number
) =>
	useQuery({
		queryKey: [
			"dataCatalog",
			types,
			selectedFeatures,
			spatial,
			categories,
			years,
			providers,
			tags,
			currentPage,
			perPage,
		],
		queryFn: () =>
			fetchDataCatalog(
				types,
				selectedFeatures,
				spatial,
				categories,
				years,
				providers,
				tags,
				currentPage,
				perPage
			),
	})
