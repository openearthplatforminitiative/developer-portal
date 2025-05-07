import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const AgricultureExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `import io.openepi.common.ApiException;
import io.openepi.agriculture.api.Agriculture;
import io.openepi.agriculture.model.ModelsSummmary;

import java.math.BigDecimal;


public class Main {
    public static void main(String[] args) {
        Agriculture api = new AgricultureApi();
        try {
            BigDecimal lon = new BigDecimal("30.06");
            BigDecimal lat = BigDecimal.valueOf(-1.94);
            ModelsSummary response = api.getSummary(lon, lat);
            System.out.println(response);
        } catch (ApiException e) {
            System.err.println("Exception when calling AgricultureApi#getSummary");
            e.printStackTrace();
        }
    }
}`,
			},
			{
				language: "javascript",
				codeString: `const response = await fetch(
	"https://api.openepi.io/agriculture/summary?" +
		new URLSearchParams({
			lon: "30.0619",
			lat: "-1.9441",
		})
)
console.log(await response.json())
`,
			},
			{
				language: "python",
				codeString: `from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api.openepi.io/agriculture/summary",
        params={"lon": 30.0619, "lat": -1.9441},
    )

    json = response.json()
    print("Summary:", json)
`,
			},
		]}
	/>
)
