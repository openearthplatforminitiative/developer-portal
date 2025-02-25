import CodeBlockWrapper from "@/app/components/CodeBlockWrapper"

export const CropHealthMultiExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `import io.openepi.crop_health.api.CropHealthApi;
import io.openepi.common.ApiException;
import io.openepi.crop_health.model.MultiHLTPredictionResponse;
import java.io.File;

public class Main {
    public static void main(String[] args) {
        CropHealthApi api = new CropHealthApi();
        try {
            File file = new File("path/to/file");
            MultiHLTPredictionResponse response = api.predictionsWithMultiHLT(file);

            // Print the prediction for the MLN_maize class
            System.out.println(response.getMlNMaize());
        } catch (ApiException e) {
            System.err.println("Exception when calling CropHealthApi#predictionsWithMultiHLT");
            e.printStackTrace();
        }
    }
}`,
			},
			{
				language: "javascript",
				codeString: `const imageData = fs.readFileSync("cocoa.jpg")

// Get the multi-HLT model prediction for image cocoa.jpg
// passed as a binary file in the request body
fetch.then(async (fetch) => {
	const response_multi = await fetch(
		"https://api.openepi.io/crop-health/predictions/multi-HLT",
		{
			method: "POST",
			body: imageData,
		}
	)
	const data_multi = await response_multi.json()
	// Print the prediction for the MLN_maize class
	console.log(data_multi.MLN_maize)
})
`,
			},
			{
				language: "python",
				codeString: `from httpx import Client

# Open the image file as a binary file
with open("cocoa.jpg", "rb") as image_file:
    image_bytes = image_file.read()

with Client() as client:
    # Get the multi-HLT model prediction for image cocoa.jpg
    # passed as a binary file in the request body
    response_multi = client.post(
        url="https://api.openepi.io/crop-health/predictions/multi-HLT",
        content=image_bytes,
    )

    data_multi = response_multi.json()
    # Print the prediction for the MLN_maize class
    print(data_multi["MLN_maize"])
`,
			},
		]}
	/>
)
