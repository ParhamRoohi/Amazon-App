import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Product.module.css";
import Header from "../../components/Ui/header/Header";
import Footer from "../../components/Ui/footer/Footer";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedCpu, setSelectedCpu] = useState({ name: "R3 7320U", price: 299.99 });

  // const [quantity, setQuantity] = useState(1);
  // const [status, setStatus] = useState(false);
  // const [totalPrice, setTotalPrice] = useState(100);

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, []);

  const getProduct = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/data/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  // const handleAddToCart = () => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   const existingProductIndex = cart.findIndex(
  //     (item) => item.id === product.id
  //   );

  //   if (existingProductIndex >= 0) {
  //     cart[existingProductIndex].totalPrice =
  //       product.price * cart[existingProductIndex].quantity;
  //     cart[existingProductIndex].quantity += quantity;
  //   } else {
  //     cart.push({ ...product, quantity, totalPrice: product.price * quantity });
  //   }

  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   setStatus(true);
  //   setTotalPrice(product.price * quantity);
  // };
  // const handleRemoveFromCart = () => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   const updatedCart = cart.filter((item) => item.id !== product.id);

  //   localStorage.setItem("cart", JSON.stringify(updatedCart));
  //   setStatus(false);
  //   setTotalPrice(product.price * quantity);
  // };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className={style.container}>
        <div>
          <img src={product.image} className={style.img}></img>
        </div>
        <div className={style.detail}>
          <h1 className={style.productDetailName}>{product.name}</h1>
          <p className={style.productDetailDescription}>
            {product.description}
          </p>
          <a href="#">Visit acer store</a>
          <div className={style.rate}>
            <div className={style.starBox}>
              <p>4.3</p>
              <img src="" alt="star icon" />
              <img src="" alt="star icon" />
              <img src="" alt="star icon" />
              <img src="" alt="star icon" />
              <img src="" alt="star icon" />
            </div>
            <a href="#"> 1,752 ratings</a>
            <span>|</span>
            <a href="">Search this page</a>
          </div>
          <p>6K+ bought in past month</p>
          <hr />
          <div className={style.priceDetail}>
            <div className={style.priceInfo}>
              <div className={style.sale}>-7%</div>
              <div>
                <p>$</p>
                <p>25000</p>
                <p>99</p>
              </div>
            </div>
            <p>
              List price
              <span>$321.99</span>
            </p>
            <div>
              <p>$91.31 Shipping & Import Fees Deposit to Iran</p>
            </div>
            <div>
              <p>details</p>
            </div>
            <p>
              Available at a lower price from
              <a href="#">other sellers</a>
              that may not offer free Prime shipping.
            </p>
            <div>
              <a href="#">
                <div>Extra Savings</div>
                <p>
                  Amazon Music offer with this purchase 1 Applicable Promotion
                </p>
                <img src="" alt="arrow icon" />
              </a>
            </div>
          </div>
          <hr />
          <div>
            <p>
              style:
              <span>{selectedCpu.name}</span>
            </p>
          </div>
          <div>
            <button onClick={() => setSelectedCpu({ name: "R3 7320U", price: 299.99 })}>
              <p>R3 7320U</p>
              <p>$299.99</p>
            </button>
            <button  onClick={() => setSelectedCpu({ name: "R7 5700U", price: 499.99 })}>
              <p>R7 5700U</p>
              <p>$499.99</p>
            </button>
          </div>
          <div>
            <div>
              <div>
                <div>
                  <p>Brand</p>
                  <p>Model Name</p>
                  <p>Screen Size</p>
                  <p>Color</p>
                  <p>Hard Disk Size</p>
                  <p>CPU Model</p>
                  <p>Ram Memory Installed Size</p>
                  <p>Opratiing System</p>
                  <p>Special Feature</p>
                  <p>Graphics Card Description</p>
                </div>
              </div>
              <div>
                <div>
                  <p>acer</p>
                  <p>Laptop</p>
                  <p>15.6 Inches</p>
                  <p>Silver</p>
                  <p>128 GB</p>
                  <p>Ryzen 3</p>
                  <p>8 GB</p>
                  <p>Windows 11 s</p>
                  <p>Backlit Keyboard</p>
                  <p>Integrated</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src="" alt="dot icon" />
            </div>
            <button>See more</button>
          </div>
          <hr />
          <div>
            <p>Abiut this item</p>
            <ol>
              <li>
                <p>
                  Purposeful Design: Travel with ease and look great doing it
                  with the Aspire s 3 thin, light design.
                </p>
              </li>
              <li>
                <p>
                  Ready-to-Go Performance: The Aspire 3 is ready-to-go with the
                  latest AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal
                  for the entire family, with performance and productivity at
                  the core.
                </p>
              </li>
              <li>
                <p>
                  Visibly Stunning: Experience sharp details and crisp colors on
                  the 15.6 Full HD IPS display with 16:9 aspect ratio and narrow
                  bezels.
                </p>
              </li>
              <li>
                <p>
                  Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe
                  solid-state drive storage to store your files and media
                </p>
              </li>
              <li>
                <p>
                  The HD front-facing camera uses Acer’s TNR (Temporal Noise
                  Reduction) technology for high-quality imagery in low-light
                  conditions. Acer PurifiedVoice technology with AI Noise
                  Reduction filters out any extra sound for clear communication
                  over online meetings.
                </p>
              </li>
              <li>
                <p>
                  Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent
                  wireless signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO
                  technology.
                </p>
              </li>
              <li>
                <p>
                  Improved Thermals: With a 78% increase in fan surface area,
                  enjoy an improved thermal system and an additional 17% thermal
                  capacity. Allowing for longer, more efficient work sessions
                  while not plugged in.
                </p>
              </li>
              <li>
                <p>
                  Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2
                  Gen 2 (up to 10 Gbps) DisplayPort over USB Type-C & USB
                  Charging, 2 - USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with HDCP
                  support, 1 - Headphone/Speaker/Line-Out Jack, DC-in for AC
                  adapter
                </p>
              </li>
              <li>
                <p>
                  What is In the Box: Acer Aspire Laptop, AC Adapter, Power Cord
                </p>
              </li>
              <li>
                <p>Keyboard backlight not present on this model</p>
              </li>
            </ol>
            <div>
              <div>
                <img src="" alt="dot icon" />
              </div>
              <button>See more</button>
            </div>
            <div>
              <a href="">
                <img src="" alt="" />
                <p>Report an issue with this product or seller</p>
              </a>
              <p>
                <span>Note:</span>
                Products with electrical plugs are designed for use in the US.
                Outlets and voltage differ internationally and this product may
                require an adapter or converter for use in your destination.
                Please check compatibility before purchasing.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className={style.order}>
          <div>
            <p>Buy new:</p>
            <img src="" alt="" />
          </div>
          <div>
            <p>$</p>
            <p>25000</p>
            <p>99</p>
          </div>
          <p>
            $91.31 Shipping & Import Fees Deposit to Iran Details Delivery
            <span>Wednesday, May 15</span>
          </p>
          <a href="#">
            <img src="" alt="" />
            Deliver to Iran
          </a>
          <p>In Stock</p>
          <select name="" id="">
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
          <button>Add to cart</button>
          <div>
            <div>
              <div>
                <p>Ships from</p>
                <p>Amazon.com</p>
              </div>
              <div>
                <p>Sold by</p>
                <p>Amazon.com</p>
              </div>
              <div>
                <p>Returns</p>
                <p>
                  Eligible for Return, Refund or Replacement within 30 days of
                  receipt
                </p>
              </div>
              <div>
                <p>Payments</p>
                <p>Secure transaction</p>
              </div>
              <div>
                <p>Support</p>
                <p>Product support included</p>
              </div>
            </div>
            <button>See more</button>
          </div>
        </div>
      </div>
      {/* <div>
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="product-detail-image"
        />
      </div>
      <div className="product-detail-info">
        <h1 className="product-detail-name">{product.name}</h1>
        <p className="product-detail-brand">{product.brand}</p>
        <p className="product-detail-price">${product.price}</p>
        <p className="product-detail-description">{product.description}</p>
        <div className="quantity-selector">
          <label htmlFor="quantity">Quantity:</label>
          <select
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1}
              </option>
            ))}
          </select>
        </div>
        <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
        {status ? (
          <button onClick={handleRemoveFromCart} className="go-to-cart-btn">
            Remove to Cart
          </button>
        ) : (
          <button onClick={handleAddToCart} className="add-to-cart-btn">
            Add to Cart
          </button>
        )}
      </div>
    </div> */}
      <Footer />
    </>
  );
}

export default Product;
