import './admin.page.scss';
import CreateProduct from "../../components/Products/cerateProduct/createProduct.component";
import AdminList from '../../components/Products/admin-list/adminList/adminList.component';
import GetAllOrders from '../../components/orders/getOrders/orders.component';

const Admin = () => {

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-page-inner">
          <div className="add-product">
            <h2>Добавить продукт в магазин</h2>
            <CreateProduct/>
          </div>
          <div className="orders-info">
            <h2>Заказы</h2>
            <GetAllOrders/>
          </div>

        </div>

        <h2>Список (редактировать или удалить продукты)</h2>
        <AdminList/>
      </div>
    </div>
    
  )
}

export default Admin;