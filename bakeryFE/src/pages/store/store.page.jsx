import Header from "../../components/header/header.component";
// import Item from "../../components/item/item.component";
import Products from "../../components/Products/getProducts/getProducts.component";

const Store = () => {
  return(
    <>
    <Header/>
    <div className="store">
      <div className="container">
        <Products />
      </div>
    </div>
    </>
  )
}

export default Store;