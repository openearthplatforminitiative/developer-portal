from httpx import Client

with Client() as client:
    response = client.get(
        url="https://api-test.openepi.io/deforestation/basin",
        params={"lon": 30.0619, "lat": -1.9441, "start_year": 2010, "end_year": 2019},
    )

    # Get the total forest cover loss within the returned river basin over the time period
    json = response.json()
    loss = json["features"][0]["properties"]["daterange_tot_treeloss"]

    print(f"Total forest cover loss: {loss} km^2")
