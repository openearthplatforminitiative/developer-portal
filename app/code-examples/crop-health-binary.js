const image = new FormData();
image.append('file', fs.createReadStream('cocoa.jpg'));

// Get the prediction for image cocoa.jpg passed as a binary file in the request body
const response_binary = await fetch(
    "https://api-test.openepi.io/crop-health/predictions/binary", {
      method: "POST",
      body: image
    }
  );
const data_binary = await response_binary.json();
  
console.log(data_binary.HLT);