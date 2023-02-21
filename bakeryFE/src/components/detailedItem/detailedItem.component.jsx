import "./detailedItem.component.scss";
import { Link } from "react-router-dom";

const {
  vegan,
  raw,
  halal,
  glutenFree,
  kosher,
  sugarFree,
} = require("../../assets/labels");

const DetailedItem = (props) => {

  return (
    <div className="detailed-item">
      <div className="detailed-item-content">
        <div className="detailed-item-photo">
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
          <div className="longDescription">{props.product.longDescription}</div>
          <div className="price">
            Ціна: <span>{props.product.price}</span> грн.
          </div>
          <div className="buttons">
            <Link className="back-btn" to={"/store"}>Повернутись до товарів</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailedItem;
