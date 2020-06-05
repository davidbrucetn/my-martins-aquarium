const tipVisibilityButton = document.querySelector(".toggleTips")

tipVisibilityButton.addEventListener("click", clickEvent => {
    // tip article -----------------> classes in article -> toggle hidden class
    const rightDiv = document.querySelector(".underTheBanner__right");
    document.querySelector(".tipList").classList.toggle("hidden")
    if (document.querySelector(".tipList").classList.contains("hidden")) {
        document.querySelector(".toggleTips").innerHTML="Show Tips"
        rightDiv.classList.toggle("page__img__right")
        rightDiv.style.backgroundImage = "url(../images/page_right_tentacles.png)"
        
    } else {
        document.querySelector(".toggleTips").innerHTML="Hide Tips"
        rightDiv.classList.toggle("page__img__right")
        rightDiv.style.backgroundImage = ""

    }
    leftBackground();
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