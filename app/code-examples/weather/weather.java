import io.openepi.weather.api.WeatherApi;
import io.openepi.weather.model.METJSONForecast;
import io.openepi.common.ApiException;
import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        BigDecimal lat = new BigDecimal("52.52");
        BigDecimal lon = new BigDecimal("13.40");

        WeatherApi api = new WeatherApi();
        try {
            METJSONForecast response = api.getForecastLocationforecastGet(lat, lon, null);

            // Get the instant air temperature
            BigDecimal airTemperature = response.getProperties().getTimeseries().get(0).getData().getInstant().getDetails().getAirTemperature();
            System.out.println("Air temperature: " + airTemperature);
        } catch (ApiException e) {
            System.err.println("Exception when calling WeatherApi#getForecastLocationforecastGet");
            e.printStackTrace();
        }
    }
}