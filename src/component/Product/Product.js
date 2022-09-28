import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    // console.log(props)
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={ img } alt="" />
            <div className="product-info">
                <p className='product-name'>{ name }</p>
                <p>${ price }</p>
                <p>Seller: { seller }</p>
                <p>Ratting: { ratings } star</p>
            </div>
            <button onClick={ () => { handleAddToCart(product) } } className='product-btn'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={ faShoppingCart }></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;