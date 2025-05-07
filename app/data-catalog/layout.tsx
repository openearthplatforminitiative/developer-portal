"use client"

import { ReactNode } from "react";
import { MapProvider } from "react-map-gl/maplibre";
import { DataCatalogProvider } from "../components/DataCatalog/DataCatalogProvider";
import { DrawProvider } from "../components/DataCatalog/DrawControl/DrawProvider";

const Layout = ({ children }: { children: ReactNode }) => (
  <MapProvider>
    <DrawProvider>
      <DataCatalogProvider>
        {children}
      </DataCatalogProvider>
    </DrawProvider>
  </MapProvider>
)

export default Layout