/* Generate list of quotes in HTML representations and putting it in the browser 
*/

const quoteList = () => {
    //iterate the collection of quote objects
    for (const currentQuoteObj of quoteCollection) {

        //convert current quote obj to HTML
        const quoteHTML = quoteConverter(currentQuoteObj);
        

        //find article for quotes to insert from index.html
        const quoteArticleElement = document.querySelector(".quoteList")
        

        //build concatenated HTML list of quotes from quoteCollection
        quoteArticleElement.innerHTML += quoteHTML;
        
    }
    
}