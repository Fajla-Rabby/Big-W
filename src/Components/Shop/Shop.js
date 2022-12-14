
/*
            this file is not usuable, using Shop2.js instead
*/

import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
   

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    // const handleAddToCart = (product) =>{
    //     const newCart = [...cart, product];
    //     setCart(newCart);       
    // }

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);       
    }

    const choose = (product) =>
    {
        const random = Math.floor(Math.random() * cart.length + 1)
        setCart(random);
    }

    // const choose =(product) =>
    // {
    //     const random = Math.floor(Math.random() * cart.length + 1)
    // //    const newCart = [...cart, product];
    //     const newCart = cart.name[random * cart.length];
    //    setCart(newCart);
    // }

    // const choose = () =>
    // {
    //     setChoose([...choosed, {
    //         value: Math.floor(Math.random() * cart.length + 1), 
    //         id: choosed.value
            
    //     }])

    // }

    // const addItem = () => {
    //     setCart([...cart, {
    //         id: cart.id,
            
    //     }])
    //     console.log(cart);
    // }


    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>


            <div className="cart-container">
                <h4>Selected Books</h4>
                <div className='cart'>

                    <div >
                        <ul >
                        <p> {cart.map(cart =>
                            (
                                <li  className='list' key={cart.id}>{cart.name}</li>
                            ))

                            }</p>
                            {/* {cart.map(cart => (
                                <li key={cart.id}>{cart.name}</li>
                            ))} */}

                           {/* <p> {cart.map(cart =>
                            (
                                <li  className='list' key={cart.id}>{cart.name}</li>
                            ))

                            }</p> */}

                            {/* {
                            cart.map(name => <p><li className='list'>{name}</li></p>) 
                            } */}
                        </ul>
                        
                    </div>

                    <div>
                        <button onClick={() => choose(cart) } className='btn'>Choose For me</button>
                            <ul>
                                <p>
                                {cart.find(cart =>
                            (
                                <li  className='list' key={cart.id}>{cart.id}</li>
                            ))

                            }
                                </p>
                            </ul>
                        <button onClick={() => (cart)} className='btn'>Choose Again</button>
                    </div>
                </div>

                {/* {
                  cart.map(cart => <Cart
                  key={cart.id}
                     cart={cart}
                     ></Cart>)
              } */}
            </div>
        </div>
    );
};

export default Shop;