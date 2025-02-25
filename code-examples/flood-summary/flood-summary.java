import io.openepi.flood.api.FloodApi;
import io.openepi.flood.model.SummaryResponseModel;
import io.openepi.common.ApiException;
import java.math.BigDecimal;
import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {
        FloodApi api = new FloodApi();
        try {
            BigDecimal lon = new BigDecimal("33.57");
            BigDecimal lat = BigDecimal.valueOf(-1.37);
            SummaryResponseModel response = api.summarySummaryGetSinglePoint(lon, lat, false);

            // Assumes flood data on this location.
            LocalDate peakDay = response.getQueriedLocation().getFeatures().get(0).getProperties().getPeakDay();
            System.out.println("Forecasted peak day: " + peakDay);
        } catch (ApiException e) {
            System.err.println("Exception when calling FloodApi#summarySummaryGetSinglePoint");
            e.printStackTrace();
        }
    }
}