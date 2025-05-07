import { useQuery } from "@tanstack/react-query"
import { fetchProviders } from "../data-catalog/DataCatalogActions"

export const useProviders = () =>
  useQuery({
    queryKey: [
      "providers"],
    queryFn: () =>
      fetchProviders(),
  })
