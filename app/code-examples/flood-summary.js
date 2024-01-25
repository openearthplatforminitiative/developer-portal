const response = await fetch(
  'https://api-test.openepi.io/flood/summary?' +
    new URLSearchParams({
      lon: '33.575897',
      lat: '-1.375532',
    })
);
const json = await response.json();

// Get the forecasted peak day
const peakDay = json.queried_location.features[0].properties.peak_day;

console.log(`Forecasted peak day: ${peakDay}`);
