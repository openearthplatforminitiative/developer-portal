from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api-test.openepi.io/flood/summary",
        params={"lon": 33.575897, "lat": -1.375532},
    )

    # Get the forecasted peak day
    json = response.json()
    peak_day = json["queried_location"]["features"][0]["properties"]["peak_day"]

    print(f"Forecasted peak day: {peak_day}")
