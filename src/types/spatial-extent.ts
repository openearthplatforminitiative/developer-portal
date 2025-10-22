import { BBox, FeatureCollection, MultiPolygon, Polygon } from "geojson"

export type SpatialExtentType = "GLOBAL" | "REGION"

export type GlobalSpatialExtent = {
	id: string
	type: "GLOBAL"
	details?: string
	spatial_resolution?: string
	created_by: string
}

export type RegionSpatialExtent = {
	id: string
	type: "REGION"
	region?: string
	details?: string
	geometry: FeatureCollection<Polygon | MultiPolygon>
	bounding_box?: BBox
	simplified_geometry?: FeatureCollection<Polygon | MultiPolygon>
	spatial_resolution?: string
	created_by: string
}

export type SpatialExtent = GlobalSpatialExtent | RegionSpatialExtent
