/*
    This function will convert a single quote object to an HTML representation and return it
*/

const quoteConverter = (quoteObject) => {

    // declare var with val as string for HTML fish
    const quoteHTMLRepresentation = `
    <section class="quote">${quoteObject.quote} - ${quoteObject.author}
    </section>`;
    return quoteHTMLRepresentation;
}