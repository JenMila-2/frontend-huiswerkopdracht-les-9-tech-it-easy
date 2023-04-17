//** Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let totalTVSold = 0;
for (let i = 0; i < inventory.length; i++) {
    totalTVSold += inventory[i].sold;
}
console.log(totalTVSold);


//** Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.
const tvsSold = document.getElementById('sold');
console.log(tvsSold);
tvsSold.textContent = totalTVSold;


//** Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.
let totalPurchased = 0;
for (let i = 0; i < inventory.length; i++) {
    totalPurchased += inventory[i].originalStock;
}
console.log(totalPurchased);


//** Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.
const totalTVPurchased = document.getElementById('purchased');
console.log(totalTVPurchased);
totalTVPurchased.textContent = totalPurchased;


//** Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.
let remainingStock = 0;
for (let i = 0; i < inventory.length; i++) {
    const currentStock = inventory[i].originalStock - inventory[i].sold;
    remainingStock += currentStock;
}
console.log(remainingStock);

const totalToBeSold = document.getElementById('to-be-sold');
console.log(totalToBeSold);
totalToBeSold.textContent = remainingStock;