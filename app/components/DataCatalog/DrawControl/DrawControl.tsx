"use client"

import {
  Architecture,
  DeleteOutline,
  PanToolOutlined,
  PlaceOutlined,
  Polyline,
  PolylineOutlined,
} from "@mui/icons-material"
import { DrawTool, useDraw } from "./DrawProvider"
import { DrawPointSource } from "./Point/DrawPointSource"
import { DrawPoint } from "./Point/DrawPoint"
import { DrawPolygonControl } from "./Polygon/DrawPolygonControl"
import { DrawPolygonProvider } from "./Polygon/DrawPolygonProvider"
import { DrawSelectControl } from "./Select/DrawSelectControl"
import { useMap } from "react-map-gl/maplibre"
import { useEffect } from "react"

export const DrawControl = () => {
  const {
    tool,
    setTool,
    features,
    setFeatures,
    selectedFeature,
    setSelectedFeature
  } = useDraw()

  const map = useMap()

  const buttonStyle = (active?: boolean) => (
    "hover:bg-neutral-90 border border-[#e5e7eb] border-r-0 p-2 first:rounded-l-lg last:rounded-r-lg last:border-r cursor-pointer " +
    (active ? "bg-neutral-90" : "bg-neutral-95")
  )

  useEffect(() => {
    if (map.current) {
      switch (tool) {
        case "polygon":
          map.current.getCanvas().style.cursor = "crosshair"
          break
        case "point":
          map.current.getCanvas().style.cursor = "crosshair"
          break
        case "select":
          map.current.getCanvas().style.cursor = ""
          break
      }
    }
  }, [tool, map])

  DrawPoint()

  const handleToolChange = (tool: DrawTool) => {
    setTool(tool)
  }

  const handleDelete = () => {
    if (!selectedFeature) return
    setFeatures(features.filter((feature) => feature.id !== selectedFeature.id))
    setSelectedFeature(undefined)
  }

  return (
    <>
      <DrawPolygonProvider>
        <DrawPolygonControl />
      </DrawPolygonProvider>
      <DrawSelectControl />
      <DrawPointSource />
      <div className="absolute bottom-0 p-4 w-full flex justify-center gap-2 pointer-events-none">
        <div className="w-min flex flex-row shadow-md rounded-lg pointer-events-auto">
          <button
            className={buttonStyle(tool == "select")}
            onClick={() => handleToolChange("select")}
          >
            <PanToolOutlined />
          </button>
          <button
            className={buttonStyle(tool == "polygon")}
            onClick={() => handleToolChange("polygon")}
          >
            <PolylineOutlined />
          </button>
          <button
            className={buttonStyle(tool == "point")}
            onClick={() => handleToolChange("point")}
          >
            <PlaceOutlined />
          </button>
        </div>
        {selectedFeature && (
          <div className="absolute right-5 w-min flex flex-row shadow-md rounded-lg pointer-events-auto">
            <button className={buttonStyle()} onClick={handleDelete}>
              <DeleteOutline />
            </button>
          </div>
        )}
      </div>
    </>
  )
}
