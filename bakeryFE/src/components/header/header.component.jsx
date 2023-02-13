import './header.scss';
import Cart from '../cart/cart.component';
import {Link, NavLink} from 'react-router-dom';
import { AiOutlineShopping } from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {
  let [cartOpen, setCartOpen] = useState(false)

  const openCart = () => {
    setCartOpen(cartOpen = !cartOpen)
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header-inner">
        <div className="header_logo"><Link to="/"></Link></div>
          <nav className="nav">
            <NavLink activeClassName="active" to="/">Головна</NavLink>
            <NavLink activeClassName="active" to="/store">Магазин</NavLink>
            <NavLink activeClassName="active" to="/about">Про Нас</NavLink>
            <Link className='cart-link'><AiOutlineShopping onClick={openCart} className={`cart ${cartOpen && 'active-cart'}`}/></Link>
            {cartOpen && (
              <Cart/>
            )}
          </nav>

        </div>
      </div>
    </div>
  )
}

export default Header;