import "./detailedItem.component.scss";
import { Link } from "react-router-dom";


const DetailedItem = (props) => {

  return (
    <div className="detailed-item">
      <div className="detailed-item-content">
        <div className="detailed-item-photo">
          <img src={props.product.photo} alt="product" />
        </div>
        <div className="detailed-item-text">
          <div className="title">{props.product.title}</div>
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
