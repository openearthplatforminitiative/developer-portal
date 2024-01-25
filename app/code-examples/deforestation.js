const response = await fetch(
  'https://api-test.openepi.io/deforestation/basin?' +
    new URLSearchParams({
      lon: '30.0619',
      lat: '-1.9441',
      start_year: '2010',
      end_year: '2019',
    })
);
const data = await response.json();

// Get the total forest cover loss within the returned river basin over the time period
const loss = json.features[0].properties.daterange_tot_treeloss;

console.log(`Total forest cover loss: ${loss} km^2`);
