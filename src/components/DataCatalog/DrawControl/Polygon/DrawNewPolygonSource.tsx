import { useMemo } from "react";
import { Layer, Source } from "react-map-gl/maplibre";
import { useDrawPolygon } from "./DrawPolygonProvider";

export const DrawNewPolygonSource = () => {

  const { newPolygon } = useDrawPolygon()
  const featureCollection = useMemo((): GeoJSON.GeoJSON | undefined => newPolygon ? ({
    type: 'FeatureCollection',
    features: [newPolygon]
  }) : undefined, [newPolygon])

  const firstPoint = useMemo((): GeoJSON.GeoJSON | undefined => newPolygon ? ({
    type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: newPolygon.geometry.coordinates[0][0]
      },
      properties: {}
    }]
  }) : undefined, [newPolygon])

  if (!featureCollection || !firstPoint) {
    return null
  }
  return (
    <>
      <Source type="geojson" data={featureCollection}>
        <Layer
          id="draw-polygon"
          type="fill"
          paint={{
            "fill-color": "#77DAA0",
            "fill-opacity": 0.7,
          }}
        />
        <Layer
          id="draw-polygon-outline"
          type="line"
          paint={{
            "line-color": "#77DAA0",
            "line-width": 2
          }}
        />
        <Layer
          id="draw-polygon-draggable"
          type="circle"
          paint={{
            "circle-radius": 5,
            "circle-color": "#77DAA0"
          }}
        />
      </Source>
      <Source type="geojson" data={firstPoint}>
        <Layer
          id="draw-polygon-first-point-outline"
          type="circle"
          paint={{
            "circle-radius": 7,
            "circle-color": "#FFFFFF"
          }}
        />
        <Layer
          id="draw-polygon-first-point"
          type="circle"
          paint={{
            "circle-radius": 5,
            "circle-color": "#77DAA0"
          }}
        />
        {/* outline white */}
      </Source>
    </>
  )
}