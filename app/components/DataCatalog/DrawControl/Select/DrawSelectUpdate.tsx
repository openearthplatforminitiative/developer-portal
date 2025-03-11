import { useEffect, useMemo, useRef, useState } from "react"
import { useDraw } from "../DrawProvider"
import { MapRef, Marker, MarkerEvent, useMap } from "react-map-gl/maplibre"
import { Feature, Polygon } from "geojson"
import { Point, LngLat, MapMouseEvent } from "maplibre-gl"

function movePolygon(geoJsonFeature: Feature<Polygon>, currentLngLat: LngLat, prevLngLat: LngLat, map: MapRef) {
  let deltaX = currentLngLat.lng - prevLngLat.lng;
  let deltaY = currentLngLat.lat - prevLngLat.lat;

  let minLat = 90
  let maxLat = -90
  let minLng = 180
  let maxLng = -180

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
    return [newLng, newLngLat.lat];
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

  useEffect(() => {
    if (featureToUpdate?.geometry.type === 'Point') return;

    const startDragging = (event: MapMouseEvent & Object) => {
      console.log('event.target', event.target);
      console.log('event.', event.originalEvent)
      if (event.originalEvent.target.tagName !== 'CANVAS') return;
      const clickedFeatures = map.current?.queryRenderedFeatures(event.point, {
        layers: ['polygon'],
      });
      console.log('clickedFeatures', clickedFeatures);
      if (clickedFeatures?.some(feature => feature.id === selectedFeatureId)) {
        event.preventDefault();
        // console.log('set isDragging to true');
        setPrevDragLngLat(event.lngLat);
        setIsDragging(true);
      }
    };

    const handleDrag = (event: MapMouseEvent & Object) => {
      console.log('isDragging', isDragging);
      if (!isDragging) return;
      if (!prevDragLngLat) { setPrevDragLngLat(event.lngLat) }
      const newCoords = movePolygon(featureToUpdate as Feature<Polygon>, event.lngLat, prevDragLngLat as LngLat, map.current as MapRef);
      setPrevDragLngLat(event.lngLat);
      setCoords(newCoords);
    };

    const endDragging = () => {
      console.log('end dragging');
      setIsDragging(false);
      setPrevDragLngLat(undefined);
    };

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
              const newFeature: Feature<Point> = {
                ...feature,
                geometry: {
                  ...feature.geometry,
                  coordinates: coords as [number, number]
                }
              }
              return newFeature
            } else {
              const newFeature: Feature<Polygon> = {
                ...feature,
                geometry: {
                  ...feature.geometry,
                  coordinates: [coords] as [number, number][][]
                }
              }
              return newFeature
            }
          }
          return feature
        })
      )
    }
  }, [coords, setFeatures, selectedFeatureId])

  const handleDoubleClick = (event: MarkerEvent<MouseEvent>, index: number) => {
    // check if double click
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
        // delete index and last index, and duplicate second index
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


  const moveMarkers = useMemo(() => {
    if (!featureToUpdate || !coords) return []
    if (featureToUpdate.geometry.type === 'Point') {
      return <Marker
        key={featureToUpdate.id}
        longitude={coords[0] as number}
        latitude={coords[1] as number}
        draggable
        onDrag={(event) => {
          setCoords([event.lngLat.lng, event.lngLat.lat])
        }}
      >
        <div className="size-6 rounded-full bg-primary-80 border-4 border-neutral-100" />
      </Marker>
    }
    return featureToUpdate.geometry.coordinates[0].map((coord: number[], index: number) => {
      if (index === 0) return null
      return <Marker
        key={index}
        longitude={coord[0]}
        latitude={coord[1]}
        draggable
        onDrag={(event) => {
          const newCoords = [...(coords as [number, number][])]
          newCoords[index] = [event.lngLat.lng, event.lngLat.lat]
          if (index === coords.length - 1) {
            newCoords[0] = [event.lngLat.lng, event.lngLat.lat]
          }
          setCoords(newCoords)
        }}
        onClick={(e) => handleDoubleClick(e, index)}

      >
        <div className="size-6 rounded-full bg-primary-80 border-4 border-neutral-100" />
      </Marker>
    }
    )
  }, [featureToUpdate, coords])

  const handleAddMarkerClick = (e: MarkerEvent<MouseEvent>, coordinate: [number, number], index: number) => {
    setCoords((prevCoords) => {
      const newCoords = prevCoords ? [...prevCoords] : []
      newCoords.splice(index, 0, [coordinate[0], coordinate[1]])
      return newCoords
    })
  }

  const addMarkers = useMemo(() => {
    if (!featureToUpdate || !coords) return null
    if (featureToUpdate.geometry.type === 'Point') return null
    return coords.map((coord, index: number) => {
      if (index === 0) return null
      const previousCoord = coords[index - 1] as [number, number]
      const markerCoord = [(coord[0] + previousCoord[0]) / 2, (coord[1] + previousCoord[1]) / 2] as [number, number]
      return <Marker
        key={index}
        longitude={markerCoord[0]}
        latitude={markerCoord[1]}
        onClick={(e) => handleAddMarkerClick(e, markerCoord, index)}
      >
        <div className="size-3 rounded-full bg-primary-80 border-4 border-neutral-100" />
      </Marker>
    })
  }, [featureToUpdate, coords])

  return (
    <>
      {moveMarkers}
      {addMarkers}
    </>
  )
}