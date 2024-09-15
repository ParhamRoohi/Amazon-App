import style from "./Footer.module.css";

function Footer() {
  return (
      <footer className={style.footer}>
        <a href="#">
          <p className={style.backTop}>Back to top</p>
        </a>
        <div className={style.container}>
          <div>
            <p className={style.title}>Get to Know Us</p>
            <ul>
              <li className={style.list}>
                <a href="#">Careers</a>
              </li>
              <li className={style.list}>
                <a href="#">Blog</a>
              </li>
              <li className={style.list}>
                <a href="#">About Amazon</a>
              </li>
              <li className={style.list}>
                <a href="#">Investor Relations</a>
              </li>
              <li className={style.list}>
                <a href="#">Amazon Devices</a>
              </li>
              <li className={style.list}>
                <a href="#">Amazon Science</a>
              </li>
            </ul>
          </div>
          <div>
            <p className={style.title}>Make Money with Us</p>
            <ul>
              <li className={style.list}>
                <a href="#">Sell products on Amazon</a>
              </li>
              <li className={style.list}>
                <a href="#">Sell on Amazon Business</a>
              </li>
              <li className={style.list}>
                <a href="#">Sell apps on Amazon</a>
              </li>
              <li className={style.list}>
                <a href="#">Become an Affiliate </a>
              </li>
              <li className={style.list}>
                <a href="#">Self-Publish with Us</a>
              </li>
              <li className={style.list}>
                <a href="#">Host an Amazon Hubs</a>
              </li>
              <li className={style.list}>
                <a href="#">See More Make Money with Us</a>
              </li>
            </ul>
          </div>
          <div>
            <p className={style.title}>Amazon Payment Products</p>
            <ul>
              <li className={style.list}>
                <a href="#">Amazon Business Card</a>
              </li>
              <li className={style.list}>
                <a href="#">Shop with Points</a>
              </li>
              <li className={style.list}>
                <a href="#">Reload Your Balance</a>
              </li>
              <li className={style.list}>
                <a href="#">Amazon Currency Converter</a>
              </li>
            </ul>
          </div>
          <div>
            <p className={style.title}>Let Us Help You</p>
            <ul>
              <li className={style.list}>
                <a href="#">Amazon and COVID-19</a>
              </li>
              <li className={style.list}>
                <a href="#">Your Account</a>
              </li>
              <li className={style.list}>
                <a href="#">Your Orders</a>
              </li>
              <li className={style.list}>
                <a href="#">
                  <p>Shipping Rates &</p>Policies
                </a>
              </li>
              <li className={style.list}>
                <a href="#">
                  <p>Returns &</p>Replacements
                </a>
              </li>
              <li className={style.list}>
                <a href="#">Manage Your Content and Devices</a>
              </li>
              <li className={style.list}>
                <a href="#">Amazon Assistant</a>
              </li>
              <li className={style.list}>
                <a href="#">Help</a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className={style.links}>
        <div><p>English</p></div>
        <div><p><span>$</span>USD - U.s Dollor</p></div>
        <div><p>United States</p></div>
      </div>
      </footer>
    );
}

export default Footer;