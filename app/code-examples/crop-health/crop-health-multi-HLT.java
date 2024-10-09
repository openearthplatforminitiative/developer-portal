import io.openepi.crop_health.api.CropHealthApi;
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
}