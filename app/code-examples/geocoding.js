const response = await fetch(
  'https://api-test.openepi.io/geocoding/?' +
    new URLSearchParams({ q: 'Berlin' })
);
const data = await response.json();

// prints the coordinates of the first result
console.log(data.features[0].geometry.coordinates);
