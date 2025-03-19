import {
  Add,
  LocationSearching,
  Remove,
} from '@mui/icons-material';
import { GeolocateControl, useMap } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import { createRef } from 'react';

export const DataCatalogMapNavigation = () => {
  const geoControlRef = createRef<maplibregl.GeolocateControl>();

  const map = useMap();

  const handleZoomIn = () => {
    map.current?.zoomIn();
  };

  const handleZoomOut = () => {
    map.current?.zoomOut();
  };

  const buttonStyle =
    'bg-neutral-95 hover:bg-neutral-90 border border-[#e5e7eb] p-2 first:rounded-t-lg last:rounded-b-lg';

  return (
    <>
      <GeolocateControl ref={geoControlRef} style={{ display: 'none' }} />
      <div className="absolute top-0 right-0 m-4 flex flex-col gap-2">
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
      </div>
    </>
  );
};
