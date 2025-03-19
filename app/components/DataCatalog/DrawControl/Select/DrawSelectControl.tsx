import { MapMouseEvent, useMap } from "react-map-gl/maplibre"
import { useDraw } from "../DrawProvider"
import { useCallback, useEffect } from "react"
import { DrawSelectUpdate } from "./DrawSelectUpdate"

export const DrawSelectControl = () => {
  const { features, tool, selectedFeatureId, setSelectedFeatureId } = useDraw()

  const map = useMap()

  const handleClick = useCallback((event: MapMouseEvent & Object) => {
    if (tool !== 'select') return
    if ((event.originalEvent.target as HTMLElement).tagName !== 'CANVAS') return;
    const clickedFeatures = map.current?.queryRenderedFeatures(event.point, {
      layers: ['polygon', 'point'],
    });
    if (clickedFeatures?.length ?? 0 > 0) {
      setSelectedFeatureId(clickedFeatures![0].id)
    } else {
      setSelectedFeatureId(undefined)
    }
  }, [map, setSelectedFeatureId, tool])

  useEffect(() => {
    if (tool !== 'select' && selectedFeatureId) {
      setSelectedFeatureId(undefined)
    }
  }, [selectedFeatureId, setSelectedFeatureId, tool])

  useEffect(() => {
    const mapRef = map.current
    mapRef?.on('click', handleClick)
    return () => {
      mapRef?.off('click', handleClick)
    }
  }, [map, tool, features, selectedFeatureId, handleClick])

  return (
    <DrawSelectUpdate />
  )
}