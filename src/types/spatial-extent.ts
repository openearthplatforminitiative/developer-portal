import { FeatureCollection, Polygon } from "geojson"

export type GlobalSpatialExtent = {
	id: string
	type: "GLOBAL"
	details?: string
	spatial_resolution?: string
}

export type RegionSpatialExtent = {
	id: string
	type: "REGION"
	region: string
	details?: string
	geometry: FeatureCollection<Polygon>
	spatial_resolution?: string
}

export type SpatialExtent = GlobalSpatialExtent | RegionSpatialExtent
