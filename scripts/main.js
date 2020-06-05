// call functions to build sections

// build quote sections from collection
quoteList()

// build fish html sections
getFishData().then(
    () => {
        debugger
        fishList()
        //console.log(`before ${fishCollection}`)
    }
)

//setTimeout(console.log(`After ${fishCollection}`),10000);
//fishList()
getLocationData().then(
    () => {
        locationList();
    }
)
// build location html sections
//locationList()

// build tip html sections
getTipData().then(
    () => {
        tipList();
    }
)
