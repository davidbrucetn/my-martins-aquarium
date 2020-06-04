const fishList = () => {
    
    const holy = geFilterFish("holy")
    displayFish(holy,"holy");
    
    const soldier = geFilterFish("soldier")
    displayFish(soldier,"soldier");
    
    const common = geFilterFish("common");
    displayFish(common,"common");
}



const displayFish = (fishObjectsArray,rank) => {

    for (const currentFishObject of fishObjectsArray) {
        //const fishHTML = fishConverter(currentFishObject,rank);
        //const fishArticleElement = document.querySelector(".fishList");
        //fishArticleElement.innerHTML += fishHTML

        // document element has html inserted from fishconverter w/o const variable
        document.querySelector(".fishList").innerHTML += fishConverter(currentFishObject,rank);
    }
}

//   function -------> (params)   -> array.forEach(callback --> HTML ELEMENT <--return from (ObjData-to-HTML Converter)
//const displayFish = (fish,rank) => fish.forEach(f => document.querySelector(".fishList").innerHTML += fishConverter(f,rank)
//)
