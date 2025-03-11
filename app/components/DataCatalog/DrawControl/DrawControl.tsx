"use client";

import { Architecture, PanToolOutlined, PlaceOutlined } from "@mui/icons-material";
import { DrawTool, useDraw } from "./DrawProvider";
import { DrawPointSource } from "./Point/DrawPointSource";
import { DrawPoint } from "./Point/DrawPoint";
import { DrawPolygonControl } from "./Polygon/DrawPolygonControl";
import { DrawPolygonProvider } from "./Polygon/DrawPolygonProvider";
import { DrawSelectControl } from "./Select/DrawSelectControl";
import { useMap } from "react-map-gl/maplibre";

export const DrawControl = () => {

  const { tool, setTool, setMode } = useDraw()

  const map = useMap()

  const buttonStyle = (active: boolean) => {
    return 'hover:bg-neutral-90 border border-[#e5e7eb] border-r-0 p-2 first:rounded-l-lg last:rounded-r-lg last:border-r ' + (active ? 'bg-neutral-90' : 'bg-neutral-95');
  }

  DrawPoint()

  const handleToolChange = (tool: DrawTool) => {
    setTool(tool)
    switch (tool) {
      case 'polygon':
        setMode('drawing')
        if (map.current) {
          map.current.getCanvas().style.cursor = 'crosshair';
        }
        break;
      case 'point':
        setMode('drawing')
        if (map.current) {
          map.current.getCanvas().style.cursor = 'crosshair';
        }
        break;
      case 'select':
        setMode('selecting')
        if (map.current) {
          map.current.getCanvas().style.cursor = '';
        }
        break;
    }
  }


  return (
    <>
      <DrawPolygonProvider>
        <DrawPolygonControl />
      </DrawPolygonProvider>
      <DrawSelectControl />
      <DrawPointSource />
      <div className="absolute bottom-0 p-4 w-full flex justify-center gap-2">
        <div className="w-min flex flex-row shadow-md rounded-lg">
          <button className={buttonStyle(tool == 'select')} onClick={() => handleToolChange('select')}><PanToolOutlined /></button>
          <button className={buttonStyle(tool == 'polygon')} onClick={() => handleToolChange('polygon')}><Architecture /></button>
          <button className={buttonStyle(tool == 'point')} onClick={() => handleToolChange('point')}><PlaceOutlined /></button>
        </div>
      </div>
    </>
  )
};