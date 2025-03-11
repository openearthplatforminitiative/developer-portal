"use client"

import EventEmitter from 'events';
import { GeoJSONFeature } from 'maplibre-gl';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';
import { MapProvider } from 'react-map-gl/maplibre';
import { DrawProvider } from './DrawControl/DrawProvider';

interface DataCatalogContextType {
  areas: GeoJSONFeature[];
  setAreas: (areas: GeoJSONFeature[]) => void;
  selectedAreaId: string | number | undefined;
  setSelectedAreaId: (id: string | number | undefined) => void;
  eventEmitter: EventEmitter;
}

const DataCatalogContext = createContext<DataCatalogContextType | undefined>(
  undefined
);

export const DataCatalogProvider = ({ children }: { children: ReactNode }) => {
  const [areas, setAreas] = useState<GeoJSONFeature[]>([]);
  const [selectedAreaId, setSelectedAreaId] = useState<string | number | undefined>()
  const eventEmitter = new EventEmitter()

  return (
    <DataCatalogContext.Provider
      value={{
        eventEmitter,
        areas,
        setAreas,
        selectedAreaId,
        setSelectedAreaId
      }}
    >
      <MapProvider>
        <DrawProvider>
          {children}
        </DrawProvider>
      </MapProvider>
    </DataCatalogContext.Provider>
  );
};

export const useDataCatalog = () => {
  const context = useContext(DataCatalogContext);
  if (context === undefined) {
    throw new Error('useSitesMap must be used within a SitesMapProvider');
  }
  return context;
};
