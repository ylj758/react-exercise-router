import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import About from './About'
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
            <NavLink to="/my-profile" className="link" activeStyle={{textDecoration: 'underline'}}>My Profile</NavLink>
            <NavLink to="/about-us" className="link" activeStyle={{textDecoration: 'underline'}}>About Us</NavLink>
          </header>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/my-profile" component={Profile}/>
            <Route exact path="/about-us" component={About}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
