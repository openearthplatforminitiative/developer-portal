"use client"

import { LngLat, MapMouseEvent } from "maplibre-gl"
import { useCallback, useEffect } from "react"
import { useMap } from "react-map-gl/maplibre"
import { useDraw } from "../DrawProvider"
import { Feature, Point } from "geojson"

const DrawNewPoint = (id: string, coordinates: LngLat): Feature<Point> => {
	return {
		type: "Feature",
		id: id,
		geometry: {
			type: "Point",
			coordinates: [coordinates.lng, coordinates.lat],
		},
		properties: {
			id: id,
			selected: true,
		},
	}
}

export const DrawPoint = () => {
	const { generateFeatureId, features, setFeatures, tool } = useDraw()
	const map = useMap()

	const handleClick = useCallback(
		(event: MapMouseEvent & Object) => {
			const { lngLat } = event
			if (tool == "point") {
				const newPoint = DrawNewPoint(generateFeatureId(), lngLat)
				setFeatures([...features, newPoint])
			}
		},
		[features, setFeatures, tool, generateFeatureId]
	)

	useEffect(() => {
		const mapRef = map.current
		mapRef?.on("click", handleClick)
		return () => {
			mapRef?.off("click", handleClick)
		}
	}, [map, setFeatures, features, tool, handleClick])
}
