// import { useParams } from "react-router-dom";
// import GetProducts from "../../components/Products/getProducts/getProducts.component";

import GetProduct from "../../components/Products/getProduct/getProduct.component";



const Details = (props) => {
  // const [id] = useParams();
  return(
    <div className="details">
      <div className="container">
        <GetProduct props={props}/>
        {/* {props.orders.filter(item =>)} */}
    </div>
  </div>
  )

}

export default Details;