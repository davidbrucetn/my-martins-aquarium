
const locationVisibilityButton = document.querySelector(".toggleLocations")

locationVisibilityButton.addEventListener("click", clickEvent => {

    // find location article element with class locationList
    const locationListArticle =  document.querySelector(".locationList")
    // point to classes and toggle (add or remove) hidden class for css to make hidden
    locationListArticle.classList.toggle("hidden")
    // equate to this ->
    //document.querySelector(".locationList").classList.toggle("hidden")

    if (document.querySelector(".locationList").classList.contains("hidden")) {
        document.querySelector(".toggleLocations").innerHTML="Hide Locations"
        
    } else {
        document.querySelector(".toggleLocations").innerHTML="Show Locations"
    }
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