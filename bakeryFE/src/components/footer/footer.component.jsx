import "./footer.component.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div
      className={
        pathname === `/checkout/` ||
        pathname === `/store/details/` ||
        pathname === "/"
          ? "footer display-none"
          : "footer display-block"
      }
    >
      <div className="container">
        <div className="footer-inner">
          <div className="footer-content">
            <div className="footer-logo-block">
              <div className="footer-logo">
                <Link to="/"></Link>
              </div>
            </div>

            <nav className="footer-nav">
              <NavLink className="footer-nav-link" to="/">
                Головна
              </NavLink>
              <NavLink className="footer-nav-link" to="/store">
                Магазин
              </NavLink>
              <NavLink className="footer-nav-link" to="/about">
                Про Нас
              </NavLink>
            </nav>
            <div className="social">
              <div className="social-inner">
                <NavLink
                  className="social-link"
                  to="https://www.instagram.com/humane_and_healthy/"
                >
                  <BsInstagram className="insta-link" />
                </NavLink>
              </div>
            </div>
          </div>
          <div className="copyright">Copyright 2023. All rights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
