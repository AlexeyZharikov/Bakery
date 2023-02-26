import './quantity.component.scss';

const Quantity = (props) => {

  return (
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
  );
};

export default Quantity;
