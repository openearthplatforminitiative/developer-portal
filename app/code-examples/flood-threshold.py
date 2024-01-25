from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api-test.openepi.io/flood/threshold",
        params={"lon": 33.575897, "lat": -1.375532},
    )

    # Get the 2-year return period threshold
    json = response.json()
    threshold_2y = json["queried_location"]["features"][0]["properties"]["threshold_2y"]

    print(f"2-year return period threshold: {threshold_2y} m^3/s")
