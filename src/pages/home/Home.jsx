import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Ui/footer/Footer";
import Header from "../../components/Ui/header/Header";
import style from "./Home.module.css"

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
    <div className={style.homeContainer}>
      <Header/>
      <div className={style.productList}>
        {data?.map((item) => (
          <Link
            to={`/product/${item?.id}`}
            key={item?.id}
            className={style.productCard}
          >
            <img src={item.image} alt={item.name} className={style.productImage} />
            <div className={style.productInfo}>
              <h2 className={style.productName}>{item.name}</h2>
              <p className={style.productBrand}>{item.brand}</p>
              <p className={style.productPrice}>${item.price}</p>
            </div>
          </Link>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
