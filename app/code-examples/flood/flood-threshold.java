import io.openepi.flood.api.FloodApi;
import io.openepi.common.ApiException;
import io.openepi.flood.model.ThresholdResponseModel;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        FloodApi api = new FloodApi();
        try {
            BigDecimal lon = new BigDecimal("33.57");
            BigDecimal lat = BigDecimal.valueOf(-1.37);
            ThresholdResponseModel response = api.thresholdThresholdGetSinglePoint(lon, lat);

            // Assumes flood data on this location.
            BigDecimal threshold2y = response.getQueriedLocation().getFeatures().get(0).getProperties().getThreshold2y();
            System.out.println("2-year return period threshold in m^3/s: " + threshold2y + " m^3/s");
        } catch (ApiException e) {
            System.err.println("Exception when calling FloodApi#thresholdThresholdGetSinglePoint");
            e.printStackTrace();
        }
    }
}