import { useEffect, useState } from "react";
import { getOrders, deleteOrder } from "../../../services/bakeryBE_API";
import "./orders.component.scss";
import {FaTrash} from 'react-icons/fa';

const GetAllOrders = (props) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders()
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // delProd(id){
  //   deleteProduct(id).then(res => console.log(`Product ${id} was deleted`));
  //   this.setState({
  //     products: this.state.products.filter(item => item._id !== id)
  //   })
  // }

  const delOrder = (id) => {
    deleteOrder(id).then(res => console.log(`Product ${id} was deleted`));
      setOrders(orders.filter(item => item._id !== id))
  }

  return (
    <div className="all-orders">
      <div className="all-orders-inner">

        {loading ? <div className='loading'><div className="loading-spinner"></div></div> :
        <table>
          <thead>
            <tr>
              <th>id в базе</th>
              <th>№ Заказа</th>
              <th>Сумма заказа</th>
              <th>Продукты в заказе:</th>
              <th>Имя клиента</th>
              <th>Телефон клиента</th>
              <th>Email клиента</th>
              <th>Комментарий к заказу</th>
              <th>Удалить</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((item) => {
              return (
                <tr key={item._id} className="order_details">
                  <td>{item._id}</td>
                  <td>{item.orderNum}</td>
                  <td>{item.total}</td>
                  <td>
                    <table className="order-prod-details">
                      <thead>
                        <tr>
                          <th>название</th>
                          <th>колличество</th>
                          <th>сумма</th>
                        </tr>
                 
                      </thead>
                      {item.items.map((i) => (
                        <tbody key={i._id}>
                          <tr>
                            <td className="items-title">{i.title}</td>
                            <td className="items-count">{i.count}</td>
                            <td className="items-price">{i.price}</td>
                          </tr>
                        </tbody>
                      ))}
                    </table>
                  </td>
                  <td>{item.clientName}</td>
                  <td>{item.clientPhone}</td>
                  <td>{item.clientEmail}</td>
                  <td>{item.clientComment}</td>
                  <td><FaTrash className="del-icon" onClick={() => {delOrder(item._id)}}/></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        }
      </div>
    </div>
  );
};

export default GetAllOrders;
