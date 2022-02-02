const listTitleElement = document.getElementById("titel");
const listTitle = document.createElement("h3");
listTitle.textContent = "Tv merken"

listTitleElement.appendChild(listTitle)

const megaList = document.getElementById('lijst');

inventory.map((listTvs) => {
    const newList = document.createElement('li');
    newList.textContent = listTvs.brand

    return megaList.appendChild(newList)
})

const emptySpace = document.createElement('br')
megaList.appendChild(emptySpace)