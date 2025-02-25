import io.openepi.geocoding.api.GeocodingApi;
import io.openepi.geocoding.model.FeatureCollection;
import io.openepi.common.ApiException;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        GeocodingApi api = new GeocodingApi();
        try {
            BigDecimal lat = new BigDecimal("52.5200");
            BigDecimal lon = new BigDecimal("13.4050");
            FeatureCollection response = api.reverseGeocodingReverseGet(lat, lon, null, null);

            // Prints the name of the first result
            System.out.println(response.getFeatures().get(0).getProperties().getName());
        } catch (ApiException e) {
            System.err.println("Exception when calling GeocodingApi#reverseGeocodingReverseGet");
            e.printStackTrace();
        }
    }
}