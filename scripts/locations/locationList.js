
const locationVisibilityButton = document.querySelector(".toggleLocations")

locationVisibilityButton.addEventListener("click", clickEvent => {

    const fishListHidden = document.querySelector(".fishList").classList.contains("hidden")

    const leftDiv = document.querySelector(".underTheBanner__left")

    // find location article element with class locationList
    const locationListElement =  document.querySelector(".locationList")
    // point to classes and toggle (add or remove) hidden class for css to make hidden
    locationListElement.classList.toggle("hidden")
    // equate to this ->
    //document.querySelector(".locationList").classList.toggle("hidden")

    if (locationListElement.classList.contains("hidden")) {
        document.querySelector(".toggleLocations").innerHTML="Show Locations"
                
    } else {
        document.querySelector(".toggleLocations").innerHTML="Hide Locations"
    }

    leftBackground();
})


//Iterate through location collection, call converter to get HTML, call DOM query for article to insert,
//   and build concatenation of all locations for display in index.html

const locationList = () => {
    for (const currLocationObj of locationCollection) {

        //convert obj data to HTML
        const locationHTML = locationConverter(currLocationObj);

        //find location article for section insertion
        const locationArticleElement = document.querySelector(".locationList");

        //concenation HTML and data sections for article insertion
        locationArticleElement.innerHTML += locationHTML;
        
    }
}