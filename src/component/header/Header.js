import Cart from "./Cart";
import CurrencyOption from "./CurrencyOption";
import Menu from "./Menu";
import "./Header.scss";
import Hamburger from "./Hamburger";

const Header = () => {
  return (
    <header>
      <div className="Header">
        <div className="Header__logo">
          <img
            src="	https://live.hasthemes.com/html/2/sabujcha-preview/sabujcha/assets/img/logo/logo.png"
            alt="Sabujcha"
          />
        </div>

        <div className="Header__content">
          <Menu />
          <CurrencyOption />
          <Cart />
        </div>

        <Hamburger />
     
      </div>
    </header>
  );
};

export default Header;
