//opdracht 4a
const tvSpecsElement = document.getElementById('container4');

function showTvInfo(item) {
    return `${item.brand} ${item.type} - ${item.name}`;
}


//opdracht 4b
function showTvPrice(item) {
    return `€${item.price},-`;
}


//opdracht 4c
function showTvSizes(item) {
    let tvSizesString = '';
    for (let i = 0; i < item.availableSizes.length; i++) {
        tvSizesString = tvSizesString + item.availableSizes[i] + "inch (" + item.availableSizes[i] * 2.54 + "cm)";
        if (item.availableSizes.length > 1 && i !== item.availableSizes.length - 1) {
            tvSizesString = tvSizesString + " | "
        }
    }
    return tvSizesString;
}


//opdracht 4 d + e (d is een onderdeel van e dus ik ben gelijk e gaan doen)
function showTvSpecs(item) {
    for (let i = 0; i < item.length; i++) {
        const tvName = document.createElement("div");
        tvName.textContent = showTvInfo(item[i]);

        const tvPrice = document.createElement("div");
        tvPrice.textContent = showTvPrice(item[i]);

        const tvSizes = document.createElement("div");
        tvSizes.textContent = showTvSizes(item[i]);

        tvSpecsElement.appendChild(tvName);
        tvSpecsElement.appendChild(tvPrice);
        tvSpecsElement.appendChild(tvSizes);

        const emptySpace = document.createElement('br')
        tvSpecsElement.appendChild(emptySpace)
    }
}

showTvSpecs(inventory)
