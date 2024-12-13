import CodeBlockWrapper from "@/app/components/CodeBlockWrapper"

export const WeatherExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `import io.openepi.weather.api.WeatherApi;
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
}`,
			},
			{
				language: "javascript",
				codeString: `const response = await fetch(
	"https://api.openepi.io/weather/locationforecast?lat=52.520008&lon=13.404954"
)
const json = await response.json()

// Get the instant air temperature
const airTemperature =
	json.properties.timeseries[0].data.instant.details.air_temperature

console.log(\`Air temperature: \${airTemperature}\`)
`,
			},
			{
				language: "python",
				codeString: `from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api.openepi.io/weather/locationforecast",
        params={"lat": 52.520008, "lon": 13.404954},
    )

    # Get the instant air temperature
    json = response.json()
    air_temperature = json["properties"]["timeseries"][0]["data"]["instant"]["details"][
        "air_temperature"
    ]

    print(f"Air temperature: {air_temperature}")
`,
			},
		]}
	/>
)
