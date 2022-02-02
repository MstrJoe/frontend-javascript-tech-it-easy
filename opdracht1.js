//opdracht 1a
const tvNames = inventory.map((tv) => {
    return tv.brand;
})
console.log(tvNames)

//Opdracht 1b
const outOfStocks = inventory.filter((outOfStock) => {
    return outOfStock.originalStock === outOfStock.sold;
})
console.log(outOfStocks);

//Opdracht 1c
const ambilightTvs = inventory.filter((ambilightTv) => {
    return ambilightTv.options.ambiLight === true;
})
console.log(ambilightTvs);

//Opdracht 1d
function sortArray(tvs) {
    return tvs.sort((a, b) => {
        if (a.price - b.price > 0) {
            return 1;
        } else if (a.price - b.price < 0) {
            return -1;
        } else {
            return 0;
        }
    })
}

console.log(sortArray(inventory))