import {
  Add,
  LocationSearching,
  Navigation,
  NavigationOutlined,
  Remove,
} from '@mui/icons-material';
import { GeolocateControl, useMap } from 'react-map-gl/maplibre';
import maplibregl, { LngLat, LngLatBounds } from 'maplibre-gl';
import { createRef, useState } from 'react';

export const DataCatalogMapNavigation = () => {
  const geoControlRef = createRef<maplibregl.GeolocateControl>();
  const [currentBearing, setCurrentBearing] = useState(0);
  const [currentPitch, setCurrentPitch] = useState(0);
  const [userHasMoved, setUserHasMoved] = useState(false);

  const map = useMap();

  const handleRotate = (bearing: number, pitch: number) => {
    setCurrentBearing(bearing);
    setCurrentPitch(pitch);
  };

  const handleCompassClick = () => {
    map.current?.resetNorthPitch();
  };

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
          <button className={buttonStyle} onClick={handleCompassClick}>
            <NavigationOutlined
              style={{
                transform: `rotateZ(${currentBearing}deg) rotateX(${currentPitch}deg)`,
                perspective: '100px',
              }}
            />
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
