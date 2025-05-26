import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const FloodSummaryExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `import io.openepi.flood.api.FloodApi;
import io.openepi.flood.model.SummaryResponseModel;
import io.openepi.common.ApiException;
import java.math.BigDecimal;
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        FloodApi api = new FloodApi();
        try {
            BigDecimal lon = new BigDecimal("33.57");
            BigDecimal lat = BigDecimal.valueOf(-1.37);
            SummaryResponseModel response = api.summarySummaryGetSinglePoint(lon, lat, false);

            // Assumes flood data on this location.
            LocalDate peakDay = response.getQueriedLocation().getFeatures().get(0).getProperties().getPeakDay();
            System.out.println("Forecasted peak day: " + peakDay);
        } catch (ApiException e) {
            System.err.println("Exception when calling FloodApi#summarySummaryGetSinglePoint");
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

// Get the forecasted peak day
const peakDay = json.queried_location.features[0].properties.peak_day

console.log(\`Forecasted peak day: \${peakDay}\`)
`,
			},
			{
				language: "python",
				codeString: `from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api.openepi.io/flood/summary",
        params={"lon": 33.575897, "lat": -1.375532},
    )

    # Get the forecasted peak day
    json = response.json()
    peak_day = json["queried_location"]["features"][0]["properties"]["peak_day"]

    print(f"Forecasted peak day: {peak_day}")
`,
			},
		]}
	/>
)
