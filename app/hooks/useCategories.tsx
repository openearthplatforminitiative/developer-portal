import { useQuery } from "@tanstack/react-query"
import { fetchCategories } from "../data-catalog/DataCatalogActions"

export const useCategories = () =>
  useQuery({
    queryKey: [
      "categories"],
    queryFn: () =>
      fetchCategories(),
  })
