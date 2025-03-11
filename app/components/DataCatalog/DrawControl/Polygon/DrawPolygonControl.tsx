import { DrawPolygonSource } from "./DrawPolygonSource"
import { DrawPolygon } from "./DrawPolygon"
import { DrawNewPolygonSource } from "./DrawNewPolygonSource"

export const DrawPolygonControl = () => {

  { DrawPolygon() }
  return (
    <>
      <DrawNewPolygonSource />
      <DrawPolygonSource />
    </>
  )
}