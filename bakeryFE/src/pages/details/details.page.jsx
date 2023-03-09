import GetProduct from "../../components/Products/getProduct/getProduct.component";
import './details.page.scss';

const Details = (props) => {
  // const [id] = useParams();
  return(
    <div className="details">
      <div className="container">
      <div className="details-inner">
          <h2>Детальна інформація про продукт</h2>
          <GetProduct onAdd={props.onAdd}/>
        </div>
    </div>
  </div>
  )

}

export default Details;