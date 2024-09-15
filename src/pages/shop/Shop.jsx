import { useState, useEffect } from "react";
import style from "./Shop.module.css";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, [update]);

  if (cart.length === 0) {
    return <div>Your cart is empty.</div>;
  }
  const handleQuantityChange = (id, quantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        setUpdate(!update);
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price);
      return total + itemPrice * item.quantity;
    }, 0);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div className={style.container}>
      <div className={style.shoppingCart}>
        <h2>Shopping Basket</h2>
        <p>Deselect all items</p>
        <div className={style.product}>
          {cart?.map((item) => (
            <div key={item.id} className={style.productInfo}>
              <div>
                <img src={item.image} alt="Product" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident a aperiam quo unde aspernatur culpa nobis eaque sit
                  corporis laborum, est veniam assumenda impedit id, tempora
                  corrupti quia maiores distinctio!
                </p>
                <p>In Stock</p>
                <p>✓prime</p>
                <div className={style.gift}>
                  <input type="checkbox" id="gift" />
                  <label htmlFor="gift">This will be a gift</label>
                  <a href="#">Learn more</a>
                </div>
                <p>Style Name: 0.5 litre work container</p>
                <p>Color name: white</p>
                <div className={style.btnGroup}>
                  <select
                    value={item.quantity}
                    className={style.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  >
                    <option value="1">Quantity: 1</option>
                    <option value="2">Quantity: 2</option>
                    <option value="3">Quantity: 3</option>
                    <option value="4">Quantity: 4</option>
                    <option value="5">Quantity: 5</option>
                    <option value="6">Quantity: 6</option>
                    <option value="7">Quantity: 7</option>
                    <option value="8">Quantity: 8</option>
                    <option value="9">Quantity: 9</option>
                    <option value="10">Quantity: 10</option>
                  </select>
                  {update ? (
                    <button>update</button>
                  ) : (
                    <button onClick={() => handleRemoveFromCart(item.id)}>
                      delete
                    </button>
                  )}
                  <button>Save for later</button>
                  <button>See more like this</button>
                  <button>Share</button>
                </div>
              </div>
              <div>${item.price}</div>
            </div>
          ))}
        </div>
        <hr />
        <div className={style.total}>
          <p>
            Subtotal ({cart.length} item{cart.length > 1 && "s"}): $
            {calculateTotalPrice().toFixed(2)}
          </p>
        </div>
      </div>
      <div className={style.price}>
        <div className={style.total}>
          <p>
            Subtotal ({cart.length} item{cart.length > 1 && "s"}): $
            {calculateTotalPrice().toFixed(2)}
          </p>
        </div>
        <div className={style.checkout}>
          <div className={style.gift}>
            <input type="checkbox" id="gift-checkbox" />
            <label htmlFor="gift-checkbox">This will be a gift</label>
            <a href="#">Learn more</a>
          </div>
          <button style={{ width: "70%" }}>Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
