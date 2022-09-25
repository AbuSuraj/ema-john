import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, handleAddtoCart}) => {
    // console.log(props)

    const {id, category, img, name, price,seller, ratings}= product;
    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price:{price}</p>
            <p><small>Seller:{seller}</small></p>
            <p>Ratings:{ratings} Stars</p>
            </div>
            <button onClick={()=> handleAddtoCart(product)} className='btn-cart'>
                <p className='btn-text'>add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;