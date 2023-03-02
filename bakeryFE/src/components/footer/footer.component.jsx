import "./footer.component.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      className={
        pathname === "/admin-page" ||
        pathname === `/checkout/` ||
        pathname === "/admin-page/edit/" ||
        pathname === "/"
          ? "footer display-none"
          : "footer display-block"
      }
    >
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            <Link to="/"></Link>
          </div>
          <nav className="footer-nav">
            <NavLink
              className="footer-nav-link"
              to="/"
            >
              Головна
            </NavLink>
            <NavLink
              className="footer-nav-link"
              to="/store"
            >
              Магазин
            </NavLink>
            <NavLink
              className="footer-nav-link"
              to="/about"
            >
              Про Нас
            </NavLink>
          </nav>
          <div className="social">
            <NavLink
              className="social-link"
              to="https://www.instagram.com/humane_and_healthy/"
            >
              <BsInstagram className="insta-link" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
