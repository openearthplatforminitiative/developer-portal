import { Feature, Point, Polygon } from 'geojson'
import { DataCatalogDummyData } from './DataCatalogDummyData'
import { booleanContains } from '@turf/turf'

export type SpatialTypes = "Region" | "Global"
export type ResourceTypes = "API" | "Dataset" | "ML Model"

export const fetchDataCatalog = async (
  types: ResourceTypes[],
  features: Feature<Point | Polygon>[],
  spatial: SpatialTypes[],
  tags: string[]
) => {
  return DataCatalogDummyData.filter((resource) => {
    // Filter by types
    if (types.length > 0 && !types.includes(resource.type)) {
      return false;
    }
    // Filter by spatial type
    if (spatial.length > 0 && !spatial.some(spatialType => resource.spatialExtent?.some(extent => extent.type === spatialType))) {
      return false;
    }

    // Filter by features (spatial extent coverage check)
    const coversAllFeatures = features.every((feature) =>
      resource.spatialExtent?.some((extent) => {
        if (extent.type === "Global") return true;
        return booleanContains(extent.geometry, feature.geometry) // Check if extent contains feature
      })
    );
    if (!coversAllFeatures) {
      return false;
    }

    // Filter by tags
    const resourceText = [
      resource.title,
      resource.keywords?.join(" "),
      resource.abstract,
      resource.html_content,
      resource.providers?.map(provider => provider.name).join(" ")
    ].join(" ").toLowerCase();

    const matchesTags = tags.every(tag => resourceText.includes(tag.toLowerCase()));

    return matchesTags;
  });
};

export const fetchResource = async (id: string) => {
  return DataCatalogDummyData.find((resource) => resource.id === id);
}