
// Hide Fish Completely
//   set button object for selector with class toggleFish
const fishVisibilityButton = document.querySelector(".toggleFish")

// Listen for click on button 
fishVisibilityButton.addEventListener("click", clickEvent => {
    // if clicked add class hidden and CSS will hide button because of "hidden" class
    document.querySelector(".fishList").classList.toggle("hidden");
    if (document.querySelector(".fishList").classList.contains("hidden")) {
        document.querySelector(".toggleFish").innerHTML="Hide Fish"
        
    } else {
        document.querySelector(".toggleFish").innerHTML="Show Fish"
    }
})


//----------------------------------------------------->
const [red, green, blue] = [186,85,211]
const section1 = document.querySelector('.fishList')

window.addEventListener('scroll', () => {
  let y = 1 + (window.scrollY || window.pageYOffset) / 1500
  y = y < 1 ? 1 : y // ensure y is always >= 1 (due to Safari's elastic scroll)
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
//-----------------------------------------------------<

 // Clear innerHTML for article
// set var for select button with class typeChoice
const fishTypeDropdown = document.querySelector(".typeChoice")

// set element target for class fishList
const contentTarget = document.querySelector(".fishList")

// declare function to clear innerHTML from fishList article
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
        displayCertainFish(userChoice);
    }
    // If the user chose Soldier, clear the list and only show soldier fish
    if (userChoice === "soldier") {
        clearFishList()
        //showHolyFish()
        displayCertainFish(userChoice);
    }
    // If the user chose Common, clear the list and only show common fish
    if (userChoice === "common") {
        clearFishList()
        displayCertainFish(userChoice);
        
    }
})


// function to show all types of fish
const fishList = () => {
    
    const fishTypes = ["holy","soldier","common"]
    let fishTypeArray = []

    for (const fishType of fishTypes) {
        fishTypeArray = geFilterFish(fishType);
        displayFish(fishTypeArray,fishType);
    }
}

const displayCertainFish = (rank) => {
    const fishTypeArray = geFilterFish(rank)
    displayFish(fishTypeArray,rank)
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
