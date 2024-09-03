
import { useState, useEffect, useRef } from "react";
import "./Menu.css";

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
    <div className="hamburger-menu-container">
      <div className="hamburger-icon" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className={`menu ${isOpen ? "open" : ""}`} ref={menuRef}>
        <p>Digital Content & Devices</p>
        <ul>
          <li>Amazon Music</li>
          <li>Kindle E-readers & Books</li>
          <li>Amazon Appstore</li>
        </ul>
        <div className="bar"></div>
        <p>Shop by Department</p>
        <ul>
          <li>Electronics</li>
          <li>Computer</li>
          <li>Smart Home</li>
          <li>Arts & Crafts</li>
          <li>See All</li>
        </ul>
        <p>Programs & Features</p>
        <div className="bar"></div>
        <ul>
          <li>Gift Cards</li>
          <li>Shop By Interest</li>
          <li>Amazon live</li>
          <li>Arts & Crafts</li>
          <li>International Shopping</li>
          <li>See All</li>
        </ul>
        <p className="title">Help & Settings</p>
        <div className="bar"></div>
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