import { Component } from "react";
import "./getProducts.component.scss";
import { getProducts } from "../../../services/bakeryBE_API";
import Item from "../../item/item.component";

export default class GetProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getProducts()
      .then((res) => {
        this.setState({ products: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getAllProducts() {
    return this.state.products.map((item) => {
      return (
        <Item
          count={this.state.count}
          key={item._id}
          id={item._id}
          title={item.title}
          onAdd={this.props.onAdd}
          shortDescription={item.shortDescription}
          price={item.price}
          photo={item.photo}
          halal={item.halal}
          kosher={item.kosher}
          vegan={item.vegan}
          glutenFree={item.glutenFree}
          raw={item.raw}
          sugarFree={item.sugarFree}
        />
      );
    });
  }
  
  render() {
    return (
      <div className="products">
        <div className="products-inner">{this.getAllProducts()}</div>
      </div>
    );
  }
}
