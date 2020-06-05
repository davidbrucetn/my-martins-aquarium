

 // Clear innerHTML for article
const fishTypeDropdown = document.querySelector(".typeChoice")

const contentTarget = document.querySelector(".fishList")
const clearFishList = () => contentTarget.innerHTML = ""

//listening for browser-generated even of "change", clickEvent.target ->what user selected

fishTypeDropdown.addEventListener("change", clickEvent => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value
    // If the user chose all, clear the list and only show all fish
    if (userChoice === "all") {
        clearFishList()
        //showHolyFish()
        fishList();
    }
    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        //showHolyFish()
        displayHolyFish();
    }
    // If the user chose soldier, clear the list and only show soldier fish
    if (userChoice === "soldier") {
        clearFishList()
        //showHolyFish()
        displaySoldierFish();
    }
    // If the user chose Common, clear the list and only show common fish
    if (userChoice === "plebs") {
        clearFishList()
        //showHolyFish()
        displayCommonFish();
    }
})

const fishList = () => {
    
    displayHolyFish();
    
    displaySoldierFish();

    displayCommonFish();
    
}


displayHolyFish = () => {
    const holy = geFilterFish("holy")
    displayFish(holy,"holy");
}

displaySoldierFish = () => {
    const soldier = geFilterFish("soldier")
    displayFish(soldier,"soldier");
}

displayCommonFish = () => {
    const common = geFilterFish("common");
    displayFish(common,"common");
}

const displayFish = (fishObjectsArray,rank) => {

    for (const currentFishObject of fishObjectsArray) {
        const fishHTML = fishConverter(currentFishObject,rank);
        const fishArticleElement = document.querySelector(".fishList");
        fishArticleElement.innerHTML += fishHTML

        // document element has html inserted from fishconverter w/o const variable
        //document.querySelector(".fishList").innerHTML += fishConverter(currentFishObject,rank);
    }
}

//   function -------> (params)   -> array.forEach(callback --> HTML ELEMENT <--return from (ObjData-to-HTML Converter)
//const displayFish = (fish,rank) => fish.forEach(f => document.querySelector(".fishList").innerHTML += fishConverter(f,rank)
//)
