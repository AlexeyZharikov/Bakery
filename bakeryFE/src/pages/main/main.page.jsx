import { Link } from "react-router-dom";
import "./main.page.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="main-inner">
          <h2 className="main-sup">
            Вітаємо <br />у магазині здорового харчування
          </h2>
          <h1 className="main-header">"Humane and Healthy"</h1>
          <div className="main-btn">
            <Link className="store-btn" to="/store">Перейти до вибору товарів &#x21C1;</Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Main;
