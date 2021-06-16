import React, { Component } from 'react';
import '../css/App.css';
import '../css/bootstrap.min.css';
import '../css/font-awesome.min.css';

class BookingPage extends Component {

  constructor() {
    super();
    this.state = {isClicked : false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({isClicked : !this.state.isClicked});
  }

  render() {
    return (
      <section id="booking">
           <div className="container">
                <div className="row">
                    <div className="entry-form">
                         <form action="#" method="post">
                              <h2>Signup today</h2>
                              <input type="text" name="full name" className="form-control" placeholder="Full name" required=""/>

                              <input type="email" name="email" className="form-control" placeholder="Your email address" required=""/>

                              <input type="password" name="password" className="form-control" placeholder="Your password" required=""/>

                              <button className="submit-btn form-control" id="form-submit" onClick={this.handleClick}>Get started</button>
                              <p>{this.state.isClicked ? 'Clicked' : ''}</p>
                         </form>
                    </div>
                </div>
           </div>
      </section>

    );
  }
}

export default BookingPage;
