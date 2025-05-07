import { Feature, Polygon, Point } from "geojson"
import { useQuery } from "@tanstack/react-query"
import { fetchDataCatalog } from "../data-catalog/DataCatalogActions"

export const useDataCatalogSearch = (
	types: string[],
	selectedFeatures: Feature<Polygon | Point>[],
	spatial: string[],
	categories: string[],
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
				providers,
				tags,
				currentPage,
				perPage
			),
	})
