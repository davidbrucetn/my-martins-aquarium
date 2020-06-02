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