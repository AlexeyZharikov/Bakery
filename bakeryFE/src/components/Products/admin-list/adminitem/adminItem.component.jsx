import "./adaminItem.scss";

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
        <b>Название:</b> <b>{props.title}</b>
      </div>
      <div>{props.id}</div>
      <div className="admin-photo-item">
        {/* <img src={props.photo} alt="product" style={hover ? hoverStyle : normalStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/> */}
        <div className="admin-photo-link">
          <b>Ссылка на фото:</b>
          {props.photo}
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
      <div className="admin-short-description">
        <b>Краткое описание:</b> {props.shortDescription}
      </div>
      <div className="admin-long-description">
        <b>Длинное Описание</b> {props.longDescription}
      </div>
      <div className="admin-buttons">
        <button className="Delete" onClick={deleteThisProduct}>
          Del
        </button>
        <button className="edit">Edit</button>
      </div>
    </div>
  );
};

export default AdminItem;

// onClick={() => { openInNewTab(props.link) }}
