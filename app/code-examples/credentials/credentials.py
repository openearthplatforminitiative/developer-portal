with Client() as client:

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
        url="https://api-dev1.openepi.io/weather/locationforecast",
        params={"lat": 52.520008, "lon": 13.404954},
        headers={"Authorization": f"Bearer {token}"},
    )
    json = response.json()
    air_temperature = json["properties"]["timeseries"][0]["data"]["instant"]["details"]["air_temperature"]

    print(f"Air temperature: {air_temperature}")