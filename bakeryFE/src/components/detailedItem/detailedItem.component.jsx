import "./detailedItem.component.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import Quantity from "../quantity/quantity.component";

const {
  vegan,
  raw,
  halal,
  glutenFree,
  kosher,
  sugarFree,
} = require("../../assets/labels");

const DetailedItem = (props) => {
  const [count, setCount] = useState(1);

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
    <div className="detailed-item">
      <div className="detailed-item-content">
        <div className="detailed-item-photo">
          <div
            className="mask"
            style={
              props.product.availability === true
                ? { display: "none" }
                : { display: "block", background: "rgba(000, 000, 000, 0.5)" }
            }
          >
            <div
              className="availability"
              style={
                props.product.availability === true
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              Товар в дорозі
            </div>
          </div>
          <img src={props.product.photo} alt="product" />
        </div>
        <div className="detailed-item-text">
          <div className="title">{props.product.title}</div>
          <div className="labels">
            <img
              src={halal}
              alt="halal"
              style={
                props.product.halal === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              src={kosher}
              alt="kosher"
              style={
                props.product.kosher === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              src={vegan}
              alt="vegan"
              style={
                props.product.vegan === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              src={raw}
              alt="raw"
              style={
                props.product.raw === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              src={glutenFree}
              alt="glutem-free"
              style={
                props.product.glutenFree === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            <img
              src={sugarFree}
              alt="shugar-free"
              style={
                props.product.sugarFree === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
          </div>
          <Quantity
            initialCount={initialCount}
            increment={increment}
            decrement={decrement}
            count={count}
          />
          <div className="price">
            Ціна: <span>{props.product.price}</span> грн.
          </div>
          <div className="longDescription"><span>Опис: </span><br/>{props.product.longDescription}</div>

          <div className="buttons">
            <button
              disabled={props.product.availability === false}
              id="submit-btn"
              className="add-to-cart"
              onClick={() => {
                props.onAdd({
                  id: props.product.id,
                  title: props.product.title,
                  photo: props.product.photo,
                  price: props.product.price,
                  count: count,
                });
                initialCount();
              }}
            >
              Додати до кошика
            </button>
            <Link className="back-btn" to={"/store"}>
              Повернутись
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailedItem;
