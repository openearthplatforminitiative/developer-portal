import { LngLat, MapMouseEvent } from "maplibre-gl"
import { useEffect, useId } from "react"
import { useMap } from "react-map-gl/maplibre"
import { useDraw } from "../DrawProvider"
import { useDrawPolygon } from "./DrawPolygonProvider"
import { getAngleBetweenPoints } from "./DrawPolygonUtils"

const DrawNewPolygon = (id: string, initialCoordinates: LngLat[]): GeoJSON.Feature<GeoJSON.Polygon> => {
  return ({
    type: 'Feature',
    id: id,
    geometry: {
      type: 'Polygon',
      coordinates: [
        initialCoordinates.map((lngLat) => [lngLat.lng, lngLat.lat])
      ]
    },
    properties: {
      id: id
    }
  })
}


export const DrawPolygon = () => {
  const {generateFeatureId, tool, features, setFeatures, setTool} = useDraw()
  const { newPolygon, setNewPolygon } = useDrawPolygon()
  
  const map = useMap()

  useEffect(() => {
    if (tool !== 'polygon' && newPolygon) {
      setNewPolygon(undefined)
    }
  }, [tool])

  useEffect(() => {
    const handleClick = (event: MapMouseEvent & Object) => {
      const {
        lngLat
      } = event;
      if (tool == 'polygon') {
        if (newPolygon) {          
          const clickedFeatures = map.current?.queryRenderedFeatures(event.point, {
            layers: ['draw-polygon-first-point'],
          });
            if (newPolygon.geometry.coordinates[0].length > 3 && (clickedFeatures?.length ?? 0 > 0)) {
                const updatedNewPolygon: GeoJSON.Feature<GeoJSON.Polygon> = {
                ...newPolygon,
                geometry: {
                  ...newPolygon.geometry,
                  coordinates: [
                  [...(newPolygon.geometry.coordinates[0] as [number, number][]).slice(0, -1), [(newPolygon.geometry.coordinates[0][0] as [number, number])[0], (newPolygon.geometry.coordinates[0][0] as [number, number])[1]]]
                  ]
                }
                }
                setNewPolygon(undefined)
                setFeatures([...features, updatedNewPolygon])
                setTool('select')
            } else {
              const updatedNewPolygon: GeoJSON.Feature<GeoJSON.Polygon> = {
                ...newPolygon,
                geometry: {
                  ...newPolygon.geometry,
                  coordinates: [
                    [...(newPolygon.geometry.coordinates[0] as [number, number][]), [lngLat.lng, lngLat.lat]]
                  ]
                }
              }
              setNewPolygon(updatedNewPolygon) 
            }
        } else {
          const initNewPolygon = DrawNewPolygon(generateFeatureId(), [lngLat])
          setNewPolygon(initNewPolygon)
        }
      }
    }

    map.current?.on('click', handleClick)
    return () => {
      map.current?.off('click', handleClick)
    }
  }, [map, newPolygon, setFeatures, features, tool])

  useEffect(() => {
    const handleHover = (event: MapMouseEvent & Object) => {
      const {
        lngLat
      } = event;
      if (tool == 'polygon' && newPolygon) {
        const updatedCoordinates = [...(newPolygon.geometry.coordinates[0] as [number, number][])];
        const hoveredFeatures = map.current?.queryRenderedFeatures(event.point, {
          layers: ['draw-polygon-first-point'],
        });
        if (updatedCoordinates.length === 1) {
          updatedCoordinates.push([lngLat.lng, lngLat.lat]);
        } else {
          updatedCoordinates[updatedCoordinates.length - 1] = [lngLat.lng, lngLat.lat];
        }

        if (map.current) {
          if (updatedCoordinates.length > 3 && (hoveredFeatures?.length ?? 0) > 0) {
            map.current.getCanvas().style.cursor = 'pointer';
          } else {
            map.current.getCanvas().style.cursor = 'crosshair';
          }
        }
        
        const updatedNewPolygon: GeoJSON.Feature<GeoJSON.Polygon> = {
          ...newPolygon,
          geometry: {
        ...newPolygon.geometry,
        coordinates: [updatedCoordinates]
          }
        }
        setNewPolygon(updatedNewPolygon)
      }
    }
    
    map.current?.on('mousemove', handleHover)
    return () => {
      map.current?.off('mousemove', handleHover)
    }
  }, [map, newPolygon, setFeatures, features, tool])
  
  useEffect(() => {
    const handleRightClick = (event: MapMouseEvent & Object) => {
      if (tool == 'polygon' && newPolygon) {
        const updatedCoordinates = [...(newPolygon.geometry.coordinates[0] as [number, number][])];

        if (updatedCoordinates.length > 2) {
            updatedCoordinates.splice(-2, 1);
          const updatedNewPolygon: GeoJSON.Feature<GeoJSON.Polygon> = {
            ...newPolygon,
            geometry: {
              ...newPolygon.geometry,
              coordinates: [updatedCoordinates]
            }
          }
          setNewPolygon(updatedNewPolygon)
        } else {
          setNewPolygon(undefined)
        }
      }
    }
    map.current?.on('contextmenu', handleRightClick)
    return () => {
      map.current?.off('contextmenu', handleRightClick)
    }
  }, [map, newPolygon, setFeatures, features, tool])
}