const imageData = fs.readFileSync('cocoa.jpg');

// Get the prediction for image cocoa.jpg passed as a binary file in the request body
fetch.then(async fetch => {
    const response_binary = await fetch(
        "https://api-test.openepi.io/crop-health/predictions/binary",
        {
            method: "POST",
            body: imageData,
        }
    );
    const data_binary = await response_binary.json();
	// Print the prediction for the healthy class
    console.log(data_binary.HLT);
});
