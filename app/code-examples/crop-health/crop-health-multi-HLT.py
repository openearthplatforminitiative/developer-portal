from httpx import Client

# Open the image file as a binary file
with open("cocoa.jpg", "rb") as image_file:
    image_bytes = image_file.read()

with Client() as client:
    # Get the multi-HLT model prediction for image cocoa.jpg
    # passed as a binary file in the request body
    response_multi = client.post(
        url="https://api.openepi.io/crop-health/predictions/multi-HLT",
        content=image_bytes,
    )

    data_multi = response_multi.json()
    # Print the prediction for the MLN_maize class
    print(data_multi["MLN_maize"])
