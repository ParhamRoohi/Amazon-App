import { Link } from "react-router-dom";
import style from "./Header.module.css";
import Amazon from "../../../../public/Images/Amazon.png";
import flag from "../../../../public/Images/flag.jpeg";
import Menu from "../../menu/Menu";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import SearchIcon from "@mui/icons-material/Search";


function Header() {
  return (
    <header className={style.header}>
      <div className={style.upper}>
        <img src={Amazon} alt="Amazon Photo" />
        <div className={style.locationElement}>
          <FmdGoodOutlinedIcon style={{ paddingTop: "12px", color: "white" }} />
          <div className={style.deliveryLocation}>
            <span style={{ color: "rgb(204, 204, 204)" }}>Deliver to</span>
            <span style={{ color: "white" }}>Iran</span>
          </div>
        </div>
        <div>
          <div>
            <form className={style.formContainer}>
              <div className={style.allDropDown}>
                <p>All</p>
                <ArrowDropDownIcon style={{ color: "black" }} />
                <ul className={style.list}>
                  <li>All</li>
                  <li>Mobiles</li>
                  <li>Laptops</li>
                  <li>Mobile Accessories</li>
                </ul>
              </div>
              <input
                type="text"
                autoComplete="off"
                placeholder="Search Amazon"
                className={style.searchInput}
              />
              <SearchIcon
                style={{
                  height: "27.5",
                  backgroundColor: "rgb(253,186,116)",
                  borderColor: "rgb(253,186,116)",
                }}
              />
            </form>
          </div>
        </div>
        <div className={style.nationality}>
          <img
            src={flag}
            alt="flag"
            style={{ height: "20px", width: "25px", padding: "2px" }}
          />
          <span style={{ color: "white" }}>EN</span>
          <ArrowDropDownIcon style={{ color: "rgb(204, 204, 204)" }} />
        </div>
        <div className={style.signIn}>
          <p style={{ color: "rgb(204, 204, 204)" }}>Hello, sign in</p>
          <div className={style.account}>
            <p>Account & Lists</p>
            <ArrowDropDownIcon style={{ color: "rgb(204, 204, 204)" }} />
          </div>
        </div>
        <div>
          <p style={{ color: "rgb(204,204,204)" }}>returns</p>
          <p style={{ color: "white" }}>& Orders</p>
        </div>
        <Link to={"/shop"} style={{ color: "white" }}>
          <AddShoppingCartIcon />
          Cart
        </Link>
      </div>
      <div className={style.downer}>
        <div className={style.menu}>
          <Menu />
          All
        </div>
        <ul className={style.item}>
          <li>
            <p>Today Deals</p>
          </li>
          <li>
            <p>Customer Service</p>
          </li>
          <li>
            <p>Registry</p>
          </li>
          <li>
            <p>Gift Cards</p>
          </li>
          <li>
            <p>Sell</p>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
