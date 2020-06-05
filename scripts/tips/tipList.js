const tipVisibilityButton = document.querySelector(".toggleTips")

tipVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".tipList").classList.toggle("hidden")
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