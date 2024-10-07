from httpx import Client

# Open the image file as a binary file
with open("cocoa.jpg", "rb") as image_file:
    image_bytes = image_file.read()

with Client() as client:
    # Get the binary model prediction for image cocoa.jpg
    # passed as a binary file in the request body
    response_binary = client.post(
        url="https://api.openepi.io/crop-health/predictions/binary",
        content=image_bytes,
    )

    data_binary = response_binary.json()
    # Print the prediction for the healthy class
    print(data_binary["HLT"])
