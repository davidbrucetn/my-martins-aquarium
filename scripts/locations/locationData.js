// Locations Data Collection

let locationCollection = []

const getLocationData = () => {
    return fetch("http://localhost:8088/location").then(
        (locationHttpResponse) => {
            return locationHttpResponse.json()
        }
    ).then(
        (arrayOfLocations) => {
            locationCollection = arrayOfLocations
        }
    )
}