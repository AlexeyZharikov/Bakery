import { useEffect, useState } from "react";
import "./getProducts.component.scss";
import { getProducts } from "../../../services/bakeryBE_API";
import Item from "../../item/item.component";
import Categories from "../../categories/categories.component";

const GetProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [available, setAvailable] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Всі");

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const filterItemsInArray = () => {
      if (available) {
        return selectedCategory === "Всі"
          ? products.filter((item) => !!item.availability)
          : products.filter(
              (item) =>
                item.category === selectedCategory && !!item.availability
            );
      }
      return selectedCategory === "Всі"
        ? products
        : products.filter((item) => item.category === selectedCategory)
    };
    const res = filterItemsInArray();
    setFiltered(res);
  }, [available, selectedCategory, products]);

  let items = filtered.map((item) => {
    return (
      <Item
        key={item._id}
        id={item._id}
        title={item.title}
        onAdd={props.onAdd}
        discount={item.discount}
        discountDescription={item.discountDescription}
        shortDescription={item.shortDescription}
        availability={item.availability}
        alergic={item.alergic}
        alergicDecription={item.alergicDecription}
        price={item.price}
        photo={item.photo}
        halal={item.halal}
        kosher={item.kosher}
        vegan={item.vegan}
        glutenFree={item.glutenFree}
        raw={item.raw}
        sugarFree={item.sugarFree}
        category={item.category}
      />
    );
  });

  return (
    <div className="products">
      <Categories
        chooseCategory={setSelectedCategory}
        checkAvailability={setAvailable}
        avaialble={available}
      />
      {loading ? (
        <div className="loading">
          <div className="loading-spinner"></div>
        </div>
      ) : (
        <div className="products-inner">{items}</div>
      )}
    </div>
  );
};

export default GetProducts;
