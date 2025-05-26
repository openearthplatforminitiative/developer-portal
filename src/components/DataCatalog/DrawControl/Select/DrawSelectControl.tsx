import { MapMouseEvent, useMap } from "react-map-gl/maplibre"
import { useCallback, useEffect } from "react"
import { DrawSelectUpdate } from "./DrawSelectUpdate"
import { DrawSelectSource } from "./DrawSelectSource"
import { useDraw } from "../DrawProvider"

export const DrawSelectControl = () => {
	const { features, tool, selectedFeature, setSelectedFeature } = useDraw()

	const map = useMap()

	const handleClick = useCallback(
		(event: MapMouseEvent & Object) => {
			if (tool !== "select") return
			if ((event.originalEvent.target as HTMLElement).tagName !== "CANVAS")
				return
			const clickedFeatures = map.current?.queryRenderedFeatures(event.point, {
				layers: ["polygon", "point"],
			})
			if (clickedFeatures && (clickedFeatures.length ?? 0) > 0) {
				setSelectedFeature(
					features.find((feature) => feature.id === clickedFeatures[0].id)
				)
			} else {
				setSelectedFeature(undefined)
			}
		},
		[tool, map, setSelectedFeature, features]
	)

	useEffect(() => {
		if (tool !== "select" && selectedFeature) {
			setSelectedFeature(undefined)
		}
	}, [tool, selectedFeature, setSelectedFeature])

	useEffect(() => {
		const mapRef = map.current
		mapRef?.on("click", handleClick)
		return () => {
			mapRef?.off("click", handleClick)
		}
	}, [map, tool, features, selectedFeature, handleClick])

	return (
		<>
			<DrawSelectUpdate />
			<DrawSelectSource />
		</>
	)
}
