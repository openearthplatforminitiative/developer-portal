from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api-test.openepi.io/weather/locationforecast",
        params={"lat": 52.520008, "lon": 13.404954},
    )

    # Get the instant air temperature
    json = response.json()
    air_temperature = json["properties"]["timeseries"][0]["data"]["instant"]["details"][
        "air_temperature"
    ]

    print(f"Air temperature: {air_temperature}")
