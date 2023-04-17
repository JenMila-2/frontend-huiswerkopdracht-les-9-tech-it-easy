//** Opdracht 4a: Maak een herbruikbare functie die een string genereert voor de naam van één tv en deze teruggeeft in het format [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
function generateStringName(tvItem) {
    return `${tvItem.brand} ${tvItem.type} - ${tvItem.name}`;
}
const tvItemString = generateStringName(inventory[0]);
console.log(tvItemString);


//** Opdracht 4b: Maak een herbruikbare functie die de prijs van één tv als parameter verwacht (zoals 379 of 159) teruggeeft in het format €379,- of €159,-.
//Versie 1: Vraagt om prijs
function convertPrice(tvPrice) {
    return '€' + tvPrice;
}
const tvPrice = convertPrice(109);
console.log(tvPrice);
//Versie 2: Vraagt om indexnummer van entry
function convertedPrice(tvPrice) {
    return `€${tvPrice.price}`;
}
const priceOfTv = convertedPrice(inventory[0]);
console.log(priceOfTv);


//** Opdracht 4c: Maak een herbruikbare functie die een string genereert voor alle beschikbare schermgroottes van één tv. De functie geeft dit terug in het format [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Let op: om één string te genereren uit een array van schermgroottes zul je een for-loop voor moeten gebruiken.
function generateStringTvSize(tvItem) {
    return tvItem.availableSizes.map((size) => {
        const convertedScreenSize = Math.round(size * 2.54);
        return `${size} inch (${convertedScreenSize} cm)`;
    }).join(' | ');
}
const tvItem = inventory[4];
const stringScreenSize = generateStringTvSize(tvItem);
console.log(stringScreenSize);


//** Opdracht 4d: Schrijf een script die de informatie van de Philips 43PUS6504/12 tv weergeeft op de pagina zoals onderstaand voorbeeld. Gebruik de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
//Onderstaande gebruikt om de informatie te injecteren in HTML.
const philipsName = document.getElementById('philips-tv-brand');
philipsName.textContent = generateStringName(inventory[0]);
const philipsPrice = document.getElementById('philips-tv-price');
philipsPrice.textContent = convertedPrice(inventory[0]);
const philipsScreenSize = document.getElementById('philips-tv-screen-size');
philipsScreenSize.textContent = generateStringTvSize(inventory[0]);

//Versie 2, alleen in de console log gebruikt
const tvPhilipsDetails = `${generateStringName(inventory[0])} ${convertedPrice(inventory[0])} ${generateStringTvSize(inventory[0])}`;
console.log(tvPhilipsDetails)


//** Opdracht 4e: Maak een herbruikbare functie die de informatie van alle tv's weergeeft op de pagina. Gebruik hiervoor de map-methode in combinatie met de functies die je hebt gemaakt in opdracht 4a, 4b en 4c.
const tvInventory = document.getElementById('tv-inventory');
function generateTvList(inventory) {
    const tvList = inventory.map((tvItem) => {
        const tvBrandName = generateStringName(tvItem);
        const tvPrice = convertedPrice(tvItem);
        const tvScreenSize = generateStringTvSize(tvItem);

        return `
            <p>
                <span>${tvBrandName}</span><br>
                <span>${tvPrice}</span><br>
                <span>${tvScreenSize}</span>
            </p>
        `;
    });
    tvInventory.innerHTML = tvList.join('');
}
generateTvList(inventory);



