import { useMemo } from "react";
import { Layer, Source } from "react-map-gl/maplibre";
import { useDraw } from "../DrawProvider";

export const DrawPointSource = () => {

  const { features } = useDraw()
  const featureCollection = useMemo((): GeoJSON.GeoJSON => ({
    type: 'FeatureCollection',
    features: features.filter(feature => feature.geometry.type === 'Point'),
  }), [features])

  return (
    <Source type="geojson" promoteId='id' data={featureCollection}>
      <Layer
        id="point"
        type="circle"
        paint={{
          "circle-radius": 5,
          "circle-color": "#77DAA0",
          "circle-stroke-width": 1,
          "circle-stroke-color": "#FFFFFF"
        }}
      />
    </Source>
  )
}