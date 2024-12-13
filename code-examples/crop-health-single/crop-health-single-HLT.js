const imageData = fs.readFileSync("cocoa.jpg")

// Get the single-HLT model prediction for image cocoa.jpg
// passed as a binary file in the request body
fetch.then(async (fetch) => {
	const response_single = await fetch(
		"https://api.openepi.io/crop-health/predictions/single-HLT",
		{
			method: "POST",
			body: imageData,
		}
	)
	const data_single = await response_single.json()
	// Print the prediction for the CBSD class
	console.log(data_single.CBSD)
})
