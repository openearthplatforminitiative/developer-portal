import { MapMouseEvent, useMap } from "react-map-gl/maplibre"
import { useDraw } from "../DrawProvider"
import { useEffect } from "react"
import { DrawSelectUpdate } from "./DrawSelectUpdate"

export const DrawSelectControl = () => {
  const { features, tool, selectedFeatureId, setSelectedFeatureId } = useDraw()

  const map = useMap()

  useEffect(() => {
    if (tool !== 'select' && selectedFeatureId) {
      setSelectedFeatureId(undefined)
    }
  }, [tool])

  useEffect(() => {
    const handleClick = (event: MapMouseEvent & Object) => {
      if (tool !== 'select') return
      if (event.originalEvent.target.tagName !== 'CANVAS') return;
      const clickedFeatures = map.current?.queryRenderedFeatures(event.point, {
        layers: ['polygon', 'point'],
      });
      if (clickedFeatures?.length ?? 0 > 0) {
        setSelectedFeatureId(clickedFeatures![0].id)
      } else {
        setSelectedFeatureId(undefined)
      }
    }
    map.current?.on('click', handleClick)
    return () => {
      map.current?.off('click', handleClick)
    }
  }, [map, tool, features, selectedFeatureId])

  return (
    <DrawSelectUpdate />
  )
}