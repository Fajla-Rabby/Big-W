import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div className='cart'> 
            <p>{cart.name}</p>
        </div>
    );
};

export default Cart;