import { fetchCategories } from "@/app/data-catalog/DataCatalogActions"
import { useQuery } from "@tanstack/react-query"

export const useCategories = () =>
  useQuery({
    queryKey: [
      "categories"],
    queryFn: () =>
      fetchCategories(),
  })
