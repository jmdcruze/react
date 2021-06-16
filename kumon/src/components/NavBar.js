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

class NavBar extends Component {
  constructor() {
    super();
    this.state = {active : null};
    this.toggle=this.toggle.bind(this);
    this.myColor=this.myColor.bind(this);
  }


  toggle(position){
    if (this.state.active === position) {
      this.setState({active : null});
    } else {
      this.setState({active : position});
    }
  }

  myColor(position) {
    if (this.state.active === position) {
      return "blue";
    }
    return "";
  }

  render() {
    return (
        <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
           <div className="container">

                <div className="navbar-header">
                     <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                          <span className="icon icon-bar"></span>
                          <span className="icon icon-bar"></span>
                          <span className="icon icon-bar"></span>
                     </button>

                     <a href="#" className="navbar-brand">Kumon Brunswick</a>
                </div>

                <div className="collapse navbar-collapse">
                     <ul className="nav navbar-nav navbar-nav-first">
                          <li><NavLink exact to="/" activeClassName="active" style={{background: this.myColor(0)}} onClick={() => this.toggle(0)}>Home</NavLink></li>
                          <li><NavLink to="/about" activeClassName="active" style={{background: this.myColor(1)}} onClick={() => this.toggle(1)}>About</NavLink></li>
                          <li><NavLink to="/booking" activeClassName="active" style={{background: this.myColor(2)}} onClick={() => this.toggle(2)}>Booking</NavLink></li>
                          <li><NavLink to="#courses">Courses</NavLink></li>
                          <li><NavLink to="#reviews">Reviews</NavLink></li>
                          <li><NavLink to="#contact">Contact</NavLink></li>
                     </ul>
                </div>
           </div>
        </section>
    );
  }
}

export default NavBar;
