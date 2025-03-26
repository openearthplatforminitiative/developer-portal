import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useDraw } from "../DrawProvider"
import { MarkerDragEvent, MarkerEvent, useMap } from "react-map-gl/maplibre"
import { LngLat, MapMouseEvent } from "maplibre-gl"
import { DrawSelectAddMarkers } from "./DrawSelectAddMarkers"
import { DrawSelectMoveMarkers } from "./DrawSelectMoveMarkers"

function movePolygon(
  coords: [number, number][],
  currentLngLat: LngLat,
  prevLngLat: LngLat
) {
  let deltaX = currentLngLat.lng - prevLngLat.lng
  let deltaY = currentLngLat.lat - prevLngLat.lat

  let minLat = 90,
    maxLat = -90,
    minLng = 180,
    maxLng = -180

  coords.forEach((coord) => {
    if (coord[1] < minLat) minLat = coord[1]
    if (coord[1] > maxLat) maxLat = coord[1]
    if (coord[0] < minLng) minLng = coord[0]
    if (coord[0] > maxLng) maxLng = coord[0]
  })

  if (minLat + deltaY < -90) {
    deltaY = -90 - minLat
  } else if (maxLat + deltaY > 90) {
    deltaY = 90 - maxLat
  }

  if (minLng + deltaX < -180) {
    deltaX = -180 - minLng
  } else if (maxLng + deltaX > 180) {
    deltaX = 180 - maxLng
  }

  const coordinates = coords.map((coord) => {
    const newLngLat = new LngLat(coord[0] + deltaX, coord[1] + deltaY)
    let newLng = newLngLat.lng
    return [newLng, newLngLat.lat] as [number, number]
  })
  return coordinates
}

export const DrawSelectUpdate = () => {
  const { tool, features, setFeatures, selectedFeature, setSelectedFeature } =
    useDraw()
  const [isDragging, setIsDragging] = useState(false)
  const [prevDragLngLat, setPrevDragLngLat] = useState<LngLat | undefined>()

  const map = useMap()

  const doubleClickTimer = useRef<NodeJS.Timeout | null>(null)

  const updateCoords = useCallback(
    (newCoords: [number, number][] | [number, number]) => {
      if (!selectedFeature) return
      if (selectedFeature.geometry.type === "Point") {
        setSelectedFeature({
          ...selectedFeature,
          geometry: {
            ...selectedFeature.geometry,
            coordinates: newCoords as [number, number],
          },
        })
      } else if (selectedFeature.geometry.type === "Polygon") {
        setSelectedFeature({
          ...selectedFeature,
          geometry: {
            ...selectedFeature.geometry,
            coordinates: [newCoords as [number, number][]],
          }
        })
      }
    },
    [selectedFeature, setSelectedFeature]
  )

  const coords = useMemo(() => {
    if (!selectedFeature) return
    if (selectedFeature.geometry.type === "Point") {
      return selectedFeature.geometry.coordinates as [number, number]
    }
    return selectedFeature.geometry.coordinates[0] as [number, number][]
  }, [selectedFeature])

  const startDragging = (event: MapMouseEvent & Object) => {
    if (!selectedFeature || tool !== "select") return
    if ((event.originalEvent.target as HTMLElement).tagName !== "CANVAS") return
    const clickedFeatures = map.current?.queryRenderedFeatures(event.point, {
      layers: ["selected-polygon"],
    })
    if (
      clickedFeatures?.some((feature) => feature.id === selectedFeature?.id)
    ) {
      event.preventDefault()
      setPrevDragLngLat(event.lngLat)
      setIsDragging(true)
    }
  }

  const handleDrag = (event: MapMouseEvent & Object) => {
    if (!isDragging) return
    if (!prevDragLngLat) {
      return setPrevDragLngLat(event.lngLat)
    }
    const newCoords = movePolygon(
      coords as [number, number][],
      event.lngLat,
      prevDragLngLat
    )
    setPrevDragLngLat(event.lngLat)
    updateCoords(newCoords)
  }

  const endDragging = () => {
    setIsDragging(false)
    setPrevDragLngLat(undefined)
    if (!selectedFeature) return
    setFeatures(features.map((feature) => feature.id === selectedFeature?.id ? selectedFeature : feature))
  }

  useEffect(() => {
    if (selectedFeature?.geometry.type === "Point") return
    const mapRef = map.current
    mapRef?.on("mousedown", startDragging)
    mapRef?.on("mousemove", handleDrag)
    mapRef?.on("mouseup", endDragging)
    return () => {
      mapRef?.off("mousedown", startDragging)
      mapRef?.off("mousemove", handleDrag)
      mapRef?.off("mouseup", endDragging)
    }
  }, [map, selectedFeature, isDragging, prevDragLngLat])

  const handleDoubleClick = (event: MarkerEvent<MouseEvent>, index: number) => {
    if (!coords) return
    if (doubleClickTimer.current) {
      clearTimeout(doubleClickTimer.current)
      doubleClickTimer.current = null
      if (coords.length <= 4) {
        setFeatures(
          features.filter((feature) => feature.id !== selectedFeature?.id)
        )
        setSelectedFeature(undefined)
        return
      }
      if (index === 0 || index === coords.length - 1) {
        const newCoords = [...(coords as [number, number][])]
        newCoords.pop()
        newCoords.splice(0, 1)
        newCoords.push(newCoords[0])
        updateCoords(newCoords)
        return
      }
      const newCoords = [...(coords as [number, number][])]
      newCoords.splice(index, 1)
      updateCoords(newCoords)
    } else {
      doubleClickTimer.current = setTimeout(() => {
        doubleClickTimer.current = null
      }, 300)
    }
  }

  const handleMoveMarkerDrag = (event: MarkerDragEvent, index: number) => {
    if (selectedFeature?.geometry.type === "Point") {
      updateCoords([event.lngLat.lng, event.lngLat.lat])
    } else {
      const newCoords = [...(coords as [number, number][])]
      newCoords[index] = [event.lngLat.lng, event.lngLat.lat]
      if (index === (coords?.length ?? 0) - 1) {
        newCoords[0] = [event.lngLat.lng, event.lngLat.lat]
      }
      updateCoords(newCoords)
    }
  }

  const handleAddMarkerClick = (
    e: MarkerEvent<MouseEvent>,
    coordinate: [number, number],
    index: number
  ) => {
    const newCoords = coords ? [...coords] : []
    newCoords.splice(index, 0, [coordinate[0], coordinate[1]])
    updateCoords(newCoords as [number, number][])
  }

  if (!selectedFeature) return null
  else {
    return (
      <>
        <DrawSelectMoveMarkers
          onClick={handleDoubleClick}
          onDrag={handleMoveMarkerDrag}
          onEndDrag={endDragging}
          coords={coords}
        />
        <DrawSelectAddMarkers
          onClick={handleAddMarkerClick}
          coords={coords as [number, number][]}
          featureToUpdate={selectedFeature}
        />
      </>
    )
  }
}
