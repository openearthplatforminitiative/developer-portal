import { Resource } from "@/types/resource"
import { useContext, useEffect, useState, createContext } from "react"

type ResourceContextType = {
  resourceId: string
  resource: Resource | undefined
}

type ResourceProviderProps = {
  resourceId: string
  resourcePromise?: Promise<Resource>
  children: React.ReactNode
}

const ResourceContext = createContext<ResourceContextType | null>(null)

export const ResourceProvider = ({ resourceId, resourcePromise, children }: ResourceProviderProps) => {
  const [resource, setResource] = useState<Resource>()

  const awaitResourcePromise = async (promise: Promise<Resource>) => {
    if (promise) {
      const resource = await promise
      setResource(resource)
    }
  }

  useEffect(() => {
    if (resourcePromise) {
      awaitResourcePromise(resourcePromise)
    }
  }, [resourcePromise])

  return (
    <ResourceContext.Provider value={{ resourceId, resource }}>
      {children}
    </ResourceContext.Provider>
  )
}

export const useResource = () => {
  const context = useContext(ResourceContext)
  if (!context) {
    throw new Error("useResource must be used within a ResourceProvider")
  }
  return context
}