from httpx import Client

with Client() as client:
    # Get the mean and the 0.05 quantile of the soil properties at the queried location and depths
    response_multi = client.get(
        url="https://api-test.openepi.io/soil/property",
        params={
            "lat": 60.1,
            "lon": 9.58,
            "depths": ["0-5cm", "100-200cm"],
            "properties": ["bdod", "phh2o"],
            "values": ["mean", "Q0.05"],
        },
    )

    json_multi = response_multi.json()

    # Get the soil information for the phh2o property
    phh2o = json_multi["properties"]["layers"][1]

    # Get the soil property unit and name
    phh2o_name = phh2o["name"]
    phh2o_unit = phh2o["unit_measure"]["mapped_units"]

    # Get the soil property 0.05 quantile value at depth 100-200cm
    phh2o_depth = phh2o["depths"][1]["label"]
    phh2o_value = phh2o["depths"][1]["values"]["Q0.05"]

    print(
        f"Soil property: {phh2o_name}, Depth: {phh2o_depth}, Value: {phh2o_value} {phh2o_unit}"
    )
