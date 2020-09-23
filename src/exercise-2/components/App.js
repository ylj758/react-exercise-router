import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import About from './About'
import Products from './Products'
import Product from './Product'
import Profile from './Profile'
import Home from './Home'
import "bootstrap/dist/css/bootstrap.css"

class App extends Component {
  render() {

    return (
      <div className="app">
        <BrowserRouter>
          <header className="header">
            <NavLink to="/" className="link" activeStyle={{textDecoration: 'underline'}}>Home</NavLink>
            <NavLink to="/products" className="link" activeStyle={{textDecoration: 'underline'}}>Products</NavLink>
            <NavLink to="/my-profile" className="link" activeStyle={{textDecoration: 'underline'}}>My Profile</NavLink>
            <NavLink to="/about-us" className="link" activeStyle={{textDecoration: 'underline'}}>About Us</NavLink>
          </header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/products" component={Products}/>
            <Route exact path="/my-profile" component={Profile}/>
            <Route exact path="/about-us" component={About}/>
            <Route exact path='/products/:id' component={Product}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
