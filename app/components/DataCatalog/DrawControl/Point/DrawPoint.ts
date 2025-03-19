"use client"

import { LngLat, MapMouseEvent } from "maplibre-gl"
import { useEffect } from "react"
import { useMap } from "react-map-gl/maplibre"
import { useDraw } from "../DrawProvider"

const DrawNewPoint = (id: string, coordinates: LngLat): GeoJSON.Feature<GeoJSON.Point> => {
  return ({
    type: 'Feature',
    id: id,
    geometry: {
      type: 'Point',
      coordinates: [coordinates.lng, coordinates.lat]
    },
    properties: {
      id: id
    }
  })
}


export const DrawPoint = () => {
  const {generateFeatureId, features, setFeatures, tool} = useDraw()
  const map = useMap()

  const handleClick = (event: MapMouseEvent & Object) => {
    const {
      lngLat
    } = event;
    if (tool == 'point') {
      const newPoint = DrawNewPoint(generateFeatureId(), lngLat)
      setFeatures([...features, newPoint])
    }
  }

  useEffect(() => {
    map.current?.on('click', handleClick)
    return () => {
      map.current?.off('click', handleClick)
    }
  }, [map, setFeatures, features, tool])
}