import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const SoilTypeSummaryExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `mport io.openepi.soil.api.SoilApi;
import io.openepi.soil.model.*;
import io.openepi.common.ApiException;
import java.math.BigDecimal;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        BigDecimal minLon = new BigDecimal("9.5");
        BigDecimal maxLon = new BigDecimal("9.6");
        BigDecimal minLat = new BigDecimal("60.1");
        BigDecimal maxLat = new BigDecimal("60.12");

        SoilApi api = new SoilApi();
        try {
            SoilTypeSummaryJSON response = api.getSoilTypeSummaryTypeSummaryGet(minLon, maxLon, minLat, maxLat);

            // Get the summary of the soil types in the bounding box
            List<SoilTypeSummary> summaryList = response.getProperties().getSummaries();

            // get the soil type and the number of occurrences
            SoilTypes soilType1 = summaryList.get(0).getSoilType();
            int count1 = summaryList.get(0).getCount();
            SoilTypes soilType2 = summaryList.get(1).getSoilType();
            int count2 = summaryList.get(1).getCount();

            System.out.println("Soil type: " + soilType1 + ", count: " + count1);
            System.out.println("Soil type: " + soilType2 + ", count: " + count2);
        } catch (ApiException e) {
            System.err.println("Exception when calling SoilApi#getSoilTypeSummaryTypeSummaryGet");
            e.printStackTrace();
        }
    }
}`,
			},
			{
				language: "javascript",
				codeString: `// Get a summary of the soil types in the queried bounding box, represented
// by a mapping of each soil type to the number of occurrences in the bounding box
const response = await fetch(
	"https://api.openepi.io/soil/type/summary?" +
		new URLSearchParams({
			min_lon: "9.5",
			max_lon: "9.6",
			min_lat: "60.1",
			max_lat: "60.12",
		})
)
const json = await response.json()

// Get the summary of the soil types in the bounding box
const summaryList = json.properties.summaries

// Get the soil type and the number of occurrences
const soilType1 = summaryList[0].soil_type
const count1 = summaryList[0].count
const soilType2 = summaryList[1].soil_type
const count2 = summaryList[1].count
console.log(\`Soil type: \${soilType1}, Count: \${count1}\`)
console.log(\`Soil type: \${soilType2}, Count: \${count2}\`)
`,
			},
			{
				language: "python",
				codeString: `from httpx import Client

with Client() as client:
    # Get a summary of the soil types in the queried bounding box, represented
    # by a mapping of each soil type to the number of occurrences in the bounding box
    response = client.get(
        url="https://api.openepi.io/soil/type/summary",
        params={"min_lon": 9.5, "max_lon": 9.6, "min_lat": 60.1, "max_lat": 60.12},
    )

    json = response.json()

    # Get the summary of the soil types in the bounding box
    summary_list = json["properties"]["summaries"]

    # Get the soil type and the number of occurrences
    soil_type_1 = summary_list[0]["soil_type"]
    count_1 = summary_list[0]["count"]
    soil_type_2 = summary_list[1]["soil_type"]
    count_2 = summary_list[1]["count"]

    print(f"Soil type: {soil_type_1}, Count: {count_1}")
    print(f"Soil type: {soil_type_2}, Count: {count_2}")
`,
			},
		]}
	/>
)
