
response=$(curl -s -X POST "https://auth.openepi.io/realms/openepi/protocol/openid-connect/token" \
  -H "Content-Type: application/json" \
  -d '{"grant_type": "client_credentials", "client_id": "<YOUR_CLIENT_ID>", "client_secret": "<YOUR_CLIENT_SECRET>"}')

# This example use jq to parse the json response
# https://stedolan.github.io/jq/
token=$(echo $response | jq -r .access_token)

# Use access token to get data
weather_response=$(curl -s -X GET "https://api.openepi.io/weather/locationforecast?lat=52.520008&lon=13.404954" \
  -H "Authorization: Bearer $token")

air_temperature=$(echo $weather_response | jq -r '.properties.timeseries[0].data.instant.details.air_temperature')

echo "Air temperature: $air_temperature"
