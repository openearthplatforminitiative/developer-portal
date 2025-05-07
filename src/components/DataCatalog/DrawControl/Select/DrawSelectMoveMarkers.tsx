import { Marker, MarkerDragEvent, MarkerEvent } from "react-map-gl/maplibre";
import { useDraw } from "../DrawProvider";

type DrawSelectMoveMarkersProps = {
  coords: [number, number] | [number, number][] | undefined;
  onDrag: (event: MarkerDragEvent, index: number) => void;
  onEndDrag: (event: MarkerDragEvent) => void;
  onClick: (e: MarkerEvent<MouseEvent>, index: number) => void;
}

export const DrawSelectMoveMarkers = ({ coords, onDrag, onEndDrag, onClick }: DrawSelectMoveMarkersProps) => {
  const { selectedFeature } = useDraw()
  if (!selectedFeature || !coords) return null
  if (selectedFeature.geometry.type === 'Point') {
    return <Marker
      key={selectedFeature.id}
      longitude={coords[0] as number}
      latitude={coords[1] as number}
      draggable
      onDrag={(event) => onDrag(event, 0)}
      onDragEnd={onEndDrag}
    >
      <div className="size-6 rounded-full bg-primary-80 border-4 border-neutral-100" />
    </Marker>
  } else if (selectedFeature.geometry.type === 'Polygon') {
    return (coords as [number, number][]).map((coord: number[], index: number) => {
      if (index === 0) return null
      return <Marker
        key={index}
        longitude={coord[0]}
        latitude={coord[1]}
        draggable
        onDrag={(event) => onDrag(event, index)}
        onDragEnd={onEndDrag}
        onClick={(e) => onClick(e, index)}

      >
        <div className="size-6 rounded-full bg-primary-80 border-4 border-neutral-100" />
      </Marker>
    }
    )
  }
}