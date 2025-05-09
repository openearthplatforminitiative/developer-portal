import { DrawPolygonSource } from "./DrawPolygonSource"
import { DrawPolygon } from "./DrawPolygon"
import { DrawNewPolygonSource } from "./DrawNewPolygonSource"

export const DrawPolygonControl = () => {
	return (
		<>
			<DrawPolygon />
			<DrawNewPolygonSource />
			<DrawPolygonSource />
		</>
	)
}
