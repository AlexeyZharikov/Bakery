import React, {Component} from 'react';
import './adminList.scss';
import AdminItem from '../adminitem/adminItem.component';
import {getProducts, deleteProduct} from '../../../../services/bakeryBE_API';


export default class AdminList extends Component {
  constructor(props) {
    super(props);

    this.delProd = this.delProd.bind(this);
    
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getProducts().then(res => {
      this.setState({products: res.data})
    }).catch((error) => {
      console.log(error)
    })
  }

  delProd(id){
    deleteProduct(id).then(res => console.log(res.data));
    this.setState({
      products: this.state.products.filter(item => item._id !== id)
    })
  }

  getAllProducts() {
    return this.state.products.map(item => {
      return <AdminItem id={item._id} deleteProd={this.delProd} key={item._id} title={item.title}  longDescription={item.longDescription} shortDescription={item.shortDescription} price={item.price} photo={item.photo} kosher={item.kosher} vegan={item.vegan} sugarFree={item.sugarFree} glutenFree={item.glutenFree} halal={item.halal} raw={item.raw}/>
    })
  }

  render() {
    return (
      <div className='admin-products'>
          <div className="admin-products-inner">
            {this.getAllProducts()}
          </div>
      </div>
    )
  }

}