//** Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven. Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.
const tvBrand = inventory.map((tv) => {
    return tv.brand;
});
console.log(tvBrand);

//Script om de code hierboven op de pagina te weergeven.
//Code uit-gecomment zodat er geen dubbele lijst op de pagina kwam te staan, zie volgende opdracht.

/*const brandList = document.getElementById('brand-list');
tvBrand.forEach(function (tvItem) {
    const li = document.createElement('li');
    li.textContent = tvItem;
    brandList.appendChild(li);
});*/


//** Opdracht 3b: Schrijf de code uit 3a om naar een functie die een array met tv-objecten verwacht. Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!
function tvInventoryList() {
    const tvInventory = document.getElementById('brand-inventory-list');
    tvInventory.innerHTML = '';

    for (let i = 0; i < inventory.length; i++) {
        const tvItem = inventory[i];
        const li = document.createElement('li');
        li.innerHTML = tvItem.brand;
        tvInventory.appendChild(li);
    }
}
tvInventoryList();
