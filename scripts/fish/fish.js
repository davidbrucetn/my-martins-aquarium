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

const mostHolyFish = () => {
    const holyFish = [];

    for (const mostHoly of fishCollection) {
        if (mostHoly.length % 3 === 0 ) {
             holyFish.push(mostHoly);
        }
    }
    return holyFish
}

// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    const soldiers = [];

    for (const soldier of fishCollection) {
        if ((soldier.length % 5 === 0 ) && !(soldier.length % 3 === 0)) {

            soldiers.push(soldier);
        }
    }
    return soldiers
    
}

// Any fish not a multiple of 3 or 5
const commonFish = () => {
    const regularFish = [];
    for (const commoner of fishCollection) {
        if ((commoner.length % 3 !== 0) && (commoner.length % 5 !== 0)) {
            
            regularFish.push(commoner);
        }
    }
    return regularFish
}