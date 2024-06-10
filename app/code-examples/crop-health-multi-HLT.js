const imageData = fs.readFileSync("cocoa.jpg")

// Get the multi-HLT model prediction for image cocoa.jpg
// passed as a binary file in the request body
fetch.then(async (fetch) => {
	const response_multi = await fetch(
		"https://api-test.openepi.io/crop-health/predictions/multi-HLT",
		{
			method: "POST",
			body: imageData,
		}
	)
	const data_multi = await response_multi.json()
	// Print the top 5 predictions
	console.log(data_multi)
})
