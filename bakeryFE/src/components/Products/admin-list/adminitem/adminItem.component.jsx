import "./adaminItem.scss";

const halal = require("../../../../assets/halal.png");
const raw = require("../../../../assets/raw.png");

const AdminItem = (props) => {

const deleteThisProduct = () => {
  props.deleteProd(props.id)
}
    return (
      <div className="Admin-card" key={props._id}>
        <div className="admin-title">
            <b>Назва:</b> <b>{props.title}</b>
        </div>
        <div>{props.id}</div>
        <div className="admin-photo-item">
          {/* <img src={props.photo} alt="product" style={hover ? hoverStyle : normalStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/> */}
          <div className="admin-photo-link">
            <b>Посилання на фото:</b>
            {props.photo}
          </div>
          <div className="admin-labels">
            <img
              src={halal}
              alt="halal"
              style={
                props.halal === true
                  ? { display: "block" }
                  : { display: "none" }
              }
            />
            {/* <img src="" alt="kosher" /> */}
            {/* <img src="" alt="vegan" /> */}
            <img
              src={raw}
              alt="raw"
              style={
                props.raw === true ? { display: "block" } : { display: "none" }
              }
            />
            {/* <img src="" alt="glutem-free" /> */}
            {/* <img src="" alt="shugar-free" /> */}
          </div>
        </div>

        <div className="admin-price">
          <b>Ціна:</b> {props.price} грн.
        </div>
        <div className="admin-description">
          <b>Короткий опис:</b> {props.description}
        </div>
        <div className="admin-buttons">
          <button className="Delete" onClick={deleteThisProduct}>Del</button>
          <button className="edit">Edit</button>
        </div>
      </div>
    );
}

export default AdminItem;

// onClick={() => { openInNewTab(props.link) }}
