"use client";
import { Close } from "@mui/icons-material";
import { useDraw } from "./DrawControl/DrawProvider";
import { useEffect } from "react";
import { useDataCatalog } from "./DataCatalogProvider";

export const DataCatalogMapAreas = () => {
  const { setFeatures, features, selectedFeatureId, setSelectedFeatureId, setTool } = useDraw()
  const { setFeatures: setFeatures2 } = useDataCatalog()

  useEffect(() => {
    setFeatures2(features)
  }, [features, setFeatures2])

  useEffect(() => {
    features.forEach(feature => {
      console.log(feature.geometry.coordinates)
    }
    )
  }, [features])

  const handleDelete = (id: string | number | undefined) => {
    setTool('select')
    setSelectedFeatureId(undefined)
    setFeatures(features.filter(feature => feature.id !== id))
  }

  const handleSelect = (id: string | number | undefined) => {
    if (selectedFeatureId === id) {
      setSelectedFeatureId(undefined)
    } else {
      setSelectedFeatureId(undefined)
      setTool('select')
      setSelectedFeatureId(id)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2 w-full">
      {features.length > 0 && <span>GeoFeatures</span>}
      {features.map((feature, index) => (
        <div
          className={`flex cursor-pointer hover:bg-neutral-95 gap-2 items-center rounded-xl border px-4 py-2 ${selectedFeatureId === feature.id ? 'bg-neutral-90' : ''}`}
          key={feature.id}
          onClick={() => handleSelect(feature.id)}
        >
          <h3>{feature.geometry.type} {index + 1}</h3>
          <button onClick={(e) => {
            e.stopPropagation();
            handleDelete(feature.id);
          }}>
            <Close />
          </button>
        </div>
      ))}
    </div>
  )
}