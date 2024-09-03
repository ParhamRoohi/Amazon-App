import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/Ui/footer/Footer";
import "../../components/menu/Menu.css";
import { Link } from "react-router-dom";

import "./Home.css";
import Header from "../../components/Ui/header/Header";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/data");
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home-container">
      <Header/>
      <div className="product-list">
        {data?.map((item) => (
          <Link
            to={`/product/${item?.id}`}
            key={item?.id}
            className="product-card"
          >
            <img src={item.image} alt={item.name} className="product-image" />
            <div className="product-info">
              <h2 className="product-name">{item.name}</h2>
              <p className="product-brand">{item.brand}</p>
              <p className="product-price">${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
