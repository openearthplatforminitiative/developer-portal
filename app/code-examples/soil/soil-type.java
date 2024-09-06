import io.openepi.soil.api.SoilApi;
import io.openepi.soil.model.SoilTypeJSON;
import io.openepi.common.ApiException;
import io.openepi.soil.model.SoilTypes;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        BigDecimal lon = new BigDecimal("9.58");
        BigDecimal lat = new BigDecimal("60.1");
        SoilApi api = new SoilApi();
        try {
            SoilTypeJSON response = api.getSoilTypeTypeGet(lon, lat, null);

            SoilTypes mostProbableSoilType = response.getProperties().getMostProbableSoilType();
            System.out.println("Most probable soil type: " + mostProbableSoilType);
        } catch (ApiException e) {
            System.err.println("Exception when calling SoilApi#getSoilTypeTypeGet");
            e.printStackTrace();
        }
    }
}