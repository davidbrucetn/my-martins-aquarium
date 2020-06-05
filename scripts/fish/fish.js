/*
    This function will convert a single fish object to an HTML representation and return it
*/

const fishConverter = (fishObject,rank) => {

    // declare var with val as string for HTML fish
    
    const fishHTMLRepresentation = `
    <section class="${rank} fish">
        <div class="">
         <img class="fish__picture" src=${fishObject.picture}
            alt="${fishObject.name} the ${fishObject.species}" />
        </div>
        <div class="fish__details">
            <ul>
                <li>Species: ${fishObject.species}</li>
                <li>Length: ${fishObject.length}</li>
                <li>Name: ${fishObject.name}</li>
                <li>Location: ${fishObject.location}</li>
                <li>Food: ${fishObject.food}</li>
            </ul>
         </div>
    </section>`;
    return fishHTMLRepresentation;
}



const geFilterFish = (rank) => {
    var filteredFish = [];
    if (rank === "holy") {
        filteredFish = fishCollection.filter(fishObj => fishObj.length % 3 === 0);
    } else if (rank === "soldier") {
        filteredFish = fishCollection.filter(fishObj => (fishObj.length % 5 === 0) && (fishObj.length % 3 !== 0));
    } else {
        filteredFish = fishCollection.filter(fishObj => (fishObj.length % 5 !== 0) && (fishObj.length % 3 !== 0));
    }

    return filteredFish
}




