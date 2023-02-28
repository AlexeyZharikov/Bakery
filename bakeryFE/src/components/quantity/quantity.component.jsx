import "./quantity.component.scss";

const Quantity = (props) => {
  return (
    <div className="quantity-block">
      <div className="quantity-text">Оберіть кількість: </div>
      <div className="quantity-input">
        <button className="quantity-input__decr" onClick={props.decrement}>
          &mdash;
        </button>
        <input
          className="quantity-input__windpw"
          type="number"
          value={props.count}
          readOnly
        />
        <button className="quantity-input__incr" onClick={props.increment}>
          &#xff0b;
        </button>
      </div>
    </div>
  );
};

export default Quantity;
