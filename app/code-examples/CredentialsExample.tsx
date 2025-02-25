import CodeBlockWrapper from "@/app/components/CodeBlockWrapper"

export const CredentialsExample = () => (
	<CodeBlockWrapper
		codeBlocks={[
			{
				language: "java",
				codeString: `package io.openepi;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


public class Main {
    public static void main(String[] args) {
        String clientId = "<YOUR_CLIENT_ID>";
        String clientSecret = "<YOUR_CLIENT_SECRET>";
        String authUrl = "https://auth.openepi.io/realms/openepi/protocol/openid-connect/token";
        String apiUrl = "https://api.openepi.io/weather/locationforecast?lat=60.1&lon=9.58";

        try (HttpClient client = HttpClient.newHttpClient()) {
            // Get access token
            HttpRequest tokenRequest = HttpRequest.newBuilder()
                    .uri(URI.create(authUrl))
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .POST(HttpRequest.BodyPublishers.ofString("grant_type=client_credentials&client_id=" + clientId + "&client_secret=" + clientSecret)).build();

            HttpResponse<String> tokenResponse = client.send(tokenRequest, HttpResponse.BodyHandlers.ofString());
            if (tokenResponse.statusCode() == 200) {
                String accessToken = JsonParser.parseString(tokenResponse.body())
                        .getAsJsonObject().get("access_token").getAsString();

                // Use access token
                HttpRequest apiRequest = HttpRequest.newBuilder().uri(URI.create(apiUrl))
                        .header("Authorization", "Bearer " + accessToken)
                        .GET().build();

                HttpResponse<String> apiResponse = client.send(apiRequest, HttpResponse.BodyHandlers.ofString());
                if (apiResponse.statusCode() == 200) {
                    JsonObject apiResponseJson = JsonParser.parseString(apiResponse.body()).getAsJsonObject();
                    double airTemperature = apiResponseJson
                            .get("properties").getAsJsonObject()
                            .get("timeseries").getAsJsonArray().get(0).getAsJsonObject()
                            .get("data").getAsJsonObject()
                            .get("instant").getAsJsonObject()
                            .get("details").getAsJsonObject()
                            .get("air_temperature").getAsDouble();

                    System.out.println("Air Temperature: " + airTemperature);
                }
            }
        } catch (IOException | InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}`,
			},
			{
				language: "javascript",
				codeString: `const tokenResponse = await fetch(
	"https://auth.openepi.io/realms/openepi/protocol/openid-connect/token",
	{
		method: "POST",
		body: JSON.stringify({
			grant_type: "client_credentials",
			client_id: "<YOUR_CLIENT_ID>",
			client_secret: "<YOUR_CLIENT_SECRET>",
		}),
	}
)
const tokenJson = await tokenResponse.json()
const token = tokenJson.access_token

// Use access token to get data

const weatherResponse = await fetch(
	"https://api.openepi.io/weather/locationforecast?lat=52.520008&lon=13.404954",
	{
		headers: { Authorization: \`Bearer \${token}\` },
	}
)
const weatherJson = await weatherResponse.json()
const airTemperature =
	weatherJson.properties.timeseries[0].data.instant.details.air_temperature
console.log(\`Air temperature: \${airTemperature}\`)
`,
			},
			{
				language: "python",
				codeString: `with Client() as client:

    # Get Access token    
    response = client.post(
        url="https://auth.openepi.io/realms/openepi/protocol/openid-connect/token",
        data={
            "grant_type": "client_credentials",
            "client_id": "<YOUR_CLIENT_ID>",
            "client_secret": "<YOUR_CLIENT_SECRET>",
        },
    )

    
    token = response.json()['access_token']

    # Use access token to get data
    response = client.get(
        url="https://api.openepi.io/weather/locationforecast",
        params={"lat": 52.520008, "lon": 13.404954},
        headers={"Authorization": f"Bearer {token}"},
    )
    json = response.json()
    air_temperature = json["properties"]["timeseries"][0]["data"]["instant"]["details"]["air_temperature"]

    print(f"Air temperature: {air_temperature}")`,
			},
			{
				language: "bash",
				codeString: `
response=\$(curl -s -X POST "https://auth.openepi.io/realms/openepi/protocol/openid-connect/token" \
  -H "Content-Type: application/json" \
  -d '{"grant_type": "client_credentials", "client_id": "<YOUR_CLIENT_ID>", "client_secret": "<YOUR_CLIENT_SECRET>"}')


# This example use jq to parse the json response
# https://stedolan.github.io/jq/
token=\$(echo \$response | jq -r .access_token)


# Use access token to get data
weather_response=\$(curl -s -X GET "https://api.openepi.io/weather/locationforecast?lat=52.520008&lon=13.404954" \
  -H "Authorization: Bearer \$token")

air_temperature=\$(echo \$weather_response | jq -r '.properties.timeseries[0].data.instant.details.air_temperature')

echo "Air temperature: \$air_temperature"
`,
			},
		]}
	/>
)
