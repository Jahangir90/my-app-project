import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Products.css';

const Product = (props) => {
    // console.log(product);

    // const {product, handleAddToCart} = props; 
    
    const {img, name, price, seller, ratings} = props.product;


    return (
        <div className='product'>

            <img src={img} alt=""/>
                <div className='product-info'>
                    <p className='product-name'>{name}</p>
                    <p className='product-price'>Price: {price}</p>
                    <p className='product-seller'>Manufacturer:{seller}</p>
                    <p className='product-ratings'>Ratings :{ratings}</p>
                </div>

                <button onClick= { () => props.handleAddToCart(props.product)} className='btn-cart'>
                    
                 
                    <p> Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                    

                </button>

        </div>
    );
};

export default Product;