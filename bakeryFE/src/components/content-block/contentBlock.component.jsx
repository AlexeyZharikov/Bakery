import './contentBlock.component.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../header/header.component";
import Admin from "../../pages/admin/admin.page";
import Main from "../../pages/main/main.page";
import Store from "../../pages/store/store.page";
import About from "../../pages/about/about.page";
import Details from "../../pages/details/details.page";
import EditPage from "../../pages/edit-page/edit-page.page";
import Checkout from "../../pages/checkout/checkout.page";
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

  return (
    <div className="contentBlock">
      <BrowserRouter>
        <Header
          orders={orders}
          setOrders={setOrders}
          orderId={orderId}
          onDelete={deleteOrderItem}
        />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/store" element={<Store onAdd={addToOrder} />} />
          <Route path="/store/:id" element={<Details />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout orders={orders} orderId={orderId} />} />
          {/* {login.username === "username" && login.password === "password" && ( )} } */}

          <Route path="/admin-page" element={<Admin />} />
          <Route path="/admin-page/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default ContentBlock;
