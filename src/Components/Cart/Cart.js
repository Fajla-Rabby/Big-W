import React, { useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    const {name} = cart;

    // const  [books, setBooks] = useState([])

   

    // setBooks = name;
   
    return (
        <div className='cart'> 


            <div>
                <ul>
                   {
                       <p><li className='list'>{name}</li></p>
                   }
                </ul>
                {/* {
                  name.map(name => <p><li className='list'>{name}</li></p>) 
                } */}
            
            </div>


            <div>
                <button className='btn'>Choose For me</button>
                <button className='btn'>Choose Again</button>
            </div>
        </div>
    );
};

export default Cart;