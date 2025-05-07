import { Add, Close, LocationSearching, Remove } from "@mui/icons-material"
import { GeolocateControl, useMap } from "react-map-gl/maplibre"
import maplibregl from "maplibre-gl"
import { createRef } from "react"
import { useDataCatalog } from "./DataCatalogProvider"
import { useMediaQuery } from "@mui/material"
import { motion } from "motion/react"

export const DataCatalogMapNavigation = () => {
	const geoControlRef = createRef<maplibregl.GeolocateControl>()
	const { setShowMap } = useDataCatalog()

	const isWeb = useMediaQuery("(min-width: 1024px)")

	const map = useMap()

	const handleZoomIn = () => {
		map.current?.zoomIn()
	}

	const handleZoomOut = () => {
		map.current?.zoomOut()
	}

	const buttonStyle =
		"cursor-pointer bg-neutral-95 hover:bg-neutral-90 border border-[#e5e7eb] p-2 first:rounded-t-lg last:rounded-b-lg"

	return (
		<>
			<GeolocateControl ref={geoControlRef} style={{ display: "none" }} />
			<motion.div
				layout="position"
				className="absolute top-0 right-0 m-4 flex flex-col gap-2"
			>
				{!isWeb && (
					<div className="flex flex-col shadow-md rounded-lg">
						<button onClick={() => setShowMap(false)} className={buttonStyle}>
							<Close />
						</button>
					</div>
				)}
				<div className="flex flex-col shadow-md rounded-lg">
					<button onClick={handleZoomIn} className={buttonStyle}>
						<Add />
					</button>
					<button onClick={handleZoomOut} className={buttonStyle}>
						<Remove />
					</button>
				</div>
				<div className="flex flex-col overflow-hidden rounded-lg shadow-md">
					<button
						onClick={() => geoControlRef.current?.trigger()}
						className={buttonStyle}
					>
						<LocationSearching />
					</button>
				</div>
			</motion.div>
		</>
	)
}
