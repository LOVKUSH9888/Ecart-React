const ProductList = ({ products, addToCart }) => {
  return (
    <div className="flex">
      {products.map((productItem, productIndex) => {
        return (
          <div style={{ width: "33%" }} key={productIndex}>
            <div className="product-item">
              <img src={productItem.url} width="100%" alt={productItem.name} />
              <p>
                {productItem.name} | {productItem.category}
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
