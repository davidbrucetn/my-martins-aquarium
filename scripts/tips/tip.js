// convert tip object to HTML

const tipConverter = (tipObj) => {
    // Store HTML in Var
    const tipHTMLRepresentation = `<section class="tip">${tipObj.tip}</section>`;
    return tipHTMLRepresentation;
}