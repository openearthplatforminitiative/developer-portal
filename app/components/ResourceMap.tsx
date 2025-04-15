"use client"

import { Layer, Map, Source, StyleSpecification } from "react-map-gl/maplibre"
import "maplibre-gl/dist/maplibre-gl.css"
import { Polygon, Feature } from "geojson"

type LocationOption = {
	geometry: Feature<Polygon>[]
}

export const ResourceMap = ({ geometry }: LocationOption) => {
	return (
		<Map
			attributionControl={false}
			mapStyle={mapStyle}
			renderWorldCopies={false}
			pitchWithRotate={false}
			dragRotate={false}
			dragPan={false}
			scrollZoom={false}
			doubleClickZoom={false}
			latitude={0}
			longitude={0}
			zoom={-10}
			cursor="default"
		>
			<Source
				id="polygon-source"
				type="geojson"
				data={{
					type: "FeatureCollection",
					features: geometry,
				}}
			>
				<Layer
					id="polygon"
					type="fill"
					source="polygon-source"
					paint={{
						"fill-color": "#3EA26D",
						"fill-opacity": 0.5,
					}}
				/>
			</Source>
		</Map>
	)
}

const mapStyle: StyleSpecification = {
	version: 8,
	sources: {
		ne2_shaded: {
			maxzoom: 6,
			tileSize: 256,
			tiles: [
				"https://tiles.openfreemap.org/natural_earth/ne2sr/{z}/{x}/{y}.png",
			],
			type: "raster",
		},
		openmaptiles: {
			type: "vector",
			url: "https://tiles.openfreemap.org/planet",
		},
	},
	sprite: "https://tiles.openfreemap.org/sprites/ofm_f384/ofm",
	glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
	layers: [
		{
			id: "background",
			type: "background",
			paint: {
				"background-color": "#F5FFF4",
			},
		},
		{
			id: "water",
			type: "fill",
			source: "openmaptiles",
			"source-layer": "water",
			filter: ["!=", ["get", "brunnel"], "tunnel"],
			paint: { "fill-color": "#A3CDDB" },
		},
	],
}
