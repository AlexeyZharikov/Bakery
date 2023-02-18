import "./cartItem.scss";
import { useState } from "react";
import {FaTrash} from 'react-icons/fa';

const CartItem = (props) => {

  let i = props.count;
  const [count, setCount] = useState(i)
  const [price, setPrice] = useState(props.price * props.count);


  // const increment = () => {
  //   setCount(count + 1);
  //   setPrice(props.price * (count + 1));
  //   // setTotal(props.orders.forEach(item => props.price * count))
  // };

  // const decrement = () => {
  //   setCount(props.count <= 1 ? 1 : count - 1);
  //   setPrice(props.price * (count - 1));
  //   // setTotal(props.orders.forEach(item => item.props.price * item.props.count))
  // };
 
  
  return (
    <div className="cart-item" key={props.id}>
      <div className="cart-item-context">
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
          {/* <div className="quantity">
            <div className="quantity-title">
            Кількість:
            </div>
            <div className="quantity-input">
              <button className="quantity-input__decr" onClick={decrement}>
                &mdash;
              </button>
              <input
                className="quantity-input__windpw"
                type="number"
                value={count}
                readOnly

              />
              <button className="quantity-input__incr" onClick={increment}>
                &#xff0b;
              </button>
            </div>
          </div> */}
        </div>
        <div className="price" >{props.price * props.count} грн.</div>
        <FaTrash className="del-icon" onClick={() => {props.onDelete(props.id); }}/>
      </div>
    </div>
  );
};

export default CartItem;
