"use client"

import { Map } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';
import { DrawControl } from './DrawControl/DrawControl';
import { DataCatalogMapNavigation } from './DataCatalogMapNavigation';
import { DataCatalogGeoSearch } from '../GeoAutoComplete';

export const DataCatalogMap = () => {
  return (
    <Map
      attributionControl={false}
      mapStyle='https://tiles.openfreemap.org/styles/liberty'
      interactiveLayerIds={['polygon-source', 'polygon', 'polygon-outline', 'point']}
      renderWorldCopies={false}
    >
      <DataCatalogGeoSearch />
      <DrawControl />
      <DataCatalogMapNavigation />
    </Map>
  )
}