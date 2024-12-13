import io.openepi.common.ApiException;
import io.openepi.deforestation.api.DeforestationApi;
import io.openepi.deforestation.model.DeforestationBasinGeoJSON;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        DeforestationApi api = new DeforestationApi();
        try {
            BigDecimal lon = new BigDecimal("30.06");
            BigDecimal lat = BigDecimal.valueOf(-1.94);

            DeforestationBasinGeoJSON response = api.lossyearBasinGet(lon, lat, null, null, null, null, 2010, 2019);
            
            // Get the total forest cover loss within the returned river basin over the time period
            BigDecimal loss = response.getFeatures().get(0).getProperties().getDaterangeTotTreeloss();
            System.out.println("Total forest cover loss: " + loss + " km^2");
        } catch (ApiException e) {
            System.err.println("Exception when calling DeforestationApi#lossyearBasinGet");
            e.printStackTrace();
        }
    }
}