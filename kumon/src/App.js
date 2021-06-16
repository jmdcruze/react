import React, { Component } from 'react';
import Main from './components/Main';
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
          <Main />
    );
  }
}

export default App;
