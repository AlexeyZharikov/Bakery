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
      price: "",
      halal: "",
      kosher: "",
      vegan: "",
      raw: "",
      sugarFree: "",
      glutenFree: ""
    };
  }
  componentDidMount() {
    const id = window.location.href.split('/')[5].slice(4);
    // const id = clearId.slice(4)
    getProduct(id)
      .then((res) => {
        this.setState({
          title: res.data.title,
          longDescription: res.data.longDescription,
          availability: res.data.availability,
          id: res.data._id,
          photo: res.data.photo,
          price: res.data.price,
          halal: res.data.halal,
          kosher: res.data.kosher,
          vegan: res.data.vegan,
          raw: res.data.raw,
          sugarFree: res.data.sugarFree,
          glutenFree: res.data.glutenFree
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
      price: this.state.price,
      halal: this.state.halal,
      kosher: this.state.kosher,
      vegan: this.state.vegan,
      raw: this.state.raw,
      sugarFree: this.state.sugarFree,
      glutenFree: this.state.glutenFree

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
