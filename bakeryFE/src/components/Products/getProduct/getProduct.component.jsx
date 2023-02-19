import { Component } from "react";
import { getProduct } from "../../../services/bakeryBE_API";
import DetailedItem from "../../detailedItem/detailedItem.component";

export default class GetProduct extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      longDescription: "",
      id: "",
      photo: "",
      price: ""
    };
  }
  componentDidMount() {
    const clearId = window.location.href.split('/')[5];
    const id = clearId.slice(4)
    getProduct(id)
      .then((res) => {
        this.setState({
          
          title: res.data.title,
          longDescription: res.data.longDescription,
          id: res.data._id,
          photo: res.data.photo,
          price: res.data.price
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getOneProduct() {
    const product = {
      key: this.state.id,
      id: this.state.id,
      title: this.state.title,
      photo: this.state.photo,
      longDescription: this.state.longDescription,
      price: this.state.price
    };
    return <DetailedItem  product={product} />;
  }

  render() {
    return (
    <div>
      {this.getOneProduct()}
    </div>);
  }
}
