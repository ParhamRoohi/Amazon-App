import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Product.module.css";
import Header from "../../components/Ui/header/Header";
import Footer from "../../components/Ui/footer/Footer";
import PlaceIcon from "@mui/icons-material/Place";
import ChatIcon from "@mui/icons-material/Chat";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import rate from "../../../public/Images/rateImg.png";


function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedCpu, setSelectedCpu] = useState({
    name: "R3 7320U",
    price: 299.99,
  });
  const [showInfo, setShowInfo] = useState(false);
  const [showDes, setShowDes] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [status, setStatus] = useState(false);
  const [totalPrice, setTotalPrice] = useState(100);

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
  const handelshowInfo = () => {
    setShowInfo(!showInfo);
  };
  const handelshowDes = () => {
    setShowDes(!showDes);
  };
  const handelshowOrder = () => {
    setShowOrder(!showOrder);
  };

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].totalPrice =
        product.price * cart[existingProductIndex].quantity;
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity, totalPrice: product.price * quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setStatus(true);
    setTotalPrice(product.price * quantity);
  };
  const handleRemoveFromCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter((item) => item.id !== product.id);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setStatus(false);
    setTotalPrice(product.price * quantity);
  };

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
              <img src={rate} alt="star icon" />
              <img src={rate} alt="star icon" />
              <img src={rate} alt="star icon" />
              <img src={rate} alt="star icon" />
              <img src={rate} alt="star icon" />
            </div>
            <a href="#"> 1,752 ratings</a>
            <span>|</span>
            <a href="#"> Search this page</a>
          </div>
          <p>6K+ bought in past month</p>
          <hr />
          <div className={style.priceDetail}>
            <div className={style.priceInfo}>
              <div className={style.sale}>-7%</div>
              <div className={style.cost}>
                <p>
                  <sup>$</sup>
                </p>
                <p>25000</p>
                <p>
                  <sup>99</sup>
                </p>
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
            <button
              onClick={() =>
                setSelectedCpu({ name: "R3 7320U", price: 299.99 })
              }
              className={
                selectedCpu === "R3 7320U" ? style.selected : style.unSelected
              }
            >
              <p>R3 7320U</p>
              <p>$299.99</p>
            </button>
            <button
              onClick={() =>
                setSelectedCpu({ name: "R7 5700U", price: 499.99 })
              }
              className={
                selectedCpu === "R7 5700U" ? style.selected : style.unSelected
              }
            >
              <p>R7 5700U</p>
              <p>$499.99</p>
            </button>
          </div>
          <div>
            <div className={style.titleInfo}>
              <div>
                <p>Brand</p>
                <p>Model Name</p>
                <p>Screen Size</p>
                <p>Color</p>
                <p>Hard Disk Size</p>
                <p>CPU Model</p>
                <p>Ram Memory Installed Size</p>
                {showInfo && (
                  <div>
                    <p>Opratiing System</p>
                    <p>Special Feature</p>
                    <p>Graphics Card Description</p>
                  </div>
                )}
              </div>
              <div>
                <p>{product.barand}</p>
                <p>{product.name}</p>
                <p>{product.screenSize}</p>
                <p>{product.color}</p>
                <p>{product.storage}</p>
                <p>{product.cPU}</p>
                <p>{product.ram}</p>
                {showInfo && (
                  <div>
                    <p>{product.opratiingSystem}</p>
                    <p>{product.specialFeature}</p>
                    <p>{product.graphicsCard}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <p onClick={handelshowInfo} className={style.moreInfo}>
              {showInfo ? (
                <div>
                  <KeyboardArrowUpIcon />
                  show less
                </div>
              ) : (
                <div>
                  <KeyboardArrowDownIcon />
                  show more
                </div>
              )}
            </p>
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
              {showDes && (
                <>
                  <li>
                    <p>
                      Ports For All Your Accessories: 1 - USB Type-C Port USB
                      3.2 Gen 2 (up to 10 Gbps) DisplayPort over USB Type-C &
                      USB Charging, 2 - USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port
                      with HDCP support, 1 - Headphone/Speaker/Line-Out Jack,
                      DC-in for AC adapter
                    </p>
                  </li>
                  <li>
                    <p>
                      What is In the Box: Acer Aspire Laptop, AC Adapter, Power
                      Cord
                    </p>
                  </li>
                  <li>
                    <p>Keyboard backlight not present on this model</p>
                  </li>
                </>
              )}
            </ol>
            <div>
              <p onClick={handelshowDes}>
                {showInfo ? (
                  <div>
                    <KeyboardArrowUpIcon />
                    show less
                  </div>
                ) : (
                  <div>
                    <KeyboardArrowDownIcon />
                    show more
                  </div>
                )}
              </p>
            </div>
            <div>
              <div className={style.report}>
                <ChatIcon/>
                <a href="#">
                  <p>Report an issue with this product or seller</p>
                </a>
              </div>
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
          </div>
          {
            <div className={style.price}>
              <p>
                <sup>$</sup>
              </p>
              <p className={style.number}>{totalPrice}</p>
              <p>
                <sup>99</sup>
              </p>
            </div>
          }
          <p className={style.detail}>
            $91.31 Shipping & Import Fees Deposit to Iran Details Delivery
            <span>Wednesday, May 15</span>
          </p>
          <div className={style.location}>
            <PlaceIcon style={{ width: 17 }} />
            <a href="#">
              <img src="" alt="" />
              Deliver to Iran
            </a>
          </div>
          <p className={style.stock}>In Stock</p>
          <select
            className={style.quantity}
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
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
          {status ? (
            <button onClick={handleRemoveFromCart} className={style.cartBtn}>
              Remove to Cart
            </button>
          ) : (
            <button onClick={handleAddToCart} className={style.cartBtn}>
              Add to Cart
            </button>
          )}
          <div>
            <div>
              <div className={style.shipForm}>
                <p>Ships from</p>
                <p>Amazon.com</p>
              </div>
              <div className={style.shipForm}>
                <p>Sold by</p>
                <p>Amazon.com</p>
              </div>
              <div className={style.shipForm}>
                <p>Returns</p>
                <p className={style.returns}>
                  Eligible for Return, Refund or Replacement within 30 days of
                  receipt
                </p>
              </div>
              <div className={style.shipForm}>
                <p>Payments</p>
                <p className={style.payment}>Secure transaction</p>
              </div>
              <div>
                {showOrder && (
                  <>
                    <p>Support</p>
                    <p>Product support included</p>
                  </>
                )}
              </div>
            </div>
            <p onClick={handelshowOrder} className={style.buyShowMore}>
              {showOrder ? "show less" : "show more"}
            </p>
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
