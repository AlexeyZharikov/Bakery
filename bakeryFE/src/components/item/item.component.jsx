import "./item.component.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Quantity from "../quantity/quantity.component";

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
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count <= 1 ? 1 : count - 1);
  };
  const initialCount = () => {
    setCount(1);
  };

  return (
    <div className="card" key={props._id}>
      <div className="card-content">
        <div className="photo-item">
          <div
            className="mask"
            style={
              props.availability === true
                ? { display: "none" }
                : { display: "block", background: "rgba(000, 000, 000, 0.5)" }
            }
          >
            <div
              className="availability"
              style={
                props.availability === true
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Товар в дорозі
            </div>
          </div>
          <img
            src={props.photo}
            alt="product"
            style={
              hover && props.availability === true ? hoverStyle : normalStyle
            }
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          />
          <div className="labels">
            <img
              className="label"
              src={halal}
              alt="halal"
              style={
                props.halal === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              className="label"
              src={kosher}
              alt="kosher"
              style={
                props.kosher === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              className="label"
              src={vegan}
              alt="vegan"
              style={
                props.vegan === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              className="label"
              src={raw}
              alt="raw"
              style={
                props.raw === true ? { display: "block" } : { display: "none" }
              }
            />
            <img
              className="label"
              src={glutenFree}
              alt="glutem-free"
              style={
                props.glutenFree === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              className="label"
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
        <div className="price">Ціна: {props.price}<span>&#x20B4;</span></div>
        <Quantity initialCount={initialCount} increment={increment} decrement={decrement} count={count}/>
        <div className="shortDescription">{props.shortDescription}</div>
      </div>
      <div className="card-btn">
        <Link className="details" to={`details/?id=${props.id}`}>
          Детальніше
        </Link>
        <button
          disabled={props.availability === false}
          id="submit-btn"
          className="add-to-cart"
          onClick={() => {
            props.onAdd({
              id: props.id,
              title: props.title,
              photo: props.photo,
              price: props.price,
              // count,
              count: count
            });
            initialCount();
          }}
        >
          Додати до кошика
        </button>
      </div>
    </div>
  );
};

export default Item;
