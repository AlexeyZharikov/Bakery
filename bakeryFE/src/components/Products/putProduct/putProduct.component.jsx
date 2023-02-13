import React, { Component } from "react";
import { putProduct, getProduct } from "../../services/fakeapi.js";

export default class editProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      photo: "",
      description: "",
      price: "",
      availability: false,
      halal: false,
      kosher: false,
      vegan: false,
      raw: false,
      sugarFree: false,
      glutenFree: false,
    };
  }
  componentDidMount() {
    const id = this.props.match.params.id;

    getProduct(id).then((res) => {
      const product = res.data;

      this.setState({
        id: product._id,
        title: product.title,
        photo: product.photo,
        description: product.description,
        price: product.price,
        availability: product.availability,
        halal: product.halal,
        kosher: product.kosher,
        vegan: product.vegan,
        raw: product.raw,
        sugarFree: product.sugarFree,
        glutenFree: product.glutenFree,
      });
    });
  }
  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  onChangePhoto(event) {
    this.setState({ photo: event.target.value });
  }
  onChangeDescription(event) {
    this.setState({ description: event.target.value });
  }
  onChangePrice(event) {
    this.setState({ price: event.target.value });
  }
  onChangeAvailability(event) {
    this.setState({ availability: event.target.value });
  }
  onChangeHala(event) {
    this.setState({ halal: event.target.value });
  }
  onChangeKosher(event) {
    this.setState({ kosher: event.target.value });
  }
  onChangeVegan(event) {
    this.setState({ vegan: event.target.value });
  }
  onChangeRaw(event) {
    this.setState({ raw: event.target.value });
  }
  onChangeSugarFree(event) {
    this.setState({ sugarFree: event.target.value });
  }
  onChangeGlutenFree(event) {
    this.setState({ glutenFree: event.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    
    const product = {
      title: this.state.title,
      photo: this.state.photo,
      description: this.state.description,
      price: this.state.price,
      availability: this.state.availability,
      halal: this.state.halal,
      kosher: this.state.kosher,
      vegan: this.state.vegan,
      raw: this.state.raw,
      sugarFree: this.state.sugarFree,
      glutenFree: this.state.glutenFree,
      _id: this.state._id
    }
    putProduct(product).then(res => console.log(res)).catch(err => console.log(err))
  }

  // render(){
  //   return(

  //   )
  // }
}
