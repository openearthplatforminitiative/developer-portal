import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const ReverseGeocodingExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `import io.openepi.geocoding.api.GeocodingApi;
import io.openepi.geocoding.model.FeatureCollection;
import io.openepi.common.ApiException;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        GeocodingApi api = new GeocodingApi();
        try {
            BigDecimal lat = new BigDecimal("52.5200");
            BigDecimal lon = new BigDecimal("13.4050");
            FeatureCollection response = api.reverseGeocodingReverseGet(lat, lon, null, null);

            // Prints the name of the first result
            System.out.println(response.getFeatures().get(0).getProperties().getName());
        } catch (ApiException e) {
            System.err.println("Exception when calling GeocodingApi#reverseGeocodingReverseGet");
            e.printStackTrace();
        }
    }
}`,
			},
			{
				language: "javascript",
				codeString: `const response = await fetch(
	"https://api.openepi.io/geocoding/reverse?" +
		new URLSearchParams({
			lon: "13.438596",
			lat: "52.519854",
		})
)
const data = await response.json()

// prints the name of the first result
console.log(data.features[0].properties.name)
`,
			},
			{
				language: "python",
				codeString: `from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api.openepi.io/geocoding/reverse",
        params={"lon": 13.438596, "lat": 52.519854},
    )

    data = response.json()

    # prints the name of the first result
    print(data["features"][0]["properties"]["name"])
`,
			},
		]}
	/>
)
