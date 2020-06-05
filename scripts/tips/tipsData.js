// Collection of tips

let tipCollection = []

//return promise of location json data to array
const getTipData = () => {
    // fetch string data and then
    return fetch("http://localhost:8088/tips").then(
        //param to catch string-to-array
        (tipHttpResponse) => {
            return tipHttpResponse.json()
        }
    )
    .then(
        (arrayOfTips) => {
            tipCollection = arrayOfTips
         }
    )
}