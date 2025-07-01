import React, { useState } from 'react';
import './App.css';
import Product from './components/Product';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: 'iPhone 13',
      price: 69999,
      image: 'https://m.media-amazon.com/images/I/61l9ppRIiqL._SL1500_.jpg',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      price: 54999,
      image: 'https://m.media-amazon.com/images/I/71J8tz0UeJL._SL1500_.jpg',
      rating: 4.3
    },
    {
      id: 3,
      name: 'OnePlus 9 Pro',
      price: 64999,
      image: 'https://m.media-amazon.com/images/I/61mIUCd-37L._SL1500_.jpg',
      rating: 4.2
    },
    {
      id: 4,
      name: 'Mi 11X',
      price: 29999,
      image: 'https://m.media-amazon.com/images/I/71W3oX5qQAS._SL1500_.jpg',
      rating: 4.0
    }
  ];

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productToRemove) => {
    setCartItems(cartItems.filter(product => product.id !== productToRemove.id));
  };

  return (
    <div className="app">
      <Header cartCount={cartItems.length} setShowCart={setShowCart} />
      
      {showCart ? (
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} setShowCart={setShowCart} />
      ) : (
        <div className="product-list">
          {products.map(product => (
            <Product 
              key={product.id} 
              product={product} 
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;