import logo from "../../../assets/images/mk1-de-logo-white.webp";
import "./header.scss";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="error" />
          <nav>
            <nav className="nav-menu">
              <a href="#" className="nav-menu__item">
                <span className="nav-menu__text">KHAOS REGINS</span>
              </a>
              <a href="#" className="nav-menu__item">
                <span className="nav-menu__text">BASE GAME INFO</span>
              </a>
              <a href="#" className="nav-menu__item">
                <span className="nav-menu__text">ROSTER</span>
              </a>
              <a href="#" className="nav-menu__item">
                <span className="nav-menu__text">#MKKOLLECTIVE</span>
              </a>
              <a href="#" className="nav-menu__item">
                <span className="nav-menu__text">MEDIA</span>
              </a>
              <a href="/faq" className="nav-menu__item">
                <span className="nav-menu__text">FAQ</span>
              </a>
            </nav>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
