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

    this.onChangeAlergic = this.onChangeAlergic.bind(this);
    this.onChangeAlergicDesc = this.onChangeAlergicDesc.bind(this);
    this.onChangeDiscount = this.onChangeDiscount.bind(this);
    this.onChangeDiscDesc = this.onChangeDiscDesc.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      id: props._id,
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

        discount: product.discount,
        discountDescription: product.discountDescription,

        availability: product.availability,

        alergic: product.alergic,
        alergicDecription: product.alergicDecription,

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
    this.setState({ availability: event.target.checked });
  }
  onChangeHalal(event) {
    this.setState({ halal: event.target.checked });
  }
  onChangeKosher(event) {
    this.setState({ kosher: event.target.checked });
  }
  onChangeVegan(event) {
    this.setState({ vegan: event.target.checked });
  }
  onChangeRaw(event) {
    this.setState({ raw: event.target.checked });
  }
  onChangeSugarFree(event) {
    this.setState({ sugarFree: event.target.checked });
  }
  onChangeGlutenFree(event) {
    this.setState({ glutenFree: event.target.checked });
  }
  onChangeCategory(event) {
    this.setState({ category: event.target.value });
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
      _id: this.state.id,
      title: this.state.title,
      photo: this.state.photo,
      shortDescription: this.state.shortDescription,
      longDescription: this.state.longDescription,
      price: this.state.price,
      discount: this.state.discount,
      discountDescription: this.state.discountDescription,
      availability: this.state.availability,
      alergic: this.state.alergic,
      alergicDecription: this.state.alergicDecription,
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
              <option value="Маси і начинки">Маси і начинки</option>
            </select>

            <label htmlFor="availability">Наличие</label>
            {/* <select
              name="availability"
              id="availability"
              onChange={this.onChangeAvailability}
              value={this.state.availability}
            >
              <option value="true">Да</option>
              <option value="false">Нет</option>
            </select> */}
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
