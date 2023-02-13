import React, {Component} from 'react';
import './adminList.scss';
import AdminItem from '../adminitem/adminItem.component';
import {getProducts, deleteProduct} from '../../../../services/bakeryBE_API';


export default class AdminList extends Component {
  constructor(props) {
    super(props);

    this.deleteProd = this.deleteProd.bind(this);
    
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    getProducts().then(res => {
      this.setState({products: res.data})
      console.log(res.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  deleteProd(id){
    deleteProduct(id).then(res => console.log(res.data));
    this.setState({
      products: this.state.products.filter(item => item._id !== id)
    })
  }

  getAllProducts() {
    return this.state.products.map(item => {
      return <AdminItem id={item._id} deleteProd={this.deleteProd} key={item._id} title={item.title}  description={item.description} price={item.price} photo={item.photo} halal={item.halal} raw={item.raw}/>
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