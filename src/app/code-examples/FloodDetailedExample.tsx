import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const FloodDetailedExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `import io.openepi.flood.api.FloodApi;
import io.openepi.flood.model.DetailedResponseModel;
import io.openepi.common.ApiException;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        FloodApi api = new FloodApi();
        try {
            BigDecimal lon = new BigDecimal("33.57");
            BigDecimal lat = BigDecimal.valueOf(-1.37);
            DetailedResponseModel response = api.detailedDetailedGetSinglePoint(lon, lat, false);

            // Assumes flood data on this location.
            BigDecimal minDischarge = response.getQueriedLocation().getFeatures().get(0).getProperties().getMinDis();
            System.out.println("Minimum discharge: " + minDischarge);
        } catch (ApiException e) {
            System.err.println("Exception when calling FloodApi#detailedDetailedGetSinglePoint");
            e.printStackTrace();
        }
    }
}`,
			},
			{
				language: "javascript",
				codeString: `const response = await fetch(
	"https://api.openepi.io/flood/summary?" +
		new URLSearchParams({
			lon: "33.575897",
			lat: "-1.375532",
		})
)
const json = await response.json()

// Get the minimum forecasted discharge
const minDischarge = json.queried_location.features[0].properties.min_dis

console.log(\`Minimum forecasted discharge: \${minDischarge}\`)
`,
			},
			{
				language: "python",
				codeString: `from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api.openepi.io/flood/detailed",
        params={"lon": 33.575897, "lat": -1.375532},
    )

    # Get the minimum forecasted discharge
    json = response.json()
    peak_day = json["queried_location"]["features"][0]["properties"]["min_dis"]

    print(f"Minimum forecasted discharge: {peak_day}")
`,
			},
		]}
	/>
)
