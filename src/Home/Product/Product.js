import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Product.css"



const Product = ({ addToCart, product }) => {
    const navigate = useNavigate()
    const { title, price, category, image, id } = product;
    return (

        <div className='border-4 border-black rounded-lg p-4 relative custom-style'>

            <div className=' h-60 mt-2 mb-8'>
                <img className='h-full mx-auto' src={image} alt="" />
            </div>
            <div>
                <h2 className='leading-8 text-xl font-bold'>{title.length > 40 ? title.slice(0, 40) : title}</h2>
                <p className='leading-8 text-lg'><span className='font-bold'>Category:</span> {category}</p>
                <p className='leading-8 text-xl font-bold'>Price: ${price}</p>
                <div className=' absolute bottom-2 right-2 left-2 flex justify-center'>
                    <button onClick={() => navigate(`/product/${id}`)} className='w-1/2 bg-black text-white py-2 px-4 text-lg font-medium custom-btn1'>Details</button>
                    <button className='w-1/2 bg-black text-white py-2 px-4 text-lg font-medium custom-btn2' onClick={() => addToCart(product)}>Add to Cart</button>
                </div>

            </div>

        </div>

    );
};

export default Product;