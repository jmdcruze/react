import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import '../css/App.css';
import '../css/NavBar.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import NavBar from './NavBar';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import BookingPage from './BookingPage';

class Main extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
             <Route exact path="/" component={HomePage}/>
             <Route path="/about" component={AboutPage}/>
             <Route path="/booking" component={BookingPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
