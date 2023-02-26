import React, { Component } from "react";
import "./createProduct.component.scss";
import { postProduct } from "../../../services/bakeryBE_API";

export default class CreateProduct extends Component {
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
      glutenFree: false,
      category: '',
      products: [],
    };
  }

  onChangeTitle(p) {
    this.setState({ title: p.target.value });
  }
  onChangePhoto(p) {
    this.setState({ photo: p.target.value });
  }
  onChangeShortDescription(p) {
    this.setState({ shortDescription: p.target.value });
  }
  onChangeLongDescription(p) {
      this.setState({ longDescription: p.target.value });
  }
  onChangeAvailability(p) {
    this.setState({ availability: p.target.value });
  }
  onChangeHalal(p) {
    this.setState({ halal: p.target.value });
  }
  onChangeKosher(p) {
    this.setState({ kosher: p.target.value });
  }
  onChangeVegan(p) {
    this.setState({ vegan: p.target.value });
  }
  onChangeRaw(p) {
    this.setState({ raw: p.target.value });
  }
  onChangePrice(p) {
    this.setState({ price: p.target.value });
  }
  onChangeSugarFree(p) {
    this.setState({ sugarFree: p.target.value });
  }
  onChangeGlutenFree(p) {
    this.setState({ glutenFree: p.target.value });
  }
  onChangeCategory(p) {
    this.setState({ category: p.target.value });
  }


  onSubmit(e) {
    e.preventDefault();

    const product = {
      title: this.state.title,
      photo: this.state.photo,
      shortDescription: this.state.shortDescription,
      longDescription: this.state.longDescription,
      price: this.state.price,
      category: this.state.category,
      availability: this.state.availability,
      halal: this.state.halal,
      kosher: this.state.kosher,
      vegan: this.state.vegan,
      raw: this.state.raw,
      sugarFree: this.state.sugarFree,
      glutenFree: this.state.glutenFree
      
    };

    // console.log(product);

    postProduct(product)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

      window.location  = '/admin-page'
  }

  render() {
    return (
      <>
        <form className="add-product">
          <label htmlFor="title">Название</label>
          <input
            name="title"
            type="text"
            id="title"
            value={this.state.title}
            onChange={this.onChangeTitle}
          />
          <label htmlFor="photo-link">Фото</label>
          <input
            name="photo-link"
            type="text"
            id="photo-link"
            value={this.state.photo}
            onChange={this.onChangePhoto}
          />
          <label htmlFor="shortDescription">Краткое описаное</label>
          <textarea
            rows="8"
            name="shortDescription"
            type="text"
            id="shortDescription"
            value={this.state.shortDescription}
            onChange={this.onChangeShortDescription}
          />
          <label htmlFor="longDescription">Длинное описание</label>
          <textarea
            rows="8"
            name="longDescription"
            type="text"
            id="longDescription"
            value={this.state.longDescription}
            onChange={this.onChangeLongDescription}
          />

          <label htmlFor="price">Цена</label>
          <input
            type="text"
            name="price"
            id="price"
            value={this.state.price}
            onChange={this.onChangePrice}
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
          <button type="submit" onClick={this.onSubmit}>
            Сохранить
          </button>
        </form>
      </>
    );
  }
}
