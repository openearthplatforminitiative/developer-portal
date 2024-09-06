import io.openepi.crop_health.api.CropHealthApi;
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
}