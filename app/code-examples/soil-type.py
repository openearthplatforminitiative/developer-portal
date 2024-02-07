from httpx import Client

with Client() as client:
    # Get the soil type at the queried location
    # and the probability of the top 3 most probable soil types
    response = client.get(
        url="https://api-test.openepi.io/soil/type",
        params={"lat": 60.1, "lon": 9.58, "top_k": 3},
    )

    json = response.json()

    # Get the soil type and probability for the second most probable soil type
    soil_type = json["properties"]["probabilities"][1]["soil_type"]
    probability = json["properties"]["probabilities"][1]["probability"]

    print(f"Soil type: {soil_type}, Probability: {probability}")
