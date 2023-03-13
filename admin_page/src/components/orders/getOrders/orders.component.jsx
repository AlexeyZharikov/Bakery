import { useEffect, useState } from "react";
import { getOrders } from "../../../services/bakeryBE_API";
import "./orders.component.scss";

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
                        <th>название</th>
                        <th>колличество</th>
                        <th>сумма</th>
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
                </tr>
              );
            })}
          </tbody>
        </table>
        }
        {/* {loading ? <div className='loading'><div className="loading-spinner"></div></div> : <div className="products-inner">{orderItems} </div>} */}
      </div>
    </div>
  );
};

export default GetAllOrders;
