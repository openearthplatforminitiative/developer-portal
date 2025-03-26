import { useDataCatalog } from "./DataCatalogProvider"
import { FilterSelect, Option } from "../FilterSelect"
import { FilterSelectArea } from "../FilterSelectArea"
import { DummyCategories } from "@/app/data-catalog/DataCatalogDummyCategories"
import { useEffect, useMemo, useState } from "react"
import { Modal, useMediaQuery } from "@mui/material"
import {
  Close,
  Filter,
  FilterAltOutlined,
  Layers,
  LayersOutlined,
  Public,
} from "@mui/icons-material"

const resourceOptions: Option[] = [
  { label: "APIs", value: "API" },
  { label: "Datasets", value: "Dataset" },
  { label: "ML Models", value: "ML Model" },
]
const spatialOptions: Option[] = [
  { label: "Global Coverage", value: "Global" },
  { label: "Partial Coverage", value: "Region" },
  { label: "Non-Spatial", value: "Non" },
]
const categoryOptions: Option[] = DummyCategories.map((category) => ({
  label: category.name,
  value: category.id,
}))

const providerOptions: Option[] = [
  { label: "NASA", value: "NASA" },
  { label: "NOAA", value: "NOAA" },
  { label: "USGS", value: "USGS" },
  { label: "ESA", value: "ESA" },
  { label: "JAXA", value: "JAXA" },
  { label: "COPERNICUS", value: "COPERNICUS" },
  { label: "CIESIN", value: "CIESIN" },
  { label: "GEO", value: "GEO" },
  { label: "WMO", value: "WMO" },
  { label: "FAO", value: "FAO" },
  { label: "UNEP", value: "UNEP" },
]

export const DataCatalogFilters = () => {
  const [showFilters, setShowFilters] = useState(false)

  const lg = useMediaQuery("(min-width: 1024px)")

  useEffect(() => {
    if (!lg) {
      setShowFilters(false)
    }
  }, [lg])

  const {
    setShowMap,
    types,
    setTypes,
    spatial,
    setSpatial,
    categories,
    setCategories,
    providers,
    setProviders,
    features,
  } = useDataCatalog()

  const numberOfFilters = useMemo(() => {
    return (
      types.length +
      spatial.length +
      categories.length +
      providers.length +
      features.length
    )
  }, [types, spatial, categories, providers, features])

  const filters = (
    <>
      <div className="flex flex-col gap-1 flex-1">
        <span className="font-medium">Resource Types</span>
        <FilterSelect
          options={resourceOptions}
          selected={types}
          setSelected={setTypes}
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <span className="font-medium">Spatial Extent</span>
        <FilterSelect
          options={spatialOptions}
          selected={spatial}
          setSelected={setSpatial}
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <span className="font-medium">Categories</span>
        <FilterSelect
          options={categoryOptions}
          selected={categories}
          setSelected={setCategories}
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <span className="font-medium">Providers</span>
        <FilterSelect
          options={providerOptions}
          selected={providers}
          setSelected={setProviders}
        />
      </div>
      <div className="flex flex-col gap-1 flex-1">
        <span className="font-medium">Geometry</span>
        <FilterSelectArea />
      </div>
    </>
  )

  if (lg) {
    return (
      <div className="grid grid-cols-5 gap-2 text-base">
        {filters}
      </div>
    )
  } else {
    return (
      <>
        <div className="flex gap-2">
          <button
            onClick={() => setShowMap(true)}
            className="cursor-pointer bg-neutral-90 hover:bg-neutral-80 text-white rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <Public /> Show map
          </button>
          <button
            onClick={() => setShowFilters(true)}
            className="cursor-pointer bg-neutral-90 hover:bg-neutral-80 text-white rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <FilterAltOutlined /> Filters{" "}
            {numberOfFilters > 0 && (
              <span className="bg-neutral-95 flex justify-center items-center rounded-lg size-8">
                {numberOfFilters}
              </span>
            )}
          </button>
        </div>
        <Modal open={showFilters}>
          <div className="bg-neutral-99 h-full w-full p-4">
            <div className="w-full flex justify-end">
              <button
                onClick={() => setShowFilters(false)}
                className="cursor-pointer bg-neutral-90 hover:bg-neutral-80 size-10 rounded-lg flex items-center justify-center"
              >
                <Close />
              </button>
            </div>
            <div className="flex flex-col gap-2 text-base">{filters}</div>
          </div>
        </Modal>
      </>
    )
  }
}
