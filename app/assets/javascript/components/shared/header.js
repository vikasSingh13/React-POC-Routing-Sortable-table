import React, { Component } from 'react';

class header extends Component {
  render() {
    return (
      <nav className="main-nav-bar navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">React & Bootstrap</a>
          </div>
          <div className="pull-right collapse navbar-collapse" id="bs-example-navbar-collapse-9">
            <ul className="nav navbar-nav">
              <li><a href="#/about">About</a></li>
              <li><a href="#/table">Products</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default header;
