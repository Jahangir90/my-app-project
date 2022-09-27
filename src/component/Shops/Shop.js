import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
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

 
    useEffect(() =>{
        const storedCart = getStoredCard();
        const  savedCart = [];
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);

            }
        }
        setCart(savedCart);
    },[products])

    
    const [cart, setCart] = useState([]); 


    const handleAddToCart = (selectProduct) =>{
        console.log(selectProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectProduct.id);
        if(!exists){
            selectProduct.quantity = 1;
            newCart = [...cart, selectProduct];

        }
        else{
            const rest = cart.filter(product =>product.id !== selectProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // cart.push(product);
        setCart(newCart);
        addToDb(selectProduct.id);
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