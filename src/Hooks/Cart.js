import { useEffect, useState } from "react";
import { getFromLocalStorage } from "../Utilities/Utilities";

const useCart = (products) => {
    const [selectedProducts, setSelectedProducts] = useState([])
    useEffect(() => {
        if (products.length > 0) {
            const storedItems = getFromLocalStorage()

            let gotStoredItems = [];

            for (const title in storedItems) {
                const foundStoredItems = products.find(product => product.title === title)
                gotStoredItems.push(foundStoredItems);
            }
            setSelectedProducts(gotStoredItems);
        }
    }, [products])

    return [selectedProducts, setSelectedProducts];
}

export default useCart;