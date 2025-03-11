"use client"

import { Map, MapProvider } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { DrawControl } from './DrawControl/DrawControl';
import { DrawProvider } from './DrawControl/DrawProvider';
import { DataCatalogMapNavigation } from './DataCatalogMapNavigation';

export const DataCatalogMap = () => {
  return (
    <Map
      attributionControl={false}
      mapStyle='https://tiles.openfreemap.org/styles/liberty'
      interactiveLayerIds={['polygon-source', 'polygon', 'polygon-outline', 'point']}
    >
      <DrawControl />
      <DataCatalogMapNavigation />
    </Map>
  )
}