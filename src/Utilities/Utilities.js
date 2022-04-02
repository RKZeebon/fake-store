const getFromLocalStorage = () => {
    const storedItems = JSON.parse(localStorage.getItem('item_added'));
    return storedItems;
}



const addToLocalStorage = (title) => {
    const storedItems = getFromLocalStorage()

    let selectedProduct = {};

    if (!storedItems) {
        selectedProduct[title] = 1;
    }
    else {
        selectedProduct = storedItems;
        if (selectedProduct[title]) {
            selectedProduct[title] += 1;
        }
        else {
            selectedProduct[title] = 1;
        }
    }

    localStorage.setItem('item_added', JSON.stringify(selectedProduct))
}

const updateLocalStorage = (title) => {
    const storedItems = getFromLocalStorage()
    delete storedItems[title]

    localStorage.setItem('item_added', JSON.stringify(storedItems))

}
// const restItem = selectedProducts.filter(product => product.id !== removedProduct.id)

const clearLocalStorage = () => {
    localStorage.removeItem('item_added')
}


export { addToLocalStorage, getFromLocalStorage, clearLocalStorage, updateLocalStorage }