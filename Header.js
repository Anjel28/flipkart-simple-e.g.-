import React from 'react';

function Header({ cartCount, setShowCart }) {
  return (
    <header className="header">
      <div className="logo">Flipkart</div>
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>
      <div className="cart-icon" onClick={() => setShowCart(true)}>
         {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </header>
  );
}

export default Header;