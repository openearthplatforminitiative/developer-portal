import { Resource } from "@/types/resource"

export type ResourceTagProps = {
  resource: Resource
}

export const ResourceTag = ({ resource }: ResourceTagProps) => {
  if (resource.type === "API") {
    return (
      <span className="flex items-center gap-2 px-4 py-2 bg-primary-90/90 text-primary-10 rounded-full text-lg font-medium">
        {resource.type}
      </span>
    )
  } else if (resource.type === "DATASET") {
    return (
      <span className="flex items-center gap-2 px-4 py-2 bg-secondary-90/90 text-secondary-10 rounded-full text-lg font-medium">
        Dataset
      </span>
    )
  } else if (resource.type === "DATASET_COLLECTION") {
    return (
      <span className="flex items-center gap-2 px-4 py-2 border border-neutral-10 bg-neutral-100/90 text-neutral-10 rounded-full text-lg font-medium">
        Dataset Collection
      </span>
    )
  } else if (resource.type === "ML_MODEL") {
    return (
      <span className="flex items-center gap-2 px-4 py-2 bg-tertiary-90/90 text-tertiary-10 rounded-full text-lg font-medium">
        ML Model
      </span>
    )
  } else {
    return (
      <span className="flex items-center gap-2 px-4 py-2 bg-error-90 text-error-main rounded-full text-lg font-medium">
        {resource.type}
      </span>
    )
  }
}