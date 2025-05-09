import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const SoilPropertyExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `import io.openepi.soil.api.SoilApi;
import io.openepi.soil.model.*;
import io.openepi.common.ApiException;
import java.math.BigDecimal;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        BigDecimal lon = new BigDecimal("9.58");
        BigDecimal lat = new BigDecimal("60.1");
        List<SoilDepthLabels> depths = List.of(SoilDepthLabels._0_5CM);
        List<SoilPropertiesCodes> properties = List.of(SoilPropertiesCodes.BDOD);
        List<SoilPropertyValueTypes> values = List.of(SoilPropertyValueTypes.MEAN);
        SoilApi api = new SoilApi();
        try {
            // Get the soil information for the bdod property
            SoilPropertyJSON response = api.getSoilPropertyPropertyGet(lon, lat, depths, properties, values);
            SoilLayer bdod = response.getProperties().getLayers().get(0);

            // Get the soil property unit and name
            SoilMappedUnits bdodUnit = bdod.getUnitMeasure().getMappedUnits();
            String bdodName = bdod.getName();

            // Get the soil property mean value at depth 0-5cm
            SoilDepthLabels bdodDepth = bdod.getDepths().get(0).getLabel();
            BigDecimal bdodValue = bdod.getDepths().get(0).getValues().getMean();

            System.out.println("Soil property: " + bdodName + ", Depht: " + bdodDepth + ", Value: " + bdodValue + " " + bdodUnit);
        } catch (ApiException e) {
            System.err.println("Exception when calling SoilApi#getSoilPropertyPropertyGet");
            e.printStackTrace();
        }
    }
}`,
			},
			{
				language: "javascript",
				codeString: `// Get the mean value of the soil property at the queried location and depth
const response = await fetch(
	"https://api.openepi.io/soil/property?" +
		new URLSearchParams({
			lon: "9.58",
			lat: "60.1",
			depths: "0-5cm",
			properties: "bdod",
			values: "mean",
		})
)
const json = await response.json()

// Get the soil information for the bdod property
const bdod = json.properties.layers[0]

// Get the soil property unit and name
const bdodUnit = bdod.unit_measure.mapped_units
const bdodName = bdod.name

// Get the soil property mean value at depth 0-5cm
const bdodDepth = bdod.depths[0].label
const bdodValue = bdod.depths[0].values.mean

console.log(
	\`Soil property: \${bdodName}, Depth: \${bdodDepth}, Value: \${bdodValue} \${bdodUnit}\`
)
`,
			},
			{
				language: "python",
				codeString: `from httpx import Client

with Client() as client:
    # Get the mean and the 0.05 quantile of the soil properties at the queried location and depths
    response_multi = client.get(
        url="https://api.openepi.io/soil/property",
        params={
            "lat": 60.1,
            "lon": 9.58,
            "depths": ["0-5cm", "100-200cm"],
            "properties": ["bdod", "phh2o"],
            "values": ["mean", "Q0.05"],
        },
    )

    json_multi = response_multi.json()

    # Get the soil information for the phh2o property
    phh2o = json_multi["properties"]["layers"][1]

    # Get the soil property unit and name
    phh2o_name = phh2o["name"]
    phh2o_unit = phh2o["unit_measure"]["mapped_units"]

    # Get the soil property 0.05 quantile value at depth 100-200cm
    phh2o_depth = phh2o["depths"][1]["label"]
    phh2o_value = phh2o["depths"][1]["values"]["Q0.05"]

    print(
        f"Soil property: {phh2o_name}, Depth: {phh2o_depth}, Value: {phh2o_value} {phh2o_unit}"
    )
`,
			},
		]}
	/>
)
