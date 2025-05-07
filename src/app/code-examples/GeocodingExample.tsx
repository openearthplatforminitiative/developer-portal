import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const GeocodingExample = () => (
    <CodeBlockWrapper
        codeBlocks={[
            {
                language: "java",
                codeString: `import io.openepi.geocoding.api.GeocodingApi;
import io.openepi.geocoding.model.FeatureCollection;
import io.openepi.common.ApiException;

public class Main {
    public static void main(String[] args) {
        GeocodingApi api = new GeocodingApi();
        try {
            FeatureCollection response = api.geocodingGet("Berlin");

            // Prints the coordinates of the first result
            System.out.println(response.getFeatures().get(0).getGeometry().getPoint().getCoordinates());
        } catch (ApiException e) {
            System.err.println("Exception when calling GeocodingApi#geocodingGet");
            e.printStackTrace();
        }
    }
}`,
            },
            {
                language: "javascript",
                codeString: `const response = await fetch(
	"https://api.openepi.io/geocoding/?" + new URLSearchParams({ q: "Berlin" })
)
const data = await response.json()

// prints the coordinates of the first result
console.log(data.features[0].geometry.coordinates)
`,
            },
            {
                language: "python",
                codeString: `from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api.openepi.io/geocoding/",
        params={"q": "Berlin"},
    )

    data = response.json()

    # prints the coordinates of the first result
    print(data["features"][0]["geometry"]["coordinates"])
`,
            },
        ]}
    />
)
