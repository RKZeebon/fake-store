import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsContext } from '../App';




const ProductDetails = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [products] = useContext(ProductsContext)
    const clickedProduct = products.find(product => product.id == id)
    const { title, price, category, image, description, rating } = clickedProduct;

    return (
        <div>
            <button onClick={() => navigate(-1)} className='text-2xl font-bold mt-4 ml-8 bg-black text-white py-2 px-4 rounded' > ❮ Back</button>
            <div className='p-5'>

                <img className='mx-auto h-80 mb-8' src={image} alt="" />
                <div>
                    <h1 className='text-2xl font-bold'>{title}</h1>
                    <p><span className='text-lg font-bold'>Category:</span> {category}</p>
                    <p><span className='text-lg font-bold'>Description:</span> {description}</p>
                    <p><span className='text-lg font-bold'>Rating: </span> {rating?.rate}</p>
                    <p><span className='text-lg font-bold'>Price: $</span> {price}</p>

                </div>

            </div>
        </div>
    );
};

export default ProductDetails;