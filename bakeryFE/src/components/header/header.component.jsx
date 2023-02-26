import "./header.component.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import Cart from "../cart/cart.component";

const Header = (props) => {
  const location = useLocation();
  const pathname = location.pathname;
  // const [items, setItems] = useState([]);

  // useEffect(() => {
  //   const retriveProducts = JSON.parse(localStorage.getItem("items"));
  //   if (retriveProducts) setItems(retriveProducts);
  // }, []);

  // useEffect(() => {
  //   if (items?.length) {
  //     localStorage.setItem("items", JSON.stringify(props.orders));
  //   }
  // }, [props.orders, items?.length]);

  // useEffect(() => {
  //   localStorage.getItem("id", JSON.parse(localStorage.getItem("id")));
  // }, [props.orderId]);

  // useEffect(() => {
  //   localStorage.setItem("id", JSON.stringify(props.orderId));
  // }, [props.orderId]);
  return (
    <div
      className={
        pathname === "/admin-page" ||
        pathname === `/checkout/` ||
        pathname === "/admin-page/edit/"
          ? "header display-none"
          : "header display-block"
      }
    >
      <div className="container">
        <div className="header-inner">
          <div className="header_logo">
            <Link to="/"></Link>
          </div>
          <nav className="nav">
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
              to="/"
            >
              Головна
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
              to="/store"
            >
              Магазин
            </NavLink>
            <NavLink
              className={(navData) =>
                navData.isActive ? "nav-link active" : "nav-link"
              }
              to="/about"
            >
              Про Нас
            </NavLink>
            <NavLink
              className="nav-link"
              to="https://www.instagram.com/humane_and_healthy/"
            >
              <BsInstagram className="insta-link" />
            </NavLink>
            <div className="cart-link">
            {props.orders.length > 0 ? (<div className="cart-items-count">{props.orders.length}</div>) : ""}
              <Cart
                orders={props.orders}
                setOrders={props.setOrders}
                orderId={props.orderId}
                onDelete={props.onDelete}
              />
              
             

            </div>
          </nav>

        </div>
      </div>
    </div>
  );
};

export default Header;
