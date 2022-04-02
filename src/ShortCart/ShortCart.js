import React from 'react';

const ShortCart = ({ removeSingleItem, product }) => {
    const { title, image } = product;
    return (
        <div className='flex items-center justify-between my-4 border-2 border-black rounded p-2'>
            <div className='flex items-center'>
                <img className='w-10 h-10 mr-4' src={image} alt="" />
                <h3 className='text-lg font-medium'>{title.slice(0, 15)} ...</h3>
            </div>
            <div>
                <button title='Remove This Item' className='text-lg font-bold bg-red-300 px-2 rounded text-red-600' onClick={() => removeSingleItem(product)}>X</button>
            </div>
        </div>
    );
};

export default ShortCart;