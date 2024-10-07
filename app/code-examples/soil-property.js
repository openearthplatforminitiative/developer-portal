// Get the mean value of the soil property at the queried location and depth
const response = await fetch(
	"https://api.openepi.io/soil/property?" +
		new URLSearchParams({
			lon: "9.58",
			lat: "60.1",
			depths: "0-5cm",
			properties: "bdod",
			values: "mean",
		})
)
const json = await response.json()

// Get the soil information for the bdod property
const bdod = json.properties.layers[0]

// Get the soil property unit and name
const bdodUnit = bdod.unit_measure.mapped_units
const bdodName = bdod.name

// Get the soil property mean value at depth 0-5cm
const bdodDepth = bdod.depths[0].label
const bdodValue = bdod.depths[0].values.mean

console.log(
	`Soil property: ${bdodName}, Depth: ${bdodDepth}, Value: ${bdodValue} ${bdodUnit}`
)
