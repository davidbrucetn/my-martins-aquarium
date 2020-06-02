// Convert location object data to HTML section with location, description, and picture

const locationConverter = (locationObj) => {

    //store HTML String of object data in HTML section
    const locationHTMLRepresentation = `<section class="location">
    <div>
        <img class="location__picture"
            src=${locationObj.picture}
            alt="Beautiful picture of ${locationObj.name}" />
    </div>
    <div class="location__details">
    <strong>${locationObj.name}</strong> - ${locationObj.description}
    </div>
</section>`;
    
    return locationHTMLRepresentation;
}