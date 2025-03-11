import { createContext, ReactNode, useContext, useState } from "react";

export type DrawTool = 'select' | 'point' | 'polygon'

export type DrawMode = 'drawing' | 'selecting' | 'editing'

export interface DrawContextType {
  tool: DrawTool;
  setTool: (mode: DrawTool) => void;
  features: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.Point>[];
  mode: DrawMode;
  setMode: (mode: DrawMode) => void;
  generateFeatureId: () => string;
  setFeatures: (features: GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.Point>[]) => void;
  selectedFeatureId: string | number | undefined;
  setSelectedFeatureId: (id: string | number | undefined) => void;
}

export const DrawContext = createContext<DrawContextType | undefined>(undefined)

export const useDraw = () => {
  const context = useContext(DrawContext)
  if (context === undefined) {
    throw new Error('useDraw must be used within a DrawProvider')
  }
  return context
}

export const DrawProvider = ({ children }: { children: ReactNode }) => {
  const [tool, setTool] = useState<DrawTool>('select')
  const [mode, setMode] = useState<DrawMode>('selecting')
  const [idCounter, setIdCounter] = useState(0);

  const generateFeatureId = () => {
    const newId = idCounter + 1;
    setIdCounter(newId);
    return `feature-${newId}`;
  };

  const [features, setFeatures] = useState<GeoJSON.Feature<GeoJSON.Polygon | GeoJSON.Point>[]>([])
  const [selectedFeatureId, setSelectedFeatureId] = useState<string | number | undefined>()

  return (
    <DrawContext.Provider
      value={{
        mode,
        setMode,
        tool,
        setTool,
        features,
        setFeatures,
        generateFeatureId,
        selectedFeatureId,
        setSelectedFeatureId
      }}
    >
      {children}
    </DrawContext.Provider>
  );
}