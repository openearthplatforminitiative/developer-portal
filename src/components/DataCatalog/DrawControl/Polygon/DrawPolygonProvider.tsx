import { createContext, ReactNode, useContext, useState } from "react"

type DrawPolygonContextType = {
  newPolygon: GeoJSON.Feature<GeoJSON.Polygon> | undefined;
  setNewPolygon: (polygon: GeoJSON.Feature<GeoJSON.Polygon> | undefined) => void;
}

const DrawPolygonContext = createContext<DrawPolygonContextType | undefined>(undefined)

export const useDrawPolygon = () => {
  const context = useContext(DrawPolygonContext)
  if (context === undefined) {
    throw new Error('useDrawPolygon must be used within a DrawPolygonProvider')
  }
  return context
}



export const DrawPolygonProvider = ({ children }: { children: ReactNode }) => {
  const [newPolygon, setNewPolygon] = useState<GeoJSON.Feature<GeoJSON.Polygon> | undefined>()
  return (
    <DrawPolygonContext.Provider value={{ newPolygon, setNewPolygon }}>
      {children}
    </DrawPolygonContext.Provider>
  )
}