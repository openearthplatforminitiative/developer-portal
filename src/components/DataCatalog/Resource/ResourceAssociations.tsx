import { ResourceCard } from "@/components/ResourceCard";
import { Resource } from "@/types/resource";
import { Typography } from "@mui/material";

type ResourceAssociationsProps = {
  resource: Resource
}

export const ResourceAssociations = ({ resource }: ResourceAssociationsProps) => {
  if ((!resource.parents || resource.parents.length === 0) && (!resource.children || resource.children.length === 0)) {
    return null
  }
  return (
    <div className="flex flex-col mt-12">
      {resource.parents && resource.parents.length > 0 && (
        <>
          <ResourceParents resource={resource} />
        </>
      )}
      {resource.children && resource.children.length > 0 && (
        <>
          <ResourceChildren resource={resource} />
        </>
      )}
    </div>
  )
}

const TitleOfParentRelation = {
  DATASET_COLLECTION: {
    "DATASET_COLLECTION": "Part of",
    "DATASET": "Other",
    "ML_MODEL": "Other",
    "API": "Other",
  },
  DATASET: {
    "DATASET_COLLECTION": "Part of",
    "DATASET": "Based on",
    "ML_MODEL": "Other",
    "API": "Other",
  },
  ML_MODEL: {
    "DATASET_COLLECTION": "Trained on",
    "DATASET": "Trained on",
    "ML_MODEL": "Other",
    "API": "Other",
  },
  API: {
    "DATASET_COLLECTION": "Distributes data from",
    "DATASET": "Distributes data from",
    "ML_MODEL": "Distributes data from",
    "API": "Distributes data from",
  }
}

export const ResourceParents = ({ resource }: ResourceAssociationsProps) => {
  if (!resource.parents || resource.parents.length === 0) {
    return null
  }

  const titleToResourcesMap: Record<string, typeof resource.parents> = {};

  resource.parents.forEach((parent) => {
    const title = TitleOfParentRelation[resource.type][parent.type];
    if (!title) return;

    if (!titleToResourcesMap[title]) {
      titleToResourcesMap[title] = [];
    }
    titleToResourcesMap[title].push(parent);
  });

  const parents = Object.entries(titleToResourcesMap).map(([title, resources]) => ({
    title,
    resources,
  }));

  return (
    <>
      {parents.map((group) => {
        if (group.resources.length === 0) {
          return null
        }
        return (
          <div key={group.title} className="mt-8">
            <Typography variant="h3" className="mt-8">
              {group.title}
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {group.resources.map((used_by_resource) => (
                <ResourceCard
                  key={used_by_resource.id}
                  resource={used_by_resource}
                />
              ))}
            </div>
          </div>
        )
      })}
    </>
  )
}

const TitleOfChildRelation = {
  DATASET_COLLECTION: {
    "DATASET_COLLECTION": "Consists of",
    "DATASET": "Consists of",
    "ML_MODEL": "Used as training data for",
    "API": "Distributed by",
  },
  DATASET: {
    "DATASET_COLLECTION": "",
    "DATASET": "Used by",
    "ML_MODEL": "Used as training data for",
    "API": "Distributed by",
  },
  ML_MODEL: {
    "DATASET_COLLECTION": "",
    "DATASET": "",
    "ML_MODEL": "",
    "API": "Distributed by",
  },
  API: {
    "DATASET_COLLECTION": "",
    "DATASET": "",
    "ML_MODEL": "",
    "API": "Distributed by",
  },
}

export const ResourceChildren = ({ resource }: ResourceAssociationsProps) => {
  if (!resource.children || resource.children.length === 0) {
    return null
  }
  const titleToResourcesMap: Record<string, typeof resource.children> = {};

  resource.children.forEach((child) => {
    const title = TitleOfChildRelation[resource.type][child.type];
    if (!title) return;

    if (!titleToResourcesMap[title]) {
      titleToResourcesMap[title] = [];
    }
    titleToResourcesMap[title].push(child);
  });

  const children = Object.entries(titleToResourcesMap).map(([title, resources]) => ({
    title,
    resources,
  }));

  return (
    <>
      {children.map((group) => {
        if (group.resources.length === 0) {
          return null
        }
        return (
          <div key={group.title} className="mt-8">
            <Typography variant="h3" className="mt-8">
              {group.title}
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {group.resources.map((based_on_resource) => (
                <ResourceCard
                  key={based_on_resource.id}
                  resource={based_on_resource}
                />
              ))}
            </div>
          </div>
        )
      })}
    </>
  )
}