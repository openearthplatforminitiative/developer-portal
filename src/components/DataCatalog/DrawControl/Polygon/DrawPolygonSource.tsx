import { useMemo } from "react";
import { Layer, Source } from "react-map-gl/maplibre";
import { useDraw } from "../DrawProvider";

export const DrawPolygonSource = () => {

  const { features, selectedFeature } = useDraw()

  const featureCollection = useMemo((): GeoJSON.FeatureCollection => {
    return ({
      type: 'FeatureCollection',
      features: features.filter(feature => feature.geometry.type === 'Polygon' && feature.id !== selectedFeature?.id),
    })
  }, [features, selectedFeature])

  return (
    <Source promoteId='id' type="geojson" data={featureCollection}>
      <Layer
        id="polygon"
        type="fill"
        paint={{
          "fill-color": "#77DAA0",
          "fill-opacity": [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            1,
            0.7
          ]
        }}
      />
      <Layer
        id="polygon-outline"
        type="line"
        paint={{
          "line-color": "#77DAA0",
          "line-width": [
            'case',
            ['boolean', ['feature-state', 'hover'], false],
            10,
            2
          ]
        }}
      />
    </Source>
  )
}