
import { useState, useEffect, useRef } from "react";
import style from "./Menu.module.css"

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      <div className={`${style.menu} ${isOpen ? style.open : ""}`} ref={menuRef}>
        <p className={style.title}>Digital Content & Devices</p>
        <ul>
          <li>Amazon Music</li>
          <li>Kindle E-readers & Books</li>
          <li>Amazon Appstore</li>
        </ul>
        <p className={style.title}>Shop by Department</p>
        <div className={style.row}></div>
        <ul>
          <li>Electronics</li>
          <li>Computer</li>
          <li>Smart Home</li>
          <li>Arts & Crafts</li>
          <li>See All</li>
        </ul>
        <p className={style.title}>Programs & Features</p>
        <div className={style.row}></div>
        <ul>
          <li>Gift Cards</li>
          <li>Shop By Interest</li>
          <li>Amazon live</li>
          <li>Arts & Crafts</li>
          <li>International Shopping</li>
          <li>See All</li>
        </ul>
        <p className={style.title}>Help & Settings</p>
        <div className={style.row}></div>
        <ul>
          <li>Your Account</li>
          <li>English</li>
          <li>Smart Home</li>
          <li>United States</li>
          <li>Customer Service</li>
          <li>Sign in</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;