import { useState, useEffect, useRef } from "react";
import style from "./Menu.module.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prevSate) => !prevSate);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={style.hamburgerMenuContainer}>
      <div className={style.hamburgerIcon} onClick={toggleMenu}>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
        <div className={style.bar}></div>
      </div>
      <div
        className={`${style.menu} ${isOpen ? style.open : ""}`}
        ref={menuRef}
      >
        <div className={style.profile}>
          <div>
            <AccountBoxIcon style={{ backgroundColor: "black" }} />
          </div>
          <p>Hello, Sign in</p>
        </div>
        <p className={style.title}>Digital Content & Devices</p>
        <ul>
          <li>
            Amazon Music <KeyboardArrowRightIcon />
          </li>
          <li>
            Kindle E-readers & Books <KeyboardArrowRightIcon />
          </li>
          <li>
            Amazon Appstore <KeyboardArrowRightIcon />
          </li>
        </ul>
        <p className={style.title}>Shop by Department</p>
        <div className={style.row}></div>
        <ul>
          <li>
            Electronics <KeyboardArrowRightIcon />
          </li>
          <li>
            Computer <KeyboardArrowRightIcon />
          </li>
          <li>
            Smart Home <KeyboardArrowRightIcon />
          </li>
          <li>
            Arts & Crafts <KeyboardArrowRightIcon />
          </li>
          <li>
            See All <KeyboardArrowRightIcon />
          </li>
        </ul>
        <p className={style.title}>Programs & Features</p>
        <div className={style.row}></div>
        <ul>
          <li>
            Gift Cards <KeyboardArrowRightIcon />
          </li>
          <li>
            Shop By Interest <KeyboardArrowRightIcon />
          </li>
          <li>
            Amazon live <KeyboardArrowRightIcon />
          </li>
          <li>
            Arts & Crafts <KeyboardArrowRightIcon />
          </li>
          <li>
            International Shopping <KeyboardArrowRightIcon />
          </li>
          <li>
            See All <KeyboardArrowRightIcon />
          </li>
        </ul>
        <p className={style.title}>Help & Settings</p>
        <div className={style.row}></div>
        <ul>
          <li>
            Your Account <KeyboardArrowRightIcon />
          </li>
          <li>
            English <KeyboardArrowRightIcon />
          </li>
          <li>
            Smart Home <KeyboardArrowRightIcon />
          </li>
          <li>
            United States <KeyboardArrowRightIcon />
          </li>
          <li>
            Customer Service <KeyboardArrowRightIcon />
          </li>
          <li>
            Sign in <KeyboardArrowRightIcon />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
