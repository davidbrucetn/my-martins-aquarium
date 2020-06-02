/*
    Generating a list of fish in HMTL reprensentations and putting it in the browser
*/

const fishList = () => {
        // Iterate the collection of fish objects 
    for (const currentFishObject of fishCollection) {

        // convert the current fish to HTML
        const fishHTML = fishConverter(currentFishObject);
        
        // find the <article> element in index.html for the fish list
        const fishArticleElement = document.querySelector(".fishList");
        // build concatenated HTML list of fish from fishCollection
        fishArticleElement.innerHTML += fishHTML
    }
}

