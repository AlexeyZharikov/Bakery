import React, { Component } from "react";
import { putProduct, getProduct } from "../../../services/bakeryBE_API";
import "./putProduct.component.scss";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePhoto = this.onChangePhoto.bind(this);
    this.onChangeShortDescription = this.onChangeShortDescription.bind(this);
    this.onChangeLongDescription = this.onChangeLongDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeAvailability = this.onChangeAvailability.bind(this);
    this.onChangeHalal = this.onChangeHalal.bind(this);
    this.onChangeKosher = this.onChangeKosher.bind(this);
    this.onChangeVegan = this.onChangeVegan.bind(this);
    this.onChangeRaw = this.onChangeRaw.bind(this);
    this.onChangeSugarFree = this.onChangeSugarFree.bind(this);
    this.onChangeGlutenFree = this.onChangeGlutenFree.bind(this);
    this.onChangeCategory = this.onChangeCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: props._id,
      title: "",
      photo: "",
      shortDescription: "",
      longDescription: "",
      price: "",
      availability: false,
      halal: false,
      kosher: false,
      vegan: false,
      raw: false,
      sugarFree: false,
      category: undefined,
      glutenFree: false,
    };
  }
  componentDidMount() {
    const id = window.location.href.split("/")[4].slice(4);

    getProduct(id).then((res) => {
      const product = res.data;
      this.setState({
        id: product._id,
        title: product.title,
        photo: product.photo,
        shortDescription: product.shortDescription,
        longDescription: product.longDescription,
        price: product.price,
        availability: product.availability,
        halal: product.halal,
        kosher: product.kosher,
        vegan: product.vegan,
        raw: product.raw,
        sugarFree: product.sugarFree,
        glutenFree: product.glutenFree,
        category: product.category
      });
    });
  }
  onChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  onChangePhoto(event) {
    this.setState({ photo: event.target.value });
  }
  onChangeShortDescription(event) {
    this.setState({ shortDescription: event.target.value });
  }
  onChangeLongDescription(event) {
    this.setState({ longDescription: event.target.value });
  }
  onChangePrice(event) {
    this.setState({ price: event.target.value });
  }
  onChangeAvailability(event) {
    this.setState({ availability: event.target.value });
  }
  onChangeHalal(event) {
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
  onChangeCategory(event) {
    this.setState({category: event.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const product = {
      _id: this.state.id,
      title: this.state.title,
      photo: this.state.photo,
      shortDescription: this.state.shortDescription,
      longDescription: this.state.longDescription,
      price: this.state.price,
      availability: this.state.availability,
      halal: this.state.halal,
      kosher: this.state.kosher,
      vegan: this.state.vegan,
      raw: this.state.raw,
      sugarFree: this.state.sugarFree,
      glutenFree: this.state.glutenFree,
      category: this.state.category
    };
    putProduct(product)
      .then((res) => {
        window.location = "/";
        console.log(`Product ${product.titlle} was changed`)
      }
      )
      .catch((err) => console.log(err));

    
  }

  render() {
    return (
      <div className="edit">
        <div className="edit-inner">
          <form className="edit-product">
            <label htmlFor="title">Название</label>
            <input
              name="title"
              type="text"
              id="title"
              onChange={this.onChangeTitle}
              defaultValue={this.state.title}
            />
            <label htmlFor="photo-link">Фото</label>
            <input
              name="photo-link"
              type="text"
              id="photo-link"
              onChange={this.onChangePhoto}
              defaultValue={this.state.photo}
            />
            <label htmlFor="shortDescription">Краткое описаное</label>
            <textarea
              rows="8"
              name="shortDescription"
              type="text"
              id="shortDescription"
              onChange={this.onChangeShortDescription}
              defaultValue={this.state.shortDescription}
            />
            <label htmlFor="longDescription">Длинное описание</label>
            <textarea
              rows="8"
              name="longDescription"
              type="text"
              id="longDescription"
              onChange={this.onChangeLongDescription}
              defaultValue={this.state.longDescription}
            />

            <label htmlFor="price">Цена</label>
            <input
              type="text"
              name="price"
              id="price"
              onChange={this.onChangePrice}
              defaultValue={this.state.price}
            />

          <label htmlFor="category">Категория</label>
          <select
            name="category"
            id="category"
            onChange={this.onChangeCategory}
            value={this.state.category}
          >
            <option value="undefined">-</option>
            <option value="Батончики">Батончики</option>
            <option value="Печиво">Печиво</option>
            <option value="Випічка">Випічка</option>
            <option value="Спеції">Спеції</option>
            <option value="Маси і начинки">Маси і начинки</option>
          </select>

            <label htmlFor="availability">Наличие</label>
            <select
              name="availability"
              id="availability"
              onChange={this.onChangeAvailability}
              value={this.state.availability}
            >
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select>

            <label htmlFor="halal">Halal</label>
            <select
              name="halal"
              id="halal"
              onChange={this.onChangeHalal}
              value={this.state.halal}
            >
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select>

            <label htmlFor="kosher">Kosher</label>
            <select
              name="kosher"
              id="kosher"
              onChange={this.onChangeKosher}
              value={this.state.kosher}
            >
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select>

            <label htmlFor="vegan">Vegan</label>
            <select
              name="vegan"
              id="vegan"
              onChange={this.onChangeVegan}
              value={this.state.vegan}
            >
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select>

            <label htmlFor="raw">Raw</label>
            <select
              name="raw"
              id="raw"
              onChange={this.onChangeRaw}
              value={this.state.raw}
            >
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select>
            <label htmlFor="sugarFree">Без сахара</label>
            <select
              name="sugarFree"
              id="sugarFree"
              onChange={this.onChangeSugarFree}
              value={this.state.sugarFree}
            >
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select>
            <label htmlFor="glutenFree">Без глютена</label>
            <select
              name="glutenFree"
              id="glutenFree"
              onChange={this.onChangeGlutenFree}
              value={this.state.glutenFree}
            >
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select>
            <div className="edit-save-btn">
              <button type="submit" onClick={this.onSubmit}>
                Сохранить
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
