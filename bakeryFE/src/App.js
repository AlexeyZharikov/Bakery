import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Admin from './pages/admin/admin.component';
import Main from './pages/main/main.page.jsx';
import Store from './pages/store/store.page';
import About from './pages/about/about';
import Header from './components/header/header.component';
import Details from './pages/details/details.page';
import { useState } from 'react';


function App(props) {
  const [orders, setOrders] = useState([]);
  // const [ItemDetails, setItemDetails] = useState({});

  const addToOrder = (item) => {
    let isInArr = false;
    orders.forEach(elem => {
      if (elem.id === item.id) 
        isInArr = true
    })
    if (!isInArr)
    setOrders([...orders, {key:item.id, "title": item.title, "id":item.id, "price": item.price, "photo": item.photo, "count": item.count, "orders": orders}])
  }

  const deleteOrderItem = (id) => {
    // console.log(id);
    setOrders(orders.filter(item => item.id !==id))
  }
  return (
    
    
    <div className="App">
        <BrowserRouter>
          <Header orders={orders} onDelete={deleteOrderItem}/>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/store" element={<Store onAdd={addToOrder}/>}/>
            <Route path="/store/:id" element={<Details/>} />
            <Route path="/about" element={<About />}/>
            <Route path="/admin-page" element={<Admin />}/>
          </Routes>
        </BrowserRouter>
    </div>
  
  );
}

export default App;
