import './admin-page.scss';
import CreateProduct from "../../components/Products/cerateProduct/createProduct.component";
import AdminList from '../../components/Products/admin-list/adminList/adminList.component';




const Admin = () => {
  return (
    <div className="admin-page">
      <div className="container">
        <h2>Добавить продукт в магазин</h2>
          <CreateProduct/>
        <h2>Список (редактировать или удалить продукты)</h2>
        <AdminList/>
      </div>
    </div>
    
  )
}

export default Admin;