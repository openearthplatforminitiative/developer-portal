const response = await fetch(
  'https://api-test.openepi.io/flood/summary?' +
    new URLSearchParams({
      lon: '33.575897',
      lat: '-1.375532',
    })
);
const json = await response.json();

// Get the minimum forecasted discharge
const minDischarge = json.queried_location.features[0].properties.min_dis;

console.log(`Minimum forecasted discharge: ${minDischarge}`);
