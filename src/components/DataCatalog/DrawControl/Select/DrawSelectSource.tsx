import { useMemo } from "react"
import { Layer, Source } from "react-map-gl/maplibre"
import { useDraw } from "../DrawProvider"

export const DrawSelectSource = () => {
	const { selectedFeature } = useDraw()

	const featureCollection = useMemo((): GeoJSON.FeatureCollection => {
		return {
			type: "FeatureCollection",
			features: selectedFeature ? [selectedFeature] : [],
		}
	}, [selectedFeature])

	if (!selectedFeature) return null

	return (
		<Source promoteId="id" type="geojson" data={featureCollection}>
			<Layer
				id="selected-point"
				type="circle"
				paint={{
					"circle-radius": 5,
					"circle-color": "#A3CDDB",
					"circle-stroke-width": 1,
					"circle-stroke-color": "#FFFFFF",
				}}
			/>
			<Layer
				id="selected-polygon"
				type="fill"
				paint={{
					"fill-color": "#A3CDDB",
					"fill-opacity": [
						"case",
						["boolean", ["feature-state", "hover"], false],
						1,
						0.7,
					],
				}}
			/>
			<Layer
				id="selected-polygon-outline"
				type="line"
				paint={{
					"line-color": "#A3CDDB",
					"line-width": [
						"case",
						["boolean", ["feature-state", "hover"], false],
						10,
						2,
					],
				}}
			/>
		</Source>
	)
}
