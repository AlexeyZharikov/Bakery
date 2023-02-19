import GetProduct from "../../components/Products/getProduct/getProduct.component";
import './details.page.scss';

const Details = (props) => {
  // const [id] = useParams();
  return(
    <div className="details">
      <div className="container">
        <h2>Детальна інформація про продукт</h2>
        <GetProduct/>
    </div>
  </div>
  )

}

export default Details;