import React, {Component} from 'react';
import './getProducts.scss'
import {getProducts} from '../../../services/bakeryBE_API';
import Item from '../../item/item.component';

export default class Products extends Component {
  constructor(props) {
    super(props);
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

  getAllProducts() {
    return this.state.products.map(item => {
      return <Item key={item._id} title={item.title}  description={item.description} price={item.price} photo={item.photo} halal={item.halal} raw={item.raw}/>
    })
  }

  render() {
    return (
      <div className='products'>
          <div className="products-inner">
            {this.getAllProducts()}
          </div>
      </div>
    )
  }

}