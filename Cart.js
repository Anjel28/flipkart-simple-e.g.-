import React from 'react';
//import './Cart.css';

function Cart({ cartItems, removeFromCart, setShowCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <button className="back-button" onClick={() => setShowCart(false)}>
        ← Back to Products
      </button>
      <h2>Your Cart ({cartItems.length} items)</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} width="50" />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <div>₹{item.price.toLocaleString()}</div>
                </div>
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ₹{total.toLocaleString()}</h3>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;