// convert tip object to HTML List of Sections

const tipList = () => {
    for (currTipObj of tipCollection) {

        //convert tip data to HTML
        const tipHTML = tipConverter(currTipObj);

        //find tip article element for innerHTML insertion
        const tipArticleElement = document.querySelector(".tipList");

        //build concatenated sections of tips
        tipArticleElement.innerHTML += tipHTML;
    }
}