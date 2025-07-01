import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="price">₹{product.price.toLocaleString()}</div>
      <div className="rating">Rating: {product.rating} ★</div>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;