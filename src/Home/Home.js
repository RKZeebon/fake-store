import React, { useEffect, useState } from 'react';
import Product from './Product/Product';

const Home = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-4 grid-cols-1 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 col-span-3'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    />)
                }
            </div>
            <div className='border-4 border-black rounded-lg p-4 m-4'>

            </div>
        </div>
    );
};

export default Home;