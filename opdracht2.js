//Opdracht 2a
let result = 0;

for (let i = 0; i < inventory.length; i++) {
    result = result + inventory[i].sold
}

console.log(result)


//Opdracht 2b
const soldTvs = document.getElementById("container1")

const soldTvsTitle = document.createElement('h3')
soldTvsTitle.textContent = "Aantal verkochte tv's";

const allSoldTvs = document.createElement('h4');
allSoldTvs.textContent = result;
allSoldTvs.setAttribute('id', 'result-color')

soldTvs.appendChild(soldTvsTitle);
soldTvs.appendChild(allSoldTvs)

//Opdracht 2c
let output = 0

for (let i = 0; i < inventory.length; i++) {
    output = output + inventory[i].originalStock;
}
console.log(output)

//Opdracht 2d
const container2 = document.getElementById('container2');

const numberOfTvsBought = document.createElement("h3");
numberOfTvsBought.textContent = "Aantal tv's ingekocht";

const numberTvsInStock = document.createElement('h4');
numberTvsInStock.textContent = output;
numberTvsInStock.setAttribute('id', 'output-color');

container2.appendChild(numberOfTvsBought);
container2.appendChild(numberTvsInStock);


//Opdracht 2e
let whatsLeft = 0;

for (let i = 0; i < inventory.length; i++) {
    whatsLeft = whatsLeft + inventory[i].originalStock - inventory[i].sold
}

const container3 = document.getElementById('container3');

const currentStock = document.createElement("h3");
currentStock.textContent = "Aantal tv's op voorraad";

const tvsCurrentStock = document.createElement("h4");
tvsCurrentStock.textContent = whatsLeft;
tvsCurrentStock.setAttribute('id', 'whatsLeft-color');

container3.appendChild(currentStock)
container3.appendChild(tvsCurrentStock)




