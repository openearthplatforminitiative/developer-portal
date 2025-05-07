import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const FloodThresholdExample = () => (
    <CodeBlockWrapper
        codeBlocks={[
            {
                language: "java",
                codeString: `import io.openepi.flood.api.FloodApi;
import io.openepi.common.ApiException;
import io.openepi.flood.model.ThresholdResponseModel;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        FloodApi api = new FloodApi();
        try {
            BigDecimal lon = new BigDecimal("33.57");
            BigDecimal lat = BigDecimal.valueOf(-1.37);
            ThresholdResponseModel response = api.thresholdThresholdGetSinglePoint(lon, lat);

            // Assumes flood data on this location.
            BigDecimal threshold2y = response.getQueriedLocation().getFeatures().get(0).getProperties().getThreshold2y();
            System.out.println("2-year return period threshold in m^3/s: " + threshold2y + " m^3/s");
        } catch (ApiException e) {
            System.err.println("Exception when calling FloodApi#thresholdThresholdGetSinglePoint");
            e.printStackTrace();
        }
    }
}`,
            },
            {
                language: "javascript",
                codeString: `const response = await fetch(
	"https://api.openepi.io/flood/threshold?" +
		new URLSearchParams({
			lon: "33.575897",
			lat: "-1.375532",
		})
)
const json = await response.json()

// Get the 2-year return period threshold
const threshold2y = json.queried_location.features[0].properties.threshold_2y

console.log(\`2-year return period threshold in m^3/s: \${threshold2y} m^3/s\`)
`,
            },
            {
                language: "python",
                codeString: `from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api.openepi.io/flood/threshold",
        params={"lon": 33.575897, "lat": -1.375532},
    )

    # Get the 2-year return period threshold
    json = response.json()
    threshold_2y = json["queried_location"]["features"][0]["properties"]["threshold_2y"]

    print(f"2-year return period threshold: {threshold_2y} m^3/s")
`,
            },
        ]}
    />
)
