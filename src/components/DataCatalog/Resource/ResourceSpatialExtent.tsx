import { ResourceMap } from "@/components/DataCatalog/Resource/ResourceMap";
import { Resource } from "@/types/resource";
import { Typography } from "@mui/material";
import { FeatureCollection, Polygon } from "geojson";

type ResourceSpatialExtentProps = {
  resource: Resource
}

export const ResourceSpatialExtent = ({ resource }: ResourceSpatialExtentProps) => {
  if (!resource.spatial_extent || resource.spatial_extent.length === 0) {
    return null
  }

  const GlobalExtentGeometry: FeatureCollection<Polygon> = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [180, 90],
              [180, -90],
              [-180, -90],
              [-180, 90],
              [180, 90],
            ],
          ],
        },
        properties: {},
      },
    ],
  }

  return (
    <div id="spatial-extent" className="flex flex-col mt-28">
      <Typography variant="h2">
        Spatial Extent
      </Typography>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {resource.spatial_extent.map((spatialExtent, index) => (
          <div
            key={spatialExtent.id}
            className="flex flex-col bg-card h-full w-full shadow-none rounded-xl overflow-hidden"
          >
            <div className="w-full aspect-square shrink">
              {spatialExtent.type === "REGION" ? (
                <ResourceMap
                  id={`resource-map-${index}`}
                  geometry={spatialExtent.geometry}
                />
              ) : (
                <ResourceMap
                  id={`resource-map-${index}`}
                  geometry={GlobalExtentGeometry}
                />
              )}
            </div>
            <div className="flex grow flex-col p-6 gap-3">
              <Typography variant="h5" className="text-xl xs:text-2xl">
                {spatialExtent.type === "REGION"
                  ? spatialExtent.region
                  : "Global"}
              </Typography>
              {spatialExtent.details && (
                <Typography
                  variant="body1"
                  className="text-sm xs:text-base"
                >
                  {spatialExtent.details}
                </Typography>
              )}
              {spatialExtent.spatial_resolution && (
                <>
                  <Typography
                    variant="body2"
                    className="text-sm xs:text-base"
                  >
                    Spatial Resolution
                  </Typography>
                  <Typography
                    variant="body1"
                    className="text-sm xs:text-base"
                  >
                    {spatialExtent.spatial_resolution}
                  </Typography>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}