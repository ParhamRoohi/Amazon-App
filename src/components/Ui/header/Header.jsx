
import { Link } from "react-router-dom";
import Amazon from "../../../../public/Images/Amazon.jpg";
import style from "./Header.module.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "../../menu/Menu";


function Header() {
  return (
    <header className={style.header}>
      <div className={style.upper}>
        <img src={Amazon} alt="Amazon Photo" />
        <div>
          <form>
            <div>
              <p>All</p>
              <ArrowDropDownIcon />
              <ul>
                <li>All</li>
                <li>Mobiles</li>
                <li>Laptops</li>
                <li>Mobile Accessories</li>
              </ul>
            </div>
            <input type="text" autoComplete="off" placeholder="Search Amazon" />
            <SearchIcon style={{ color: "white" }} />
          </form>
          <Link to={"/shop"} style={{ color: "white" }}>
            <AddShoppingCartIcon />
          </Link>
        </div>
      </div>
      <div className={style.downer}>
          <Menu />
        <ul>
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
