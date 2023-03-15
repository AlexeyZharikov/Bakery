import "./cartItem.component.scss";
import {FaTrash} from 'react-icons/fa';

const CartItem = (props) => {
  let totalPrice = props.price * props.count;

  return (
    <div className="cart-item" key={props.id}>
      <div className="cart-item-content">
        <div className="cart-item-photo">
          <img src={props.photo} alt="product" />
        </div>
        <div className="cart-item-text">
          <div className="cart-item-title">{props.title}</div>
          <div className="quantity">
            <div className="quantity-title">
              Кількість: {props.count}
            </div>
          </div>
        </div>
        <div className="price" >{totalPrice} <span>&#x20B4;</span></div>
        <FaTrash className="del-icon" onClick={() => {props.onDelete(props.id); }}/>
      </div>
    </div>
  );
};

export default CartItem;