import { Resource } from "@/types/resource"
import InfoCard from "../../InfoCard"
import { GitIcon } from "@/icons/GitIcon"
import { OpenApiIcon } from "@/icons/OpenApiIcon"
import { LockOutlined, Code, DatasetOutlined, ListAlt, FileDownloadOutlined } from "@mui/icons-material"

type ResourceLinksProps = {
  resource: Resource
}

export const ResourceLinks = ({ resource }: ResourceLinksProps) => {
  return (
    <>
      {
        resource.openapi_url && (
          <InfoCard
            externalLink={true}
            header="OpenAPI Spec"
            subHeader={`Explore the OpenAPI spec for ${resource.title}`}
            cardIcon={<OpenApiIcon />}
            href={resource.openapi_url}
          />
        )
      }
      {
        resource.api_authentication_url && (
          <InfoCard
            externalLink={true}
            header="Authentication"
            subHeader={`${resource.title} requires authentication. Learn more here`}
            cardIcon={<LockOutlined />}
            href={resource.api_authentication_url}
          />
        )
      }
      {
        resource.git_url && (
          <InfoCard
            externalLink={true}
            header="Git Repository"
            subHeader={`Explore the source code behind ${resource.title}`}
            cardIcon={<GitIcon />}
            href={resource.git_url}
          />
        )
      }
      {
        resource.client_library && (
          <InfoCard
            externalLink={false}
            header="Client Libraries"
            subHeader={`Explore the client libraries for ${resource.title}`}
            cardIcon={<Code />}
            href="/resources"
          />
        )
      }
      {
        resource.data_hub_url && (
          <InfoCard
            externalLink={true}
            header="Data Hub"
            subHeader={`Explore the data hub for ${resource.title}`}
            cardIcon={<DatasetOutlined />}
            href={resource.data_hub_url}
          />
        )
      }
      {
        resource.documentation_url && (
          <InfoCard
            externalLink={true}
            header="Documentation"
            subHeader={`Explore the documentation for ${resource.title}`}
            cardIcon={<ListAlt />}
            href={resource.documentation_url}
          />
        )
      }
      {
        resource.download_url && (
          <InfoCard
            externalLink={true}
            header="Download"
            subHeader={`Download ${resource.title}`}
            cardIcon={<FileDownloadOutlined />}
            href={resource.download_url}
          />
        )
      }
      {
        resource.research_paper_url && (
          <InfoCard
            externalLink={true}
            header="Research Paper"
            subHeader={`Explore the research paper for ${resource.title}`}
            cardIcon={<OpenApiIcon />}
            href={resource.research_paper_url}
          />
        )
      }
    </>
  )
}