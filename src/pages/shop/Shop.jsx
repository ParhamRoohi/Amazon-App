import { useState, useEffect } from "react";

function Shop() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="shop-container">
      <h1>Shopping Cart</h1>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} className="cart-item-image" />
          <div className="cart-item-info">
            <h2 className="cart-item-name">{item.name}</h2>
            <p className="cart-item-brand">{item.brand}</p>
            <p className="cart-item-price">${item.price}</p>
            <p className="cart-item-quantity">Quantity: {item.quantity}</p>
            <button onClick={() => handleRemoveFromCart(item.id)} className="remove-from-cart-btn">
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shop;