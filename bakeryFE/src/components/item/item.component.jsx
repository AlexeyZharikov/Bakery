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
  const [isDiscount, setIsDiscount] = useState(false);

  let price = 0;
    isDiscount
    ? price = Math.floor(props.price - (props.price / 100 * props.discount))
    : price = props.price



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
          <div className="discount"
            style={
              props.discount === "" || props.discount === null
                ? { display: "none" }
                : { display: "block" }
            }
          >Знижка {props.discount}%
          </div>
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
              title="Халяль"
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
              title="Кошерне"
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
              title="Веган"
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
              title="Рав"
              className="label"
              src={raw}
              alt="raw"
              style={
                props.raw === true ? { display: "block" } : { display: "none" }
              }
            />
            <img
              title="Без глютену"
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
              title="Без цукру"
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
        {isDiscount
          ? <div className="price">Ціна: <s>{props.price}<span>&#x20B4;</span></s> {price}<span>&#x20B4;</span></div>
          : <div className="price">Ціна: {props.price}<span>&#x20B4;</span></div>
        }

        <Quantity availability={props.availability} initialCount={initialCount} increment={increment} decrement={decrement} count={count} />
        <div className="disc-block" style={props.discount === null || props.discount === "" || props.discount === undefined
                ? { display: "none" }
                : { display: "block" }
              }>На цей товар діє знижка {props.discount}% за умов {props.discountDescription}</div> 
        {props.discount === null || props.discount === "" || props.discount === undefined ?
          ""
          : <div className="setDiscount">
            <label htmlFor="disc-chkbx">Активувати знижку</label>
            <input id="disc-chkbx" name="disc-chkbx" type="checkbox" onChange={(e) => setIsDiscount( e.target.checked)} value={isDiscount} checked={isDiscount} />
          </div>
        }
        
        <div className="shortDescription">
        <div className="caution"
              style={props.alergic === true
                ? { display: "block" }
                : { display: "none" }
              }>Увага!!! {props.alergicDecription}
              </div>
          {props.shortDescription}
        </div>
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
              price: price,
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
