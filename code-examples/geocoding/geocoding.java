import io.openepi.geocoding.api.GeocodingApi;
import io.openepi.geocoding.model.FeatureCollection;
import io.openepi.common.ApiException;

public class Main {
    public static void main(String[] args) {
        GeocodingApi api = new GeocodingApi();
        try {
            FeatureCollection response = api.geocodingGet("Berlin");

            // Prints the coordinates of the first result
            System.out.println(response.getFeatures().get(0).getGeometry().getPoint().getCoordinates());
        } catch (ApiException e) {
            System.err.println("Exception when calling GeocodingApi#geocodingGet");
            e.printStackTrace();
        }
    }
}