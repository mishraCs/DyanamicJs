function getItemLocalStorage() {
    const storageString = localStorage.getItem('items');
    if (storageString) {
        return JSON.parse(storageString);
    }
    return [];
}

function getItemValue() {
    let itemValue = document.getElementById('item-input').value;
    let products = getItemLocalStorage();
    if (products.length > 0) {
        const existingProduct = products.find(product => product.itemName === itemValue);
        if (existingProduct) {
            alert('Item already added');
            return;
        }
    }
    const newProduct = {
        itemName: itemValue
    };
    products.push(newProduct);
    localStorage.setItem('items', JSON.stringify(products));
    return fun(); 
}

function fun() {
    document.getElementById('item-input').value = '';
    return;
}

function deleteLocalStorageItem(itemName) {
    let products = getItemLocalStorage();
    const updatedProducts = products.filter(product => product.itemName !== itemName);
    localStorage.setItem('items', JSON.stringify(updatedProducts));
    alert('Item deleted: ' + itemName);
    console.log('Updated items:', updatedProducts);
    location.reload();
}

let products = getItemLocalStorage();
const ulList = document.getElementById('item-ul-list');

if (products.length > 0) {
    products.forEach(product => {
        const itemRow = document.createElement('div');
        itemRow.className = 'item-row';

        const itemNameDiv = document.createElement('div');
        itemNameDiv.className = 'item-name'; 
        const itemLi = document.createElement('li');
        itemLi.id = 'item' + product.itemName; 
        itemLi.className = 'items';
        itemLi.textContent = product.itemName;
        itemNameDiv.appendChild(itemLi);

        const itemDeleteDiv = document.createElement('div');
        itemDeleteDiv.className = 'item-delete';
        const itemDel = document.createElement('button');
        itemDel.className = 'delete';
        itemDel.textContent = 'Delete';
        itemDel.addEventListener('click', () => deleteLocalStorageItem(product.itemName));
        itemDeleteDiv.appendChild(itemDel);

        itemRow.appendChild(itemNameDiv);
        itemRow.appendChild(itemDeleteDiv);

        ulList.appendChild(itemRow);
    });
}
