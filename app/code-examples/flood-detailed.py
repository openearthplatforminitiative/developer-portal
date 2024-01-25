from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api-test.openepi.io/flood/detailed",
        params={"lon": 33.575897, "lat": -1.375532},
    )

    # Get the minimum forecasted discharge
    json = response.json()
    peak_day = json["queried_location"]["features"][0]["properties"]["min_dis"]

    print(f"Minimum forecasted discharge: {peak_day}")
