import React from 'react';
import "./Product.css"

const Product = ({ product }) => {
    const { title, price, description, category, image, } = product;

    return (
        <div className='border-4 border-black rounded-lg p-4 relative custom-style'>

            <div className=' h-60 mt-2 mb-8'><img className='h-full mx-auto' src={image} alt="" /></div>
            <div className=''>
                <h2 className='text-xl font-bold'>{title.slice(0, 25)}</h2>
                <p><span className='text-xl font-medium'>Description:</span> {description.slice(0, 120)} . . .</p>
                <p className='text-xl font-medium'>Category: {category}</p>
                <p className='text-xl font-bold'>Price: ${price}</p>
                <button className='bg-black text-white py-2 px-8 text-lg font-medium rounded-xl absolute bottom-2 right-2 left-2'>Add to Cart</button>
            </div>

        </div>
    );
};

export default Product;