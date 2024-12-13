mport io.openepi.soil.api.SoilApi;
import io.openepi.soil.model.*;
import io.openepi.common.ApiException;
import java.math.BigDecimal;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        BigDecimal minLon = new BigDecimal("9.5");
        BigDecimal maxLon = new BigDecimal("9.6");
        BigDecimal minLat = new BigDecimal("60.1");
        BigDecimal maxLat = new BigDecimal("60.12");

        SoilApi api = new SoilApi();
        try {
            SoilTypeSummaryJSON response = api.getSoilTypeSummaryTypeSummaryGet(minLon, maxLon, minLat, maxLat);

            // Get the summary of the soil types in the bounding box
            List<SoilTypeSummary> summaryList = response.getProperties().getSummaries();

            // get the soil type and the number of occurrences
            SoilTypes soilType1 = summaryList.get(0).getSoilType();
            int count1 = summaryList.get(0).getCount();
            SoilTypes soilType2 = summaryList.get(1).getSoilType();
            int count2 = summaryList.get(1).getCount();

            System.out.println("Soil type: " + soilType1 + ", count: " + count1);
            System.out.println("Soil type: " + soilType2 + ", count: " + count2);
        } catch (ApiException e) {
            System.err.println("Exception when calling SoilApi#getSoilTypeSummaryTypeSummaryGet");
            e.printStackTrace();
        }
    }
}