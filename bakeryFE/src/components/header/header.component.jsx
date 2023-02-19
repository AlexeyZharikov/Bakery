import "./header.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCartCheck, BsCartDash } from "react-icons/bs";
import { useState } from "react";
import CartItem from "../cartItem/cartItem.component";

const Header = (props) => {
  let [cartOpen, setCartOpen] = useState(false);
  const location=useLocation()
  const pathname=location.pathname

  const showCartItems = (props) => {
  

    let total = 0;
    props.orders.forEach((item) => total += item.price * item.count);
   


  return (
    <div className="full-Cart">
      {props.orders.map((item) => (
        
          <CartItem
            key={item.id}
            onDelete={props.onDelete}
            id={item.id}
            title={item.title}
            photo={item.photo}
            price={item.price}
            count={item.count}
            orders={props.orders}
          />
        
      ))}
      <div className="total-price">Всього: <span>{total}</span> грн.</div>
      <div className="checkout">
        <NavLink to="/checkout" >Оформити замовлення</NavLink>
      </div>
    </div>
  );
};
// onClick={() => setCartOpen(false)}

const showNothing = () => {
  return (
    <div className="empty">
      <p>Немає товарів</p>
    </div>
  );
};

  


  const openCart = () => {
    setCartOpen((cartOpen = !cartOpen));
  };

  return (
    <div className={(pathname === "/admin-page" || pathname === "/checkout") ? "header display-none" : "header display-block" }>
      <div className="container">
        <div className="header-inner">
          <div className="header_logo">
            <Link to="/"></Link>
          </div>
          <nav className="nav">
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/"
            >
              Головна
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/store"
            >
              Магазин
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/about"
            >
              Про Нас
            </NavLink>
            <Link className="cart-link">
              {props.orders.length > 0 ? (
                <BsCartCheck
                  onClick={openCart}
                  className={`cart ${cartOpen && "active-cart"}`}
                />
              ) : (
                <BsCartDash            
                  onClick={openCart}
                  className={`cart ${cartOpen && "active-cart"}`}
                />
              )}
            </Link>
            {cartOpen && (
              <div className="cart-popup">
                {props.orders.length > 0 ? showCartItems(props) : showNothing()}
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
