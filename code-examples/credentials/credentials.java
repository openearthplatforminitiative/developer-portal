package io.openepi;

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
}