import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../Hooks/Cart';
import useProducts from '../Hooks/Products';

const ReviewCart = () => {
    const navigate = useNavigate()
    const [products] = useProducts()
    const [selectedProducts] = useCart(products)

    return (
        <div className={`flex items-start px-4`} >
            <button onClick={() => navigate(-1)} className='text-xl font-bold mt-4 mr-4 bg-black text-white py-2 px-4 rounded' > ❮ Back</button>

            <div className='mx-auto w-3/4'>
                {
                    selectedProducts.map(product => <Cart
                        key={product.id}
                        product={product}
                    ></Cart>)
                }
            </div>
        </div >
    );
};


const Cart = (props) => {
    const { title, price, image } = props.product;
    return (
        <div className='flex items-center justify-between my-4 border-2 border-black rounded p-2'>
            <div className='flex items-center gap-8'>
                <img className='w-40 h-40 mr-4' src={image} alt="" />
                <div>
                    <h3 className='text-xl font-medium'>{title}</h3>
                    <h3 className='text-xl font-medium'>Per Unit: ${price}</h3>
                </div>
            </div>

        </div>
    );
}



export default ReviewCart;