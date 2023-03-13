import "./burgerMenuHeader.component.scss";
import { Component } from "react";
import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import Cart from "../cart/cart.component";

export default class Burger extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render() {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <div className="burger">
        <Menu width={'240px'}
           isOpen={this.state.menuOpen}
           onStateChange={(state) => this.handleStateChange(state)}>
          <div className="header_logo">
          </div>
          <NavLink
            to="/"
            onClick={() => this.closeMenu()}
          >
            Головна
          </NavLink>
          <NavLink
            to="/store"
            onClick={() => this.closeMenu()}
          >
            Магазин
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => this.closeMenu()}
          >
            Про Нас
          </NavLink>
          <NavLink
              onClick={() => this.closeMenu()}
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
