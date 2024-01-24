const response = await fetch(
  'https://api-test.openepi.io/weather/locationforecast?lat=52.520008&lon=13.404954'
);
const json = await response.json();

// Get the instant air temperature
const airTemperature =
  json.properties.timeseries[0].data.instant.details.air_temperature;

console.log(`Air temperature: ${airTemperature}`);
