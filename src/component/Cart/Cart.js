import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    // console.log(cart)
    let total = 0, shipping = 0, quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + (product.price * product.quantity);
        shipping = shipping + product.shipping;
    }
    let tax = +(total * 0.1).toFixed(2);
    // console.log(tax)
    let grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Total items: { quantity }</p>
            <p>Total Price: { total } </p>
            <p>Total Tax: { tax } </p>
            <p>Shipping: { shipping }</p>
            <h4>Grand Total: { grandTotal } </h4>
        </div>
    );
};

export default Cart;