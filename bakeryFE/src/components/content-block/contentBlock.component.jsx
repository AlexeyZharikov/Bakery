import "./contentBlock.component.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/header.component";
// import Admin from "../../pages/admin/admin.page";
import Main from "../../pages/main/main.page";
import Store from "../../pages/store/store.page";
import About from "../../pages/about/about.page";
import Details from "../../pages/details/details.page";
// import EditPage from "../../pages/edit-page/edit-page.page";
import Checkout from "../../pages/checkout/checkout.page";
import Footer from "../footer/footer.component";
import TYPage from "../../pages/tyPage/tyPage.component";
import Burger from "../burgerMenuHeader/burgerMenuHeader.component";
import { useState } from "react";

const ContentBlock = () => {
  const [orders, setOrders] = useState([]);
  const [orderId] = useState(Date.now());

  const addToOrder = (item) => {
    let isInArr = false;
    orders.forEach((elem) => {
      if (elem.id === item.id) isInArr = true;
    });
    if (!isInArr)
      setOrders([
        ...orders,
        {
          title: item.title,
          id: item.id,
          price: item.price,
          photo: item.photo,
          count: item.count,
          orders: orders,
        },
      ]);
  };

  const deleteOrderItem = (id) => {
    setOrders(orders.filter((item) => item.id !== id));
  };

  const initialStateOrders = () => {
    setOrders([])
  }

  return (
    <div className="contentBlock">
      <BrowserRouter>
        <Header
          orders={orders}
          setOrders={setOrders}
          orderId={orderId}
          onDelete={deleteOrderItem}
        />
        <Burger
          orders={orders}
          setOrders={setOrders}
          orderId={orderId}
          onDelete={deleteOrderItem}
        />
        <div className="wrapper">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/store" element={<Store onAdd={addToOrder} />} />
            <Route path="/store/:id" element={<Details onAdd={addToOrder} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/checkout"
              element={<Checkout initialStateOrders={initialStateOrders} orders={orders} orderId={orderId} />}
            />
            <Route path="/thank-you" element={<TYPage />}/>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default ContentBlock;
