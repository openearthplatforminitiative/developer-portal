const response = await fetch(
  'https://api-test.openepi.io/flood/threshold?' +
    new URLSearchParams({
      lon: '33.575897',
      lat: '-1.375532',
    })
);
const json = await response.json();

// Get the 2-year return period threshold
const threshold2y = json.queried_location.features[0].properties.threshold_2y;

console.log(`2-year return period threshold in m^3/s: ${threshold2y} m^3/s`);
