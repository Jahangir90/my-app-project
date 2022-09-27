import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProduct] = useState([]);

    useEffect ( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProduct(data));

    }, []);

      const [cart, setCart] = useState([]); 

    const handleAddToCart = (product) =>{
        console.log(product);
        // cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

  


    return (
        <div className='shop-container'>

            {/* .products-container+.card-container */}

            <div className="products-container">
                {
                    products.map(product => <Product 
                        key={product.id}
                        product= {product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>

            <div className="card-container">
               
               {/* cart.js take call loading */}

               <Cart cart={cart}></Cart>

            </div>

        </div>
    );
};

export default Shop;