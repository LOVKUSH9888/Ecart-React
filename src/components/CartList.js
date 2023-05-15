import React, { useEffect, useState } from 'react';

const CartList = ({ cart }) => {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div key={cartindex}>
            <img src={cartItem.url} width={40} alt={cartItem.name} />
            <span> {cartItem.name} </span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index
                    ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span> {cartItem.quantity} </span>
            <button
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            <span> Rs. {cartItem.price * cartItem.quantity} </span>
          </div>
        );
      })}

      <p>
        Total <span>{CART.reduce((total, item) => total + item.price * item.quantity, 0)}</span>
      </p>
    </div>
  );
};

export default CartList;
