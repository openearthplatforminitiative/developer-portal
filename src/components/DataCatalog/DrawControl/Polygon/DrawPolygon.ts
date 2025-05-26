import { LngLat, MapMouseEvent } from "maplibre-gl"
import { useCallback, useEffect } from "react"
import { useMap } from "react-map-gl/maplibre"
import { useDrawPolygon } from "./DrawPolygonProvider"
import { useDraw } from "../DrawProvider"

const DrawNewPolygon = (
	id: string,
	initialCoordinates: LngLat[]
): GeoJSON.Feature<GeoJSON.Polygon> => ({
	type: "Feature",
	id: id,
	geometry: {
		type: "Polygon",
		coordinates: [initialCoordinates.map(({ lng, lat }) => [lng, lat])],
	},
	properties: {
		id: id,
		selected: true,
	},
})

export const DrawPolygon = () => {
	const { generateFeatureId, tool, features, setFeatures, setTool } = useDraw()
	const { newPolygon, setNewPolygon } = useDrawPolygon()
	const map = useMap()

	const handleClick = useCallback(
		(event: MapMouseEvent & Object) => {
			if (tool !== "polygon") return
			const { lngLat } = event

			if (newPolygon) {
				const clickedFeatures = map.current?.queryRenderedFeatures(
					event.point,
					{
						layers: ["draw-polygon-first-point"],
					}
				)

				if (
					newPolygon.geometry.coordinates[0].length > 3 &&
					(clickedFeatures?.length ?? 0) > 0
				) {
					const updatedPolygon: GeoJSON.Feature<GeoJSON.Polygon> = {
						...newPolygon,
						geometry: {
							...newPolygon.geometry,
							coordinates: [
								[
									...(
										newPolygon.geometry.coordinates[0] as [number, number][]
									).slice(0, -1),
									newPolygon.geometry.coordinates[0][0] as [number, number],
								],
							],
						},
					}
					setNewPolygon(undefined)
					setFeatures([...features, updatedPolygon])
					setTool("select")
				} else {
					const updatedPolygon: GeoJSON.Feature<GeoJSON.Polygon> = {
						...newPolygon,
						geometry: {
							...newPolygon.geometry,
							coordinates: [
								[
									...(newPolygon.geometry.coordinates[0] as [number, number][]),
									[lngLat.lng, lngLat.lat],
								],
							],
						},
					}
					setNewPolygon(updatedPolygon)
				}
			} else {
				const initPolygon = DrawNewPolygon(generateFeatureId(), [lngLat])
				setNewPolygon(initPolygon)
			}
		},
		[
			tool,
			newPolygon,
			map,
			generateFeatureId,
			setNewPolygon,
			setFeatures,
			features,
			setTool,
		]
	)

	const handleHover = useCallback(
		(event: MapMouseEvent & Object) => {
			if (tool !== "polygon" || !newPolygon) return
			const { lngLat } = event
			const updatedCoordinates = [
				...(newPolygon.geometry.coordinates[0] as [number, number][]),
			]
			const hoveredFeatures = map.current?.queryRenderedFeatures(event.point, {
				layers: ["draw-polygon-first-point"],
			})

			if (updatedCoordinates.length === 1) {
				updatedCoordinates.push([lngLat.lng, lngLat.lat])
			} else {
				updatedCoordinates[updatedCoordinates.length - 1] = [
					lngLat.lng,
					lngLat.lat,
				]
			}

			if (map.current) {
				map.current.getCanvas().style.cursor =
					updatedCoordinates.length > 3 && (hoveredFeatures?.length ?? 0) > 0
						? "pointer"
						: "crosshair"
			}

			const updatedPolygon: GeoJSON.Feature<GeoJSON.Polygon> = {
				...newPolygon,
				geometry: { ...newPolygon.geometry, coordinates: [updatedCoordinates] },
			}
			setNewPolygon(updatedPolygon)
		},
		[tool, newPolygon, map, setNewPolygon]
	)

	const handleRightClick = useCallback(() => {
		if (tool !== "polygon" || !newPolygon) return
		const updatedCoordinates = [
			...(newPolygon.geometry.coordinates[0] as [number, number][]),
		]

		if (updatedCoordinates.length > 2) {
			updatedCoordinates.splice(-2, 1)
			const updatedPolygon: GeoJSON.Feature<GeoJSON.Polygon> = {
				...newPolygon,
				geometry: { ...newPolygon.geometry, coordinates: [updatedCoordinates] },
			}
			setNewPolygon(updatedPolygon)
		} else {
			setNewPolygon(undefined)
		}
	}, [tool, newPolygon, setNewPolygon])

	useEffect(() => {
		if (tool !== "polygon" && newPolygon) {
			setNewPolygon(undefined)
		}
	}, [tool, newPolygon, setNewPolygon])

	useEffect(() => {
		const mapRef = map.current
		mapRef?.on("click", handleClick)
		return () => {
			mapRef?.off("click", handleClick)
		}
	}, [map, handleClick])

	useEffect(() => {
		const mapRef = map.current
		mapRef?.on("mousemove", handleHover)
		return () => {
			mapRef?.off("mousemove", handleHover)
		}
	}, [map, handleHover])

	useEffect(() => {
		const mapRef = map.current
		mapRef?.on("contextmenu", handleRightClick)
		return () => {
			mapRef?.off("contextmenu", handleRightClick)
		}
	}, [map, handleRightClick])

	return null
}
