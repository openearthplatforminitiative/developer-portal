from httpx import Client

with Client() as client:
    # Get the prediction for image cocoa.jpg passed as a binary file in the request body
    response_binary = client.post(
        url="https://api-test.openepi.io/crop-health/predictions/binary",
        body=open("cocoa.jpg", "rb").read(),
    )

    data_binary = response_binary.json()
    print(data_binary["HLT"])