import CartItem from "../../components/cartItem/cartItem.component";
import NoPage from "../noPpage/noPage.page";
import "./checkout.page.scss";

const Checkout = (props) => {
  let total = 0;
  props.orders.forEach((item) => (total += item.price * item.count));

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
                Да сплати: <span>{total} грн.</span>
              </div>
            </div>
            <div className="checkout-form">
              <form action="">
                <span>* - обовʼязкові поля</span>
                <div className="name-block">
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Ім'я і Прізвище*"
                  />
                </div>
                <div className="phone-block">
                  <input
                    type="text"
                    required
                    name="phone"
                    placeholder="Номер телефону*"
                  />
                </div>
                <div className="email-block">
                  <input
                    type="text"
                    required
                    name="phoemailne"
                    placeholder="email"
                  />
                </div>
                <div className="btn">
                  <button type="submit" className="button">
                    завершити замовлення
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
