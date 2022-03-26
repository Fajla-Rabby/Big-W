import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    const {name} = cart;
   
    return (
        <div className='cart'> 
            <div>
            <p><li>{name}</li></p>
            </div>
            <div>
                <button className='btn'>Choose For me</button>
                <button className='btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;