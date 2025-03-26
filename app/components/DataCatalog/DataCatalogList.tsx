"use client"

import { ArrowForward, PublicOffOutlined, PublicOutlined, WbSunny } from "@mui/icons-material"
import Link from "next/link"
import { useDataCatalog } from "./DataCatalogProvider"
import { Resource } from "@/app/data-catalog/DataCatalogTypes"
import { DataCatalogSearch } from "./DataCatalogSearch"

type ResourceCardProps = {
  resource: Resource
}

const ResourceCard = ({ resource }: ResourceCardProps) => {

  const tagClasses = "text-sm px-2 py-1 rounded-lg"

  const tagColors = () => {
    switch (resource.type) {
      case "API":
        return <div className={`${tagClasses} bg-primary-90/90 text-primary-10`}>
          {resource.type}
        </div>
      case "Dataset":
        return <div className={`${tagClasses} bg-secondary-90/90 text-secondary-10`}>
          {resource.type}
        </div>
        break;
      case "ML Model":
        return <div className={`${tagClasses} bg-tertiary-90/90 text-tertiary-10`}>
          {resource.type}
        </div>
        break;
      default:
        return <div className={`${tagClasses} bg-error-90 text-error-main`}>
          {resource.type}
          break;
        </div>
    }
  }

  const spatialTag = () => {
    if (resource.spatialExtent?.length ?? 0 > 0) {
      return <div className={`${tagClasses} bg-neutral-80/50 flex items-center`}>
        <PublicOutlined fontSize="small" />
      </div>
    }
  }

  const providerTag = () => {
    return resource.providers.map((provider) => (
      <div key={provider.id} className={`${tagClasses} bg-neutral-80/50 max-w-24 truncate`}>
        {provider.name}
      </div>
    ))
  }

  const Icon = resource.categories[0]?.icon ?? <WbSunny />;

  return (
    <Link
      className="group flex items-center justify-between gap-6 rounded-lg px-6 py-4 bg-neutral-95 hover:bg-neutral-90 cursor-pointer"
      href={`/data-catalog/resource/${resource.id}`}
    >
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <Icon />
          <h3>{resource.title}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {spatialTag()}
          {tagColors()}
          {/* {providerTag()} */}
        </div>
      </div>
      <ArrowForward className="transition group-hover:translate-x-2" />
    </Link>
  )
}

export const DataCatalogList = () => {
  const { resources } = useDataCatalog()
  return (
    <>
      <div className="top-0 sticky w-full">
        <DataCatalogSearch />
      </div>
      <div className="grid grid-cols-1 @lg:grid-cols-2 @3xl:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
          />
        ))}
      </div>
    </>
  )
}