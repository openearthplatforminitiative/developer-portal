const image = new FormData();
image.append('file', fs.createReadStream('cocoa.jpg'));

// Get the prediction for image cocoa.jpg passed as a binary file in the request body
const response_multi = await fetch(
    "https://api-test.openepi.io/crop-health/predictions/multi-HLT", {
      method: "POST",
      body: image
    }
  );
const data_multi = await response_multi.json();
  
console.log(data_multi.HLT);