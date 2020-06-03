/*
    Generating a list of fish in HMTL reprensentations and putting it in the browser
*/
// Function to show holy fish in the browser
const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()
    const rank = "holy"
    for (const currentFishObject of fishObjectsArray) {
        const fishHTML = fishConverter(currentFishObject,rank);
        const fishArticleElement = document.querySelector(".fishList");
        fishArticleElement.innerHTML += fishHTML
    }
}

// Function to show soldier fish in the browser
const showSoldierFish = () => {
    const fishObjectsArray = soldierFish()
    const rank = "soldier"
    for (const currentFishObject of fishObjectsArray) {
        const fishHTML = fishConverter(currentFishObject,rank);
        const fishArticleElement = document.querySelector(".fishList");
        fishArticleElement.innerHTML += fishHTML
    }

}

// Function to show common fish in the browser
const showCommonFish = () => {
    const fishObjectsArray = commonFish()
    const rank = "common"
    for (const currentFishObject of fishObjectsArray) {
        const fishHTML = fishConverter(currentFishObject,rank);
        const fishArticleElement = document.querySelector(".fishList");
        fishArticleElement.innerHTML += fishHTML
    }

}


const fishList = () => {
    showHolyFish();
    showSoldierFish();
    showCommonFish();


}

/*
const fishList = () => {
        // Iterate the collection of fish objects 
    for (const currentFishObject of fishCollection) {

        // convert the current fish to HTML
        const currentFishObject = fishConverter(currentFishObject);
        
        // find the <article> element in index.html for the fish list
        const fishArticleElement = document.querySelector(".fishList");
        // build concatenated HTML list of fish from fishCollection
        fishArticleElement.innerHTML += fishHTML
    }
}
*/