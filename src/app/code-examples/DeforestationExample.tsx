import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const DeforestationExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `import io.openepi.common.ApiException;
import io.openepi.deforestation.api.DeforestationApi;
import io.openepi.deforestation.model.DeforestationBasinGeoJSON;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        DeforestationApi api = new DeforestationApi();
        try {
            BigDecimal lon = new BigDecimal("30.06");
            BigDecimal lat = BigDecimal.valueOf(-1.94);

            DeforestationBasinGeoJSON response = api.lossyearBasinGet(lon, lat, null, null, null, null, 2010, 2019);
            
            // Get the total forest cover loss within the returned river basin over the time period
            BigDecimal loss = response.getFeatures().get(0).getProperties().getDaterangeTotTreeloss();
            System.out.println("Total forest cover loss: " + loss + " km^2");
        } catch (ApiException e) {
            System.err.println("Exception when calling DeforestationApi#lossyearBasinGet");
            e.printStackTrace();
        }
    }
}`,
			},
			{
				language: "javascript",
				codeString: `const response = await fetch(
	"https://api.openepi.io/deforestation/basin?" +
		new URLSearchParams({
			lon: "30.0619",
			lat: "-1.9441",
			start_year: "2010",
			end_year: "2019",
		})
)
const data = await response.json()

// Get the total forest cover loss within the returned river basin over the time period
const loss = json.features[0].properties.daterange_tot_treeloss

console.log(\`Total forest cover loss: \${loss} km^2\`)
`,
			},
			{
				language: "python",
				codeString: `from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api.openepi.io/deforestation/basin",
        params={"lon": 30.0619, "lat": -1.9441, "start_year": 2010, "end_year": 2019},
    )

    # Get the total forest cover loss within the returned river basin over the time period
    json = response.json()
    loss = json["features"][0]["properties"]["daterange_tot_treeloss"]

    print(f"Total forest cover loss: {loss} km^2")
`,
			},
		]}
	/>
)
