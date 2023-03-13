import { useState, useEffect } from "react";
import DetailedItem from "../../detailedItem/detailedItem.component";
import { getProduct } from "../../../services/bakeryBE_API";
import "./getProduct.component.scss";

const GetProduct = (props) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    title: "",
    longDescription: "",
    availability: "",
    id: "",
    photo: "",
    category: "",
    price: "",
    halal: "",
    kosher: "",
    vegan: "",
    raw: "",
    sugarFree: "",
    glutenFree: "",
  });

  useEffect(() => {
    // const id = window.location.href.split("/")[4].slice(4);
    const id = window.location.href.split("/")[5].slice(4);
    setLoading(true);
    getProduct(id).then((res) => {
      
      setProduct({
        title: res.data.title,
        longDescription: res.data.longDescription,
        availability: res.data.availability,
        id: res.data._id,
        photo: res.data.photo,
        category: res.data.category,
        price: res.data.price,
        halal: res.data.halal,
        kosher: res.data.kosher,
        vegan: res.data.vegan,
        raw: res.data.raw,
        sugarFree: res.data.sugarFree,
        glutenFree: res.data.glutenFree,
      });
      setLoading(false);
    });
  }, []);

  const getOneProduct = () => {
    const prod = {
      key: product.id,
      id: product.id,
      title: product.title,
      photo: product.photo,
      category: product.category,
      longDescription: product.longDescription,
      availability: product.availability,
      price: product.price,
      halal: product.halal,
      kosher: product.kosher,
      vegan: product.vegan,
      raw: product.raw,
      sugarFree: product.sugarFree,
      glutenFree: product.glutenFree,
    };
    return <DetailedItem onAdd={props.onAdd} product={prod} />;
  };

  return (
    <div className="product">
      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div>{getOneProduct()}</div>
      )}
    </div>
  );
};

export default GetProduct;
