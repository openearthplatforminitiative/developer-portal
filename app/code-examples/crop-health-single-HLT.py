from httpx import Client

# Open the image file as a binary file
with open("cocoa.jpg", "rb") as image_file:
    image_bytes = image_file.read()

with Client() as client:
    # Get the single-HLT model prediction for image cocoa.jpg 
    # passed as a binary file in the request body
    response_single = client.post(
        url="https://api-test.openepi.io/crop-health/predictions/single-HLT",
        content=image_bytes,
    )

    data_single = response_single.json()
    # Print the prediction for the CBSD class
    print(data_single["CBSD"])
