"use client"

import { useState } from "react"
import { DataCatalogList } from "./DataCatalogList"
import { DataCatalogMap } from "./DataCatalogMap"
import { DataCatalogMapAreas } from "./DataCatalogMapAreas"
import { DataCatalogProvider } from "./DataCatalogProvider"
import { DataCatalogSearch } from "./DataCatalogSearch"
import { ChevronLeft, MapOutlined } from "@mui/icons-material"
import { DataCatalogFilters } from "./DataCatalogFilters"
import { Tooltip } from "@mui/material"

export const DataCatalog = () => {
  const [showMap, setShowMap] = useState(false)

  return (
    <DataCatalogProvider>
      <div className="w-full flex flex-col gap-4 mt-16">
        <DataCatalogFilters />
        <DataCatalogMapAreas />
        <div className="max-h-[700px] w-full flex gap-10 justify-stretch">
          <div className={`relative transition-all ${showMap ? 'w-full h-[700px]' : 'w-0'}`}>
            <DataCatalogMap />
            <div className="absolute -right-5 top-0 h-full flex justify-center items-center pointer-events-none">
              <Tooltip title="Toggle map">
                <button className="cursor-pointer size-10 rounded-full bg-neutral-95 hover:bg-neutral-90 shadow pointer-events-auto" onClick={() => setShowMap(!showMap)}>{showMap ? <ChevronLeft /> : <MapOutlined />}</button>
              </Tooltip>
            </div>
          </div>
          <div className="gap-5 flex flex-col overflow-y-scroll min-w-96 grow">
            <DataCatalogSearch />
            <DataCatalogList />
          </div>
        </div>
      </div>
    </DataCatalogProvider>
  )
}