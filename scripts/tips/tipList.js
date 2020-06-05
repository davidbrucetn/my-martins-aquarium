const tipVisibilityButton = document.querySelector(".toggleTips")

tipVisibilityButton.addEventListener("click", clickEvent => {
    // tip article -----------------> classes in article -> toggle hidden class
    document.querySelector(".tipList").classList.toggle("hidden")
    if (document.querySelector(".tipList").classList.contains("hidden")) {
        document.querySelector(".toggleTips").innerHTML="Hide Tips"
        
    } else {
        document.querySelector(".toggleTips").innerHTML="Show Tips"
    }
})

// convert tip object to HTML List of Sections

const tipList = () => {
    for (const currTipObj of tipCollection) {

        //convert tip data to HTML
        const tipHTML = tipConverter(currTipObj);

        //find tip article element for innerHTML insertion
        const tipArticleElement = document.querySelector(".tipList");

        //build concatenated sections of tips
        tipArticleElement.innerHTML += tipHTML;
    }
}