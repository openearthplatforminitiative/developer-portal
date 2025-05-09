import { fetchProviders } from "@/app/data-catalog/DataCatalogActions"
import { useQuery } from "@tanstack/react-query"

export const useProviders = () =>
	useQuery({
		queryKey: ["providers"],
		queryFn: () => fetchProviders(),
	})
