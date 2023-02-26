import './store.page.scss';
import GetProducts from "../../components/Products/getProducts/getProducts.component";


const Store = (props) => {

  return (
    <div className="store">
      <div className="container">
        <GetProducts onAdd={props.onAdd}/>
      </div>
    </div>
  );
};

export default Store;
