from httpx import Client

with Client() as client:
    # Get the binary model prediction for image cocoa.jpg 
    # passed as a binary file in the request body
    response_binary = client.post(
        url="https://api-test.openepi.io/crop-health/predictions/binary",
        content=open("cocoa.jpg", "rb").read(),
    )

    data_binary = response_binary.json()
    # Print the prediction for the healthy class
    print(data_binary["HLT"])