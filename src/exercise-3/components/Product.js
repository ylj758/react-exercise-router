import React, {Component, Fragment} from 'react';

class Product extends Component {
  render() {
    const {name,id,price,quantity,desc} = this.props.location.item;
    const url = this.props.location.pathname;
    return (
        <Fragment>
          <p>Product Details:</p>
          <p>Name: {name}</p>
          <p>Id: {id}</p>
          <p>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <p>Desc: {desc}</p>
          <p>URL: {url}</p>
        </Fragment>
      );
  }
}

export default Product;