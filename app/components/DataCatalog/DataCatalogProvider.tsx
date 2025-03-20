"use client"

import EventEmitter from 'events';
import { Feature, Point, Polygon } from 'geojson';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { MapProvider } from 'react-map-gl/maplibre';
import { DrawProvider } from './DrawControl/DrawProvider';
import { fetchDataCatalog, ResourceTypes, SpatialTypes } from '@/app/data-catalog/DataCatalogActions';
import { Resource } from '@/app/data-catalog/DataCatalogTypes';

interface DataCatalogContextType {
  selectedAreaId: string | number | undefined;
  setSelectedAreaId: (id: string | number | undefined) => void;
  eventEmitter: EventEmitter;
  resources: Resource[];
  tags: string[];
  setTags: (tags: string[]) => void;
  types: ResourceTypes[];
  setTypes: (types: ResourceTypes[]) => void;
  features: Feature<Point | Polygon>[];
  setFeatures: (features: Feature<Point | Polygon>[]) => void;
  spatial: SpatialTypes[];
  setSpatial: (spatial: SpatialTypes[]) => void;
}

const DataCatalogContext = createContext<DataCatalogContextType | undefined>(
  undefined
);

export const DataCatalogProvider = ({ children }: { children: ReactNode }) => {
  const [resources, setResources] = useState<Resource[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [types, setTypes] = useState<ResourceTypes[]>([]);
  const [features, setFeatures] = useState<Feature<Point | Polygon>[]>([]);
  const [spatial, setSpatial] = useState<SpatialTypes[]>([]);
  const [selectedAreaId, setSelectedAreaId] = useState<string | number | undefined>()
  const eventEmitter = new EventEmitter()

  useEffect(() => {
    const updateResources = async () => {
      setResources(await fetchDataCatalog(types, features, spatial, tags));
    };
    updateResources()
  }, [types, features, spatial, tags])

  return (
    <DataCatalogContext.Provider
      value={{
        eventEmitter,
        selectedAreaId,
        setSelectedAreaId,
        resources,
        tags,
        setTags,
        types,
        setTypes,
        features,
        setFeatures,
        spatial,
        setSpatial,
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
