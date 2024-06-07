from httpx import Client

with Client() as client:
    # Get the prediction for image cocoa.jpg passed as a binary file in the request body
    response_single = client.post(
        url="https://api-test.openepi.io/crop-health/predictions/single-HLT",
        body=open("cocoa.jpg", "rb").read(),
    )

    data_single = response_single.json()
    print(data_single["HLT"])