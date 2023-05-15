import React from "react";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="flex">
      {products.map((productItem, productIndex) => {
        return (
          <div key={productIndex} style={{ width: "33%" }}>
            <div className="product-item">
              <img src={productItem.url} alt={productItem.name} width="100%" />
              <p>
                {productItem.name} | {productItem.category}{" "}
              </p>
              <p> {productItem.seller} </p>
              <p> Rs. {productItem.price} /-</p>
              <button onClick={() => addToCart(productItem)}>
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
