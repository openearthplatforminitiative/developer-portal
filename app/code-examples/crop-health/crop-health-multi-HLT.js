const imageData = fs.readFileSync("cocoa.jpg")

// Get the multi-HLT model prediction for image cocoa.jpg
// passed as a binary file in the request body
fetch.then(async (fetch) => {
	const response_multi = await fetch(
		"https://api.openepi.io/crop-health/predictions/multi-HLT",
		{
			method: "POST",
			body: imageData,
		}
	)
	const data_multi = await response_multi.json()
	// Print the prediction for the MLN_maize class
	console.log(data_multi.MLN_maize)
})
