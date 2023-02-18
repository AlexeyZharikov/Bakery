import "./item.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const {
  vegan,
  raw,
  halal,
  glutenFree,
  kosher,
  sugarFree,
} = require("../../assets/labels/index");


const Item = (props) => {
  const [hover, setHover] = useState(false);
  const [count, setCount] = useState(1);
  // const [price, setPrice] = useState(count * props.price)
  

  const hoverStyle = {
    transform: "scale(1.05)",
    transition: "1s",
  };
  const normalStyle = {
    transition: "1s",
  };

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };
  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count <= 1 ? 1 : count - 1)

  }
  const initialCount = () => {
    setCount(1)
    // setPrice(count * props.price)
    
  }

  return (
    <div className="card" key={props._id}>
      <div className="card-content">
        <div className="photo-item">
          <img
            src={props.photo}
            alt="product"
            style={hover ? hoverStyle : normalStyle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
          <div className="labels">
            <img
              src={halal}
              alt="halal"
              style={
                props.halal === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              src={kosher}
              alt="kosher"
              style={
                props.kosher === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              src={vegan}
              alt="vegan"
              style={
                props.vegan === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              src={raw}
              alt="raw"
              style={
                props.raw === true ? { display: "block" } : { display: "none" }
              }
            />
            <img
              src={glutenFree}
              alt="glutem-free"
              style={
                props.glutenFree === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              src={sugarFree}
              alt="shugar-free"
              style={
                props.sugarFree === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
          </div>
        </div>
        <div className="title">
          <h3>{props.title}</h3>
        </div>
        <div className="price">Ціна: {props.price} грн.</div>
        {/* <Quantity /> */}
        <div className="quantity-input">
          <button
            className="quantity-input__decr"
            onClick={decrement}
          >
            &mdash;
          </button>
          <input
            className="quantity-input__windpw"
            type="number"
            value={count}
            readOnly
          />
          <button
            className="quantity-input__incr"
            onClick={increment}
          >
            &#xff0b;
          </button>
        </div>
        <div className="shortDescription">{props.shortDescription}</div>
        {/* <div className="id">{props.id}</div> */}
      </div>
      <div className="card-btn">
        <Link className="details" to={`details/?id=${props.id}`}>Детальніше</Link>
        <button className="add-to-cart" onClick={() => {
          props.onAdd({id: props.id, title: props.title, photo: props.photo, price: props.price, count}); initialCount()}}>
          Додати до кошика
        </button>
      </div>
    </div>
  );
};

export default Item;
