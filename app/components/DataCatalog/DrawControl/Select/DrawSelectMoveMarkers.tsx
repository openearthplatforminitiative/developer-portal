import { Marker, MarkerDragEvent, MarkerEvent } from "react-map-gl/maplibre";

type DrawSelectMoveMarkersProps = {
  featureToUpdate: GeoJSON.Feature<GeoJSON.Geometry> | undefined;
  coords: [number, number] | [number, number][] | undefined;
  onDrag: (event: MarkerDragEvent, index: number) => void;
  onClick: (e: MarkerEvent<MouseEvent>, index: number) => void;
}

export const DrawSelectMoveMarkers = ({ featureToUpdate, coords, onDrag, onClick }: DrawSelectMoveMarkersProps) => {
  if (!featureToUpdate || !coords) return null
  if (!featureToUpdate || !coords) return []
  if (featureToUpdate.geometry.type === 'Point') {
    return <Marker
      key={featureToUpdate.id}
      longitude={coords[0] as number}
      latitude={coords[1] as number}
      draggable
      onDrag={(event) => onDrag}
    >
      <div className="size-6 rounded-full bg-primary-80 border-4 border-neutral-100" />
    </Marker>
  } else if (featureToUpdate.geometry.type === 'Polygon') {
    return featureToUpdate.geometry.coordinates[0].map((coord: number[], index: number) => {
      if (index === 0) return null
      return <Marker
        key={index}
        longitude={coord[0]}
        latitude={coord[1]}
        draggable
        onDrag={(event) => onDrag(event, index)}
        onClick={(e) => onClick(e, index)}

      >
        <div className="size-6 rounded-full bg-primary-80 border-4 border-neutral-100" />
      </Marker>
    }
    )
  }
}