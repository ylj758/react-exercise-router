import React, {Component, Fragment} from 'react';
import {Link, Route} from "react-router-dom";
import data from '../mockups/data'
import Product from './Product'

class Products extends Component {
  render() {
    return (
      <Fragment>
        <p>All products:</p>
        {Object.values(data).map((item,index) => {
          return <Link to={{pathname: `/products/${item.id}`, item: item}}
                            className="nav-link"
                            key={index}>{item.name}</Link>
        })}
      </Fragment>
    );
  }
}

export default Products;