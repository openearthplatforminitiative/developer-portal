import { Modal } from "@mui/material"
import { useDataCatalog } from "./DataCatalogProvider"
import { DataCatalogMap } from "./DataCatalogMap"

export const DataCatalogModelMap = () => {
  const { showMap } = useDataCatalog()
  return (
    <Modal
      open={showMap}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <DataCatalogMap />
    </Modal>
  )
}