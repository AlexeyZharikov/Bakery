import { Link } from "react-router-dom";
import "./main.scss";

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="header-inner">
          <div className="header_logo"></div>
        </div>
        <div className="main-inner">
          <h2 className="main-sup">
            Вітаємо <br />у магазині здорового харчування
          </h2>
          <h1 className="main-header">"Humane and Healthy"</h1>
          <Link to="/store">Перейти до вибору товарів &#x21C1;</Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
