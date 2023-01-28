import React, { Component } from 'react';
import './style.css';

const logo = require('./logo.png');

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <span className='logo'>
          <img src={logo} alt='logo' />
        </span>
        {/* <h1></h1>
        <p></p> */}
      </div>
    );
  }
}
