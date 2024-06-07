const image = new FormData()
image.append("file", fs.createReadStream("cocoa.jpg"))

// Get the prediction for image cocoa.jpg passed as a binary file in the request body
const response_single = await fetch(
	"https://api-test.openepi.io/crop-health/predictions/single-HLT",
	{
		method: "POST",
		body: image,
	}
)
const data_single = await response_single.json()

console.log(data_single.HLT)