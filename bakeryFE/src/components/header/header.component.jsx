import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import { BsCartCheck, BsCartDash } from "react-icons/bs";
import { useState } from "react";
import CartItem from "../cartItem/cartItem.component";


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
        <NavLink to="/checkout">Оформити замовлення</NavLink>
      </div>
    </div>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <p>Немає товарів</p>
    </div>
  );
};



const Header = (props) => {
  // const [total, setTotal] = useState(0)
  let [cartOpen, setCartOpen] = useState(false);
  


  const openCart = () => {
    setCartOpen((cartOpen = !cartOpen));
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
          <div className="header_logo">
            <Link to="/"></Link>
          </div>
          <nav className="nav">
            {/* activeClassname="active" */}
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
