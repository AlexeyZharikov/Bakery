import "./burgerMenuHeader.component.scss";
import { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import Cart from "../cart/cart.component";

export default class Burger extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className="burger">
        <Menu>
          <div className="header_logo">
            {/* <Link to="/"></Link> */}
          </div>
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
            <div className="copyright">&#169;Humane and Healthy. 2023</div>
        </Menu>
        <div className="cart-link">
          {this.props.orders.length > 0 ? (
            <div className="cart-items-count">{this.props.orders.length}</div>
          ) : (
            ""
          )}
          <Cart
            orders={this.props.orders}
            setOrders={this.props.setOrders}
            orderId={this.props.orderId}
            onDelete={this.props.onDelete}
          />
        </div>
      </div>
    );
  }
}
