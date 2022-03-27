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

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);       
    }

    const choose = (cart) =>
    {
        setCart([...cart, {
            
            value: Math.floor(Math.random() * cart.length + 1),
            id: cart.value
        }])
        // const random = Math.floor(Math.random() * cart.length + 1)
        // setCart(random);
    }

    const chooseAgain = (cart) =>
    {
        cart = [''];
    }


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
                        </ul>
                        {/* {
                            name.map(name => <p><li className='list'>{name}</li></p>) 
                            } */}
                    </div>

                    <div>
                        <button onClick={() => choose(cart)} className='btn'>Choose For me</button>

                            <ul>
                                <p>
                                    <li className='list' key={cart.id}>{cart.name}</li>
                                    {/* {setCart(cart =>
                                        (
                                            <li  className='list' key={cart.id}>{cart.name}</li>
                                        ))

                                    } */}
                                </p>
                            </ul>


                        <button onClick={() => chooseAgain(cart)} className='btn'>Choose Again</button>
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