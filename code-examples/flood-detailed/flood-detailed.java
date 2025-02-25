import io.openepi.flood.api.FloodApi;
import io.openepi.flood.model.DetailedResponseModel;
import io.openepi.common.ApiException;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        FloodApi api = new FloodApi();
        try {
            BigDecimal lon = new BigDecimal("33.57");
            BigDecimal lat = BigDecimal.valueOf(-1.37);
            DetailedResponseModel response = api.detailedDetailedGetSinglePoint(lon, lat, false);

            // Assumes flood data on this location.
            BigDecimal minDischarge = response.getQueriedLocation().getFeatures().get(0).getProperties().getMinDis();
            System.out.println("Minimum discharge: " + minDischarge);
        } catch (ApiException e) {
            System.err.println("Exception when calling FloodApi#detailedDetailedGetSinglePoint");
            e.printStackTrace();
        }
    }
}