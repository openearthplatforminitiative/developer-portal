import { Marker, MarkerEvent } from "react-map-gl/maplibre"

type DrawSelectAddMarkersProps = {
	onClick: (
		e: MarkerEvent<MouseEvent>,
		coordinate: [number, number],
		index: number
	) => void
	coords: [number, number][]
	featureToUpdate: GeoJSON.Feature
}

export const DrawSelectAddMarkers = ({
	onClick,
	coords,
	featureToUpdate,
}: DrawSelectAddMarkersProps) => {
	if (!featureToUpdate || !coords) return null
	if (featureToUpdate.geometry.type === "Point") return null

	return coords.map((coord, index) => {
		coord = coord as [number, number]
		if (index === 0) return null
		const previousCoord = coords[index - 1] as [number, number]
		const markerCoord = [
			(coord[0] + previousCoord[0]) / 2,
			(coord[1] + previousCoord[1]) / 2,
		] as [number, number]
		return (
			<Marker
				key={index}
				longitude={markerCoord[0]}
				latitude={markerCoord[1]}
				onClick={(e) => onClick(e, markerCoord, index)}
			>
				<div className="size-3 rounded-full bg-primary-80 border-4 border-neutral-100" />
			</Marker>
		)
	})
}
