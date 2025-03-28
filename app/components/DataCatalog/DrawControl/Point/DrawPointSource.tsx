import { useMemo } from "react"
import { Layer, Source } from "react-map-gl/maplibre"
import { useDraw } from "../DrawProvider"
import { GeoJSON } from "geojson"

export const DrawPointSource = () => {
	const { features, selectedFeature } = useDraw()
	const featureCollection = useMemo(
		(): GeoJSON => ({
			type: "FeatureCollection",
			features: features.filter(
				(feature) =>
					feature.geometry.type === "Point" &&
					feature.id !== selectedFeature?.id
			),
		}),
		[features, selectedFeature]
	)

	return (
		<Source type="geojson" promoteId="id" data={featureCollection}>
			<Layer
				id="point"
				type="circle"
				paint={{
					"circle-radius": 5,
					"circle-color": "#77DAA0",
					"circle-stroke-width": 1,
					"circle-stroke-color": "#FFFFFF",
				}}
			/>
		</Source>
	)
}
