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

    this.onChangeAlergic = this.onChangeAlergic.bind(this);
    this.onChangeAlergicDesc = this.onChangeAlergicDesc.bind(this);
    this.onChangeDiscount = this.onChangeDiscount.bind(this);
    this.onChangeDiscDesc = this.onChangeDiscDesc.bind(this);


    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: "",
      photo: "",
      shortDescription: "",
      longDescription: "",
      price: "",
      discount: "",
      discountDescription: "",
      availability: false,
      alergic: false,
      alergicDecription: "",
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
    this.setState({ availability: p.target.checked });
  }
  onChangeHalal(p) {
    this.setState({ halal: p.target.checked });
  }
  onChangeKosher(p) {
    this.setState({ kosher: p.target.checked });
  }
  onChangeVegan(p) {
    this.setState({ vegan: p.target.checked });
  }
  onChangeRaw(p) {
    this.setState({ raw: p.target.checked });
  }
  onChangePrice(p) {
    this.setState({ price: p.target.value });
  }
  onChangeSugarFree(p) {
    this.setState({ sugarFree: p.target.checked });
  }
  onChangeGlutenFree(p) {
    this.setState({ glutenFree: p.target.checked });
  }
  onChangeCategory(p) {
    this.setState({ category: p.target.value });
  }


  onChangeAlergic(p) {
    this.setState({ alergic: p.target.checked });
  }
  onChangeAlergicDesc(p) {
    this.setState({ alergicDecription: p.target.value });
  }
  onChangeDiscount(p) {
    this.setState({ discount: p.target.value });
  }
  onChangeDiscDesc(p) {
    this.setState({ discountDescription: p.target.value });
  }


  onSubmit(e) {
    e.preventDefault();

    const product = {
      title: this.state.title,
      photo: this.state.photo,
      shortDescription: this.state.shortDescription,
      longDescription: this.state.longDescription,
      price: this.state.price,
      discount: this.state.discount,
      discountDescription: this.state.discountDescription,
      category: this.state.category,
      availability: this.state.availability,
      alergic: this.state.alergic,
      alergicDecription: this.state.alergicDecription,
      halal: this.state.halal,
      kosher: this.state.kosher,
      vegan: this.state.vegan,
      raw: this.state.raw,
      sugarFree: this.state.sugarFree,
      glutenFree: this.state.glutenFree

    };

    postProduct(product)
      .then((res) => {
        console.log(res.data);
        window.location = '/'
      })
      .catch((error) => {
        console.log(error);
      });


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

          <label htmlFor="discount">Скидка</label>
          <input
            type="text"
            name="discount"
            id="discount"
            value={this.state.discount}
            onChange={this.onChangeDiscount}
          />
          <label htmlFor="discountDescription" style={this.state.discount !== "" ? { display: "block" } : { display: "none" }}>Описание скидки</label>
          <textarea
            style={this.state.discount !== "" ? { display: "block" } : { display: "none" }}
            required={this.state.discount !== "" ? true : false}
            rows="8"
            name="discountDescription"
            type="text"
            id="discountDescription"
            value={this.state.discountDescription}
            onChange={this.onChangeDiscDesc}
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
            <option value="Гранола">Гранола</option>
            <option value="Маси і начинки">Маси і начинки</option>
          </select>

          <label htmlFor="availability">Наличие</label>
          <input type="checkbox"
            name="availability"
            id="availability"
            value={this.state.availability}
            checked={this.state.availability}
            onChange={this.onChangeAvailability}
          />
          <label htmlFor="halal">Halal</label>
          <input type="checkbox"
            name="halal"
            id="halal"
            value={this.state.halal}
            checked={this.state.halal}
            onChange={this.onChangeHalal}
          />

          <label htmlFor="kosher">Kosher</label>
          <input type="checkbox"
            name="kosher"
            id="kosher"
            value={this.state.kosher}
            checked={this.state.kosher}
            onChange={this.onChangeKosher}
          />

          <label htmlFor="vegan">Vegan</label>
          <input type="checkbox"
            name="vegan"
            id="vegan"
            value={this.state.vegan}
            checked={this.state.vegan}
            onChange={this.onChangeVegan}
          />

          <label htmlFor="raw">Raw</label>
          <input type="checkbox"
            name="raw"
            id="raw"
            value={this.state.raw}
            checked={this.state.raw}
            onChange={this.onChangeRaw}
          />
          <label htmlFor="sugarFree">Без сахара</label>
          <input type="checkbox"
            name="sugarFree"
            id="sugarFree"
            value={this.state.sugarFree}
            checked={this.state.sugarFree}
            onChange={this.onChangeSugarFree}
          />
          <label htmlFor="glutenFree">Без глютена</label>
          <input type="checkbox"
            name="glutenFree"
            id="glutenFree"
            value={this.state.glutenFree}
            checked={this.state.glutenFree}
            onChange={this.onChangeGlutenFree}
          />
          <label htmlFor="alergic">Возможна аллерги</label>
          <input type="checkbox"
            name="alergic"
            id="alergic"
            value={this.state.alergic}
            checked={this.state.alergic}
            onChange={this.onChangeAlergic}
          />
          <label htmlFor="alergicDecription" style={this.state.alergic === true ? { display: 'block' } : { display: 'none' }}>Описание аллергии</label>
          <textarea
            style={this.state.alergic === true ? { display: 'block' } : { display: 'none' }}
            required={this.state.alergic === true ? true : false}
            rows="8"
            name="alergicDecription"
            type="text"
            id="alergicDecription"
            value={this.state.alergicDecription}
            onChange={this.onChangeAlergicDesc}
          />



          <button type="submit" onClick={this.onSubmit}>
            Сохранить
          </button>
        </form>
      </>
    );
  }
}
