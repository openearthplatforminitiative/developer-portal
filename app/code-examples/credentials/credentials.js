const tokenResponse = await fetch(
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
	`https://api.openepi.io/weather/locationforecast?lat=52.520008&lon=13.404954`,
	{
		headers: { Authorization: `Bearer ${token}` },
	}
)
const weatherJson = await weatherResponse.json()
const airTemperature =
	weatherJson.properties.timeseries[0].data.instant.details.air_temperature
console.log(`Air temperature: ${airTemperature}`)
