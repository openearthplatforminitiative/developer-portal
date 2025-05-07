import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const SoilTypeExample = () => (
    <CodeBlockWrapper
        codeBlocks={[
            {
                language: "java",
                codeString: `import io.openepi.soil.api.SoilApi;
import io.openepi.soil.model.SoilTypeJSON;
import io.openepi.common.ApiException;
import io.openepi.soil.model.SoilTypes;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        BigDecimal lon = new BigDecimal("9.58");
        BigDecimal lat = new BigDecimal("60.1");
        SoilApi api = new SoilApi();
        try {
            SoilTypeJSON response = api.getSoilTypeTypeGet(lon, lat, null);

            SoilTypes mostProbableSoilType = response.getProperties().getMostProbableSoilType();
            System.out.println("Most probable soil type: " + mostProbableSoilType);
        } catch (ApiException e) {
            System.err.println("Exception when calling SoilApi#getSoilTypeTypeGet");
            e.printStackTrace();
        }
    }
}`,
            },
            {
                language: "javascript",
                codeString: `// Get the most probable soil type at the queried location
const response = await fetch(
	"https://api.openepi.io/soil/type?" +
		new URLSearchParams({
			lon: "9.58",
			lat: "60.1",
		})
)
const json = await response.json()

// Get the most probable soil type
const mostProbableSoilType = json.properties.most_probable_soil_type

console.log(\`Most probable soil type: \${mostProbableSoilType}\`)
`,
            },
            {
                language: "python",
                codeString: `from httpx import Client

with Client() as client:
    # Get the soil type at the queried location
    # and the probability of the top 3 most probable soil types
    response = client.get(
        url="https://api.openepi.io/soil/type",
        params={"lat": 60.1, "lon": 9.58, "top_k": 3},
    )

    json = response.json()

    # Get the soil type and probability for the second most probable soil type
    soil_type = json["properties"]["probabilities"][1]["soil_type"]
    probability = json["properties"]["probabilities"][1]["probability"]

    print(f"Soil type: {soil_type}, Probability: {probability}")
`,
            },
        ]}
    />
)
