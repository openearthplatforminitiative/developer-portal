import { createContext, ReactNode, useContext, useState } from "react";
import { Feature, Polygon, Point } from "geojson";


export type DrawTool = 'select' | 'point' | 'polygon'

export interface DrawContextType {
  tool: DrawTool;
  setTool: (tool: DrawTool) => void;
  features: Feature<Polygon | Point>[];
  generateFeatureId: () => string;
  setFeatures: (features: Feature<Polygon | Point>[]) => void;
  selectedFeature: Feature<Polygon | Point> | undefined;
  setSelectedFeature: (feature: Feature<Polygon | Point> | undefined) => void;
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
  const [idCounter, setIdCounter] = useState(0);

  const generateFeatureId = () => {
    const newId = idCounter + 1;
    setIdCounter(newId);
    return `feature-${newId}`;
  };

  const [features, setFeatures] = useState<Feature<Polygon | Point>[]>([])
  const [selectedFeature, setSelectedFeature] = useState<Feature<Polygon | Point> | undefined>(undefined)

  return (
    <DrawContext.Provider
      value={{
        tool,
        setTool,
        features,
        setFeatures,
        generateFeatureId,
        selectedFeature,
        setSelectedFeature,
      }}
    >
      {children}
    </DrawContext.Provider>
  );
}