import io.openepi.crop_health.api.CropHealthApi;
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
}