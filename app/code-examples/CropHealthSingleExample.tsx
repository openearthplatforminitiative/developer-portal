import CodeBlockWrapper from "@/app/components/CodeBlockWrapper"

export const CropHealthSingleExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `import io.openepi.crop_health.api.CropHealthApi;
import io.openepi.common.ApiException;
import io.openepi.crop_health.model.SingleHLTPredictionResponse;
import java.io.File;

public class Main {
    public static void main(String[] args) {
        CropHealthApi api = new CropHealthApi();
        try {
            File file = new File("path/to/file");
            SingleHLTPredictionResponse response = api.predictionsWithSingleHLT(file);

            // Print the prediction for the CBSD class
            System.out.println(response.getCSSVD());
        } catch (ApiException e) {
            System.err.println("Exception when calling CropHealthApi#predictionsWithSingleHLT");
            e.printStackTrace();
        }
    }
}`,
			},
			{
				language: "javascript",
				codeString: `const imageData = fs.readFileSync("cocoa.jpg")

// Get the single-HLT model prediction for image cocoa.jpg
// passed as a binary file in the request body
fetch.then(async (fetch) => {
	const response_single = await fetch(
		"https://api.openepi.io/crop-health/predictions/single-HLT",
		{
			method: "POST",
			body: imageData,
		}
	)
	const data_single = await response_single.json()
	// Print the prediction for the CBSD class
	console.log(data_single.CBSD)
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
    # Get the single-HLT model prediction for image cocoa.jpg
    # passed as a binary file in the request body
    response_single = client.post(
        url="https://api.openepi.io/crop-health/predictions/single-HLT",
        content=image_bytes,
    )

    data_single = response_single.json()
    # Print the prediction for the CBSD class
    print(data_single["CBSD"])
`,
			},
		]}
	/>
)
