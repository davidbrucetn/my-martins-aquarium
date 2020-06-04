/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
let fishCollection = []

/*
const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        () => {

        }
    )
}
*/
// fetch pulls into reponse
const getFishData = () => {
    return fetch("http://localhost:8088/fish").then(
        (httpResponse) => { 
            return httpResponse.json()
        }
    )
    .then(
        (arrayOfFish) => {
            //console.log(arrayOfFish)  //100 percent sure the data is back
            fishCollection = arrayOfFish
        }
    )
}