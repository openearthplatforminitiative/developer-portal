import CodeBlockWrapper from "@/components/CodeBlockWrapper"

export const CropHealthBinaryExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `import io.openepi.crop_health.api.CropHealthApi;
import io.openepi.common.ApiException;
import io.openepi.crop_health.model.BinaryPredictionResponse;
import java.io.File;

public class Main {
    public static void main(String[] args) {
        CropHealthApi api = new CropHealthApi();
        try {
            File file = new File("path/to/file");
            BinaryPredictionResponse response = api.predictionsWithBinary(file);

            // Print the prediction for the healthy class
            System.out.println(response.getHLT());
        } catch (ApiException e) {
            System.err.println("Exception when calling CropHealthApi#predictionsWithBinary");
            e.printStackTrace();
        }
    }
}`,
			},
			{
				language: "javascript",
				codeString: `const imageData = fs.readFileSync("cocoa.jpg")

// Get the binary model prediction for image cocoa.jpg
// passed as a binary file in the request body
fetch.then(async (fetch) => {
	const response_binary = await fetch(
		"https://api.openepi.io/crop-health/predictions/binary",
		{
			method: "POST",
			body: imageData,
		}
	)
	const data_binary = await response_binary.json()
	// Print the prediction for the healthy class
	console.log(data_binary.HLT)
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
    # Get the binary model prediction for image cocoa.jpg
    # passed as a binary file in the request body
    response_binary = client.post(
        url="https://api.openepi.io/crop-health/predictions/binary",
        content=image_bytes,
    )

    data_binary = response_binary.json()
    # Print the prediction for the healthy class
    print(data_binary["HLT"])
`,
			},
		]}
	/>
)
