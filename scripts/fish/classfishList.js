// Org code

const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()
    const holyRank = "holy"
    for (const currentFishObject of fishObjectsArray) {
        const holyHTML = fishConverter(currentFishObject,holyRank);
        const holyFishArticleElement = document.querySelector(".fishList");
        holyFishArticleElement.innerHTML += holyHTML
    }
}

// Function to show soldier fish in the browser
const showSoldierFish = () => {
    const fishObjectsArray = soldierFish()
    const soldierRank = "soldier"
    for (const currentFishObject of fishObjectsArray) {
        const soldierHTML = fishConverter(currentFishObject,soldierRank);
        const soldierArticleElement = document.querySelector(".fishList");
        soldierArticleElement.innerHTML += soldierHTML
    }

}

// Function to show common fish in the browser
const showCommonFish = () => {
    const fishObjectsArray = commonFish()
    const commonRank = "common"
    for (const currentFishObject of fishObjectsArray) {
        const commonFishHTML = fishConverter(currentFishObject,commonRank);
        const commonArticleElement = document.querySelector(".fishList");
        commonArticleElement.innerHTML += commonFishHTML
    }

}


const fishList = () => {
    showHolyFish();
    showSoldierFish();
    showCommonFish();


}

