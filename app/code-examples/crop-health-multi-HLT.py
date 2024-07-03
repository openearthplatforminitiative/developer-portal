from httpx import Client

with Client() as client:
    # Get the multi-HLT model prediction for image cocoa.jpg 
    # passed as a binary file in the request body
    response_multi = client.post(
        url="https://api-test.openepi.io/crop-health/predictions/multi-HLT",
        content=open("cocoa.jpg", "rb").read(),
    )

    data_multi = response_multi.json()
    # Print the prediction for the MLN_maize class
    print(data_multi["MLN_maize"])
