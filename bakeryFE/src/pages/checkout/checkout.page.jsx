import CartItem from "../../components/cartItem/cartItem.component";
import "./checkout.page.scss";

const Checkout = (props) => {
  let total = 0;
  props.orders.forEach((item) => total += item.price * item.count);

  return (
    <div className="checkout">
      <div className="container">
        <div className="checkout-card">
          <div className="checkout-header">Оформлення замовлення</div>
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
          <div className="total">Да сплати: <span>{total} грн.</span></div>
        </div>
        
        <div className="checkout-form">
          <form action=""></form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
