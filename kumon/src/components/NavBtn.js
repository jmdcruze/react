import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom';
import '../css/NavBar.css';
import '../css/App.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

class NavBtn extends Component {
  render() {
    return (
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>

    );
  }
}

export default NavBtn;
