import React, { useEffect, useState } from "react";

const CartList = ({ cart }) => {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  const decreaseQuantity = (cartIndex) => {
    const updatedCart = CART.map((item, index) =>
      index === cartIndex
        ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
        : item
    );
    setCART(updatedCart);
  };

  const increaseQuantity = (cartIndex) => {
    const updatedCart = CART.map((item, index) =>
      index === cartIndex ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCART(updatedCart);
  };

  return (
    <div>
      {CART?.map((cartItem, cartIndex) => (
        <div key={cartIndex}>
          <img src={cartItem.url} width={40} alt={cartItem.name} />
          <span> {cartItem.name} </span>
          <button onClick={() => decreaseQuantity(cartIndex)}>-</button>
          <span> {cartItem.quantity} </span>
          <button onClick={() => increaseQuantity(cartIndex)}>+</button>
          <span> Rs. {cartItem.price * cartItem.quantity} </span>
        </div>
      ))}

      <p>
        Total:{" "}
        <span>
          {CART.reduce((total, item) => total + item.price * item.quantity, 0)}
        </span>
      </p>
    </div>
  );
};

export default CartList;
