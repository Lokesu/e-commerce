import React from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from '.';

function Cart() {
  // get cart state from the store
  const cart = useSelector((state) => state.cart);
  let totalCost = 0;
  cart.map((item) => (totalCost = totalCost + item.quantity * item.price));
  console.log(cart);
  return (
    <div>
      {cart.length === 0 ? (
        <div className="afterAdded ">
          <span>Your cart is Empty</span>
        </div>
      ) : (
        <div>
          {/* send every item to cartItem so it can be rendered on the UI */}
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
          <div className="total">
            {/* get total cost */}
            <h2>Total Cost:{totalCost}</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;