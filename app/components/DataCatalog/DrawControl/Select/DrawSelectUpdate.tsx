import { useEffect, useMemo, useRef, useState } from "react"
import { useDraw } from "../DrawProvider"
import { MarkerDragEvent, MarkerEvent, useMap } from "react-map-gl/maplibre"
import { Feature, Polygon, Point } from "geojson"
import { LngLat, MapMouseEvent } from "maplibre-gl"
import { DrawSelectAddMarkers } from "./DrawSelectAddMarkers"
import { DrawSelectMoveMarkers } from "./DrawSelectMoveMarkers"

function movePolygon(geoJsonFeature: Feature<Polygon>, currentLngLat: LngLat, prevLngLat: LngLat) {
  let deltaX = currentLngLat.lng - prevLngLat.lng;
  let deltaY = currentLngLat.lat - prevLngLat.lat;

  let minLat = 90, maxLat = -90, minLng = 180, maxLng = -180

  geoJsonFeature.geometry.coordinates[0].forEach(coord => {
    if (coord[1] < minLat) minLat = coord[1];
    if (coord[1] > maxLat) maxLat = coord[1];
    if (coord[0] < minLng) minLng = coord[0];
    if (coord[0] > maxLng) maxLng = coord[0];
  });

  if (minLat + deltaY < -90) {
    deltaY = -90 - minLat;
  } else if (maxLat + deltaY > 90) {
    deltaY = 90 - maxLat;
  }

  if (minLng + deltaX < -180) {
    deltaX = -180 - minLng;
  } else if (maxLng + deltaX > 180) {
    deltaX = 180 - maxLng;
  }

  const coordinates = geoJsonFeature.geometry.coordinates[0].map(coord => {
    const newLngLat = new LngLat(coord[0] + deltaX, coord[1] + deltaY);
    let newLng = newLngLat.lng;
    return [newLng, newLngLat.lat] as [number, number];
  });
  return coordinates;
}

export const DrawSelectUpdate = () => {

  const { features, setFeatures, selectedFeatureId, setSelectedFeatureId } = useDraw()
  const [coords, setCoords] = useState<[number, number][] | [number, number]>()
  const [isDragging, setIsDragging] = useState(false)
  const [prevDragLngLat, setPrevDragLngLat] = useState<LngLat | undefined>()

  const map = useMap()

  const doubleClickTimer = useRef<NodeJS.Timeout | null>(null)

  const featureToUpdate = useMemo(() => {
    const feature = features.find(feature => feature.id === selectedFeatureId)
    if (!feature) return setCoords(undefined)
    if (feature.geometry.type === 'Point') {
      setCoords(feature.geometry.coordinates as [number, number])
    } else {
      setCoords(feature.geometry.coordinates[0] as [number, number][])
    }
    return feature
  }, [features, selectedFeatureId])

  const startDragging = (event: MapMouseEvent & Object) => {
    if ((event.originalEvent.target as HTMLElement).tagName !== 'CANVAS') return;
    const clickedFeatures = map.current?.queryRenderedFeatures(event.point, {
      layers: ['polygon'],
    });
    if (clickedFeatures?.some(feature => feature.id === selectedFeatureId)) {
      event.preventDefault();
      setPrevDragLngLat(event.lngLat);
      setIsDragging(true);
    }
  };

  const handleDrag = (event: MapMouseEvent & Object) => {
    if (!isDragging) return;
    if (!prevDragLngLat) { setPrevDragLngLat(event.lngLat) }
    const newCoords = movePolygon(featureToUpdate as Feature<Polygon>, event.lngLat, prevDragLngLat as LngLat);
    setPrevDragLngLat(event.lngLat);
    setCoords(newCoords);
  };

  const endDragging = () => {
    setIsDragging(false);
    setPrevDragLngLat(undefined);
  };

  useEffect(() => {
    if (featureToUpdate?.geometry.type === 'Point') return;
    map.current?.on('mousedown', startDragging);
    map.current?.on('mousemove', handleDrag);
    map.current?.on('mouseup', endDragging);
    return () => {
      map.current?.off('mousedown', startDragging);
      map.current?.off('mousemove', handleDrag);
      map.current?.off('mouseup', endDragging);
    };
  }, [map, featureToUpdate, isDragging, prevDragLngLat]);

  useEffect(() => {
    if (!coords) return
    if (coords) {
      setFeatures(
        features.map((feature) => {
          if (feature.id === selectedFeatureId) {
            if (feature.geometry.type === 'Point') {
              return {
                ...feature,
                geometry: {
                  ...feature.geometry,
                  coordinates: coords as [number, number]
                }
              } as Feature<Point>
            } else {
              return {
                ...feature,
                geometry: {
                  ...feature.geometry,
                  coordinates: [coords] as [number, number][][]
                }
              } as Feature<Polygon>
            }
          }
          return feature
        })
      )
    }
  }, [coords, setFeatures, selectedFeatureId])

  const handleDoubleClick = (event: MarkerEvent<MouseEvent>, index: number) => {
    if (doubleClickTimer.current) {
      clearTimeout(doubleClickTimer.current)
      doubleClickTimer.current = null
      if (!coords) return
      if (coords.length <= 4) {
        setFeatures(features.filter(feature => feature.id !== selectedFeatureId))
        setSelectedFeatureId(undefined)
        setCoords(undefined)
        return
      }
      if (index === 0 || index === coords.length - 1) {
        const newCoords = [...(coords as [number, number][])]
        newCoords.pop()
        newCoords.splice(0, 1)
        newCoords.push(newCoords[0])
        setCoords(newCoords)
        return
      }
      const newCoords = [...(coords as [number, number][])]
      newCoords.splice(index, 1)
      setCoords(newCoords)
    } else {
      doubleClickTimer.current = setTimeout(() => {
        doubleClickTimer.current = null
      }, 300)
    }
  }

  const handleMoveMarkerDrag = (event: MarkerDragEvent, index: number) => {
    if (featureToUpdate?.geometry.type === 'Point') {
      setCoords([event.lngLat.lng, event.lngLat.lat])
    } else {
      const newCoords = [...(coords as [number, number][])]
      newCoords[index] = [event.lngLat.lng, event.lngLat.lat]
      if (index === (coords?.length ?? 0) - 1) {
        newCoords[0] = [event.lngLat.lng, event.lngLat.lat]
      }
      setCoords(newCoords)
    }
  }

  const handleAddMarkerClick = (e: MarkerEvent<MouseEvent>, coordinate: [number, number], index: number) => {
    setCoords((prevCoords) => {
      prevCoords = prevCoords as [number, number][]
      const newCoords = prevCoords ? [...prevCoords] : []
      newCoords.splice(index, 0, [coordinate[0], coordinate[1]])
      return newCoords
    })
  }

  return (
    <>
      <DrawSelectMoveMarkers onClick={handleDoubleClick} onDrag={handleMoveMarkerDrag} coords={coords} featureToUpdate={featureToUpdate as Feature<Polygon>} />
      <DrawSelectAddMarkers onClick={handleAddMarkerClick} coords={coords as [number, number][]} featureToUpdate={featureToUpdate as Feature<Polygon>} />
    </>
  )
}