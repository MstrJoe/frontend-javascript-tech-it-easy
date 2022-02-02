const megaList = document.getElementById('lijst');

const listTitle = document.createElement('h3');
listTitle.textContent = "Brand names"

megaList.appendChild(listTitle)

inventory.map((listTvs) => {
    const newList = document.createElement('li');
    newList.textContent = listTvs.brand

    return megaList.appendChild(newList)
})