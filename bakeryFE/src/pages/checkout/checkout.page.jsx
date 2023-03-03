import CartItem from "../../components/cartItem/cartItem.component";
import NoPage from "../noPpage/noPage.page";
import "./checkout.page.scss";
import { useState } from "react";
import {useNavigate } from 'react-router-dom';
import {createOrder} from "../../services/bakeryBE_API";

const Checkout = (props) => {
  let total = 0;
  props.orders.forEach((item) => (total += item.price * item.count));
  const navigate = useNavigate();

  const [orderToBE, setOrderToBE ] = useState({
    orderNum: props.orderId,
    items: props.orders.map((item) => { 
      return ({
        title: item.title, 
        count: item.count, 
        price: item.price * item.count})
    }),
    total: total,
    clientName: '',
    clientPhone: '',
    clientEmail:''
  })


  const onChangeClientName = (e) => {
    setOrderToBE({ ...orderToBE, clientName: e.target.value });
  }
  const onChangeClientPhone = (e) =>  {
    setOrderToBE( {...orderToBE, clientPhone: e.target.value });
  }
  const onChangeClientEmail = (e) =>  {
    setOrderToBE( {...orderToBE, clientEmail: e.target.value} );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(orderToBE)
    createOrder(orderToBE)      
    .then((res) => {
      props.initialStateOrders();
      navigate('/thank-you', {replace: true});
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div className="checkout">
      <div className="container">
        {props.orders.length === 0 ? (
          <NoPage />
        ) : (
          <div className="checkout-inner">
            <div className="checkout-card">
              <div className="checkout-header">
                Оформлення замовлення №{props.orderId}
              </div>
              {props.orders.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  photo={item.photo}
                  price={item.price}
                  count={item.count}
                  orders={props.orders}
                />
              ))}
              <div className="total">
                Да сплати: <span>{total}<span>&#x20B4;</span></span>
              </div>
            </div>
            <div className="checkout-form">
              <form>
                <span>* - обовʼязкові поля</span>
                <div className="name-block">
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Ім'я і Прізвище*"
                    onChange={(e) => onChangeClientName(e)}
                  />
                </div>
                <div className="phone-block">
                  <input
                    type="text"
                    required
                    name="phone"
                    placeholder="Номер телефону*"
                    onChange={(e) => onChangeClientPhone(e)}
                  />
                </div>
                <div className="email-block">
                  <input
                    type="text"
                    name="phoemailne"
                    placeholder="email"
                    onChange={(e) => onChangeClientEmail(e)}
                  />
                </div>
                <div className="btn">
                  <button type="submit" className="button" onClick={(e) => onSubmit(e)}>
                    Завершити замовлення
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
