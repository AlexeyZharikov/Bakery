import { Link } from "react-router-dom";
import "./adminItem.component.scss";

const {
  vegan,
  raw,
  halal,
  glutenFree,
  kosher,
  sugarFree,
} = require("../../../../assets/labels/index");

const AdminItem = (props) => {
  
  const deleteThisProduct = () => {
    props.deleteProd(props.id);
  };

  return (
    <div className="Admin-card" key={props._id}>
      <div className="admin-title">
        <b>Название: {props.title}</b>
      </div>
      <div className="admin-prod-id">
        <b>id продукта: </b>{props.id}
      </div>
      <div className="admin-photo-item">
        <div className="admin-photo-link">
          <b>Ссылка на фото: </b>
          <Link to={props.photo} target="__blank">{props.photo}</Link>
        </div>
        <div className="admin-availability">
          <b>Наличие: </b>
          {props.availability === true ? "в наличии" : "нету"}
        </div>
        <div className="admin-labels">
          <img
            src={halal}
            alt="halal"
            style={
              props.halal === true ? { display: "block" } : { display: "none" }
            }
          />
          <img
            src={kosher}
            alt="kosher"
            style={
              props.kosher === true ? { display: "block" } : { display: "none" }
            }
          />
          <img
            src={vegan}
            alt="vegan"
            style={
              props.vegan === true ? { display: "block" } : { display: "none" }
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
            alt="sugar-free"
            style={
              props.sugarFree === true
                ? { display: "block" }
                : { display: "none" }
            }
          />
        </div>
      </div>
      <div className="admin-price">
        <b>Цена:</b> {props.price} грн.
      </div>
      <div className="admin-discount">
        <b>Скидка</b> {props.discount}
      </div>
      <div className="admin-disc-desc">
        <b>Описание скидки</b> {props.discountDescription}
      </div>
      <div className="alergic">
        <b>Возможна Аллергия</b> {props.alergic === true ? "Да" : "Нет"}
      </div>
      <div className="admin-alerg-desc">
        <b>Описание Аллергия</b> {props.alergicDecription}
      </div>
      <div className="admin-category">
        <b>категория:</b> {props.category}
      </div>
      <div className="admin-short-description">
        <b>Краткое описание:</b> {props.shortDescription}
      </div>
      <div className="admin-long-description">
        <b>Длинное Описание</b> {props.longDescription}
      </div>
      <div className="admin-buttons">
        <button className="Delete" onClick={deleteThisProduct}>
          Удалить
        </button>
        <Link className="edit" to={`edit/?id=${props.id}`}>Редактировать</Link>
      </div>
    </div>
  );
};

export default AdminItem;

