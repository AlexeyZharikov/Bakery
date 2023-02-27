import { useEffect, useState } from "react";
import "./getProducts.component.scss";
import { getProducts } from "../../../services/bakeryBE_API";
import Item from "../../item/item.component";
import Categories from "../../categories/categories.component";



const GetProducts = (props) => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res.data);
        setFiltered(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

      
       let items = filtered.map((item) => {
        
        return (
          <Item
            // count={this.state.count}
            key={item._id}
            id={item._id}
            title={item.title}
            onAdd={props.onAdd}
            shortDescription={item.shortDescription}
            availability={item.availability}
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
      })
      
    

    
    const chooseCategory = (name) => {
      name === "Всі" ? setFiltered(products) :
      setFiltered(products.filter((item) => item.category === name))
    }

    const checkAvailability = (event) => {
      event.target.checked === true ? setFiltered(filtered.filter((item) => item.availability === true)) :
      setFiltered(products)
    }

  return (
      <div className="products">
        <Categories chooseCategory={chooseCategory} checkAvailability={checkAvailability}/>
        <div className="products-inner">{items}</div>
      </div>
  );
};

export default GetProducts;
