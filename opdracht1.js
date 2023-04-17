
//** Opdracht 1a: Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.
//Zowel een array van de name als type gemaakt om te loggen in de console. In de opdracht was mij niet helemaal duidelijk welke van de twee bedoeld werd.
//Logt alle tv names in de console
const tvNames = inventory.map((tv) => {
    return tv.name;
})
console.log(tvNames);
//Logt alle tv types in de console
const tvTypes = inventory.map((tv) => {
    return tv.type;
})
console.log(tvTypes);


//** Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.
const soldOutTVs = inventory.filter(tv => tv.sold === tv.originalStock);
console.log(soldOutTVs);

//Onderstaande code is om het resultaat weer te kunnen geven in de HTML-file. Werd niet gevraagd in de opdracht.
soldOutTVs.forEach(tv => {
    const li = document.createElement('li');
    li.textContent = `${tv.brand} - ${tv.name} | ${tv.type}`;
    document.getElementById('out-of-stock-models').appendChild(li);
});


//** Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
const hasAmbilight = inventory.filter((tv) => {
    return tv.options.ambiLight === true;
});
console.log(hasAmbilight);


//** Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.
//Kopie van de originele array gemaakt zodat het geen invloed heeft op de volgorde van de entries in de overige opdrachten.
function sortedPrice(inventory) {
    const copyOfInventory = [...inventory];
    return copyOfInventory.sort((a, b) => a.price - b.price);
}
console.log(sortedPrice(inventory));
