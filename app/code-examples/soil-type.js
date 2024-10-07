// Get the most probable soil type at the queried location
const response = await fetch(
	"https://api.openepi.io/soil/type?" +
		new URLSearchParams({
			lon: "9.58",
			lat: "60.1",
		})
)
const json = await response.json()

// Get the most probable soil type
const mostProbableSoilType = json.properties.most_probable_soil_type

console.log(`Most probable soil type: ${mostProbableSoilType}`)
