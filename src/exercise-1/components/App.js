import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
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
            <Link to="/" className="link">Home</Link>
            <Link to="/my-profile" className="link">My Profile</Link>
            <Link to="/about-us" className="link">About Us</Link>
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
