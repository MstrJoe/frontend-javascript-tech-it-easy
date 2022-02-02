//Opdracht 2

let result = 0;

for (let i = 0; i < inventory.length; i++) {
    result = result + inventory[i].sold
}

console.log(result)


//Opdracht 2b

const soldTvs = document.getElementById("container")

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

const container = document.getElementById("container2");

const tvsInStock = document.createElement("h3");
tvsInStock.textContent = "Aantal tv's";

const numberTvsInStock = document.createElement("h4");
numberTvsInStock.textContent = output;
numberTvsInStock.setAttribute('id', 'output-color')

container2.appendChild(tvsInStock);
container2.appendChild(numberTvsInStock);


//Opdracht 2e

const container3 = document.getElementById('container3');

const currentStock = document.createElement("h3")