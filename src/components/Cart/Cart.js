import React from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    const finalGrandTotal = grandTotal.toFixed(2);
    return (
        <div className='cart'>
            <h3 className='order-text'>Order summary</h3>
            <p>Selected items: {cart.length}</p>
            <p>Total price: ${total}</p>
            <p>Total shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand total: ${finalGrandTotal}</h5>
        </div>
    );
};

export default Cart;