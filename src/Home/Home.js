import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductsContext } from '../App';
import useCart from '../Hooks/Cart';

import ShortCart from '../ShortCart/ShortCart';
import { addToLocalStorage, clearLocalStorage, updateLocalStorage } from '../Utilities/Utilities';
import Product from './Product/Product';

const Home = () => {
    const [products] = useContext(ProductsContext)

    const [selectedProducts, setSelectedProducts] = useCart(products)
    const [reviewBtn, setReviewBtn] = useState(false)
    const navigate = useNavigate();


    const addToCart = (product) => {
        if (selectedProducts.includes(product)) {

        }
        else {
            const newSelectedProducts = [...selectedProducts, product]
            setSelectedProducts(newSelectedProducts)
        }
        addToLocalStorage(product.title)
    }

    useEffect(() => {
        if (selectedProducts.length <= 0) {
            setReviewBtn(true)
        }
        else {
            setReviewBtn(false)
        }

    }, [selectedProducts])


    const clearCart = () => {
        setSelectedProducts([])
        clearLocalStorage();
    }

    const removeSingleItem = (removedProduct) => {
        const restItem = selectedProducts.filter(product => product.id !== removedProduct.id)
        setSelectedProducts(restItem);
        updateLocalStorage(removedProduct.title)
    }


    return (
        <div className='grid lg:grid-cols-6 grid-cols-1 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 col-span-4'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />)
                }
            </div>
            <div className='border-4 border-black rounded-lg p-4 m-4 col-span-2'>
                <div className='sticky top-0'>
                    <div className='flex justify-between items-baseline'>
                        <h1 className='text-xl font-bold mb-4'>Your Selected Items:</h1>
                        <button onClick={clearCart} className='text-xl font-extrabold bg-red-300 px-4 py-2 rounded-full text-red-600' title='Clear Cart'>X</button>
                    </div>
                    {
                        selectedProducts.map(product => <ShortCart
                            key={product.id}
                            product={product}
                            removeSingleItem={removeSingleItem}
                        ></ShortCart>)
                    }
                    <button onClick={() => navigate("/reviewcart")} className={reviewBtn ? 'text-white' : 'hover: mx-4 px-4 rounded font-medium py-2 text-lg bg-black text-white'} to="/reviewcart" disabled={reviewBtn} >Review Cart</button>
                </div>


            </div>
        </div >
    );
};




export default Home;