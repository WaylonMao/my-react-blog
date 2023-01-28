import React, { Component } from 'react';
import './style.css';

import Header from '../../components/Header/Header';
import Menus from '../../components/Menu/Menus';

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <div className='nav'>
          <Menus />
        </div>
        <div className='main'>List</div>
      </div>
    );
  }
}

export default Home;
