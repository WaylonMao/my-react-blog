import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Detail from '../Detail';
import NotFound from '../NotFound';
import { BackTop } from 'antd';

class Router extends Component {
  render() {
    return (
      <div>
        <div>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/detail/:id' element={<Detail />} />
              <Route path='/:tag' element={<Home />} />
              <Route element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
        <BackTop />
      </div>
    );
  }
}
export default Router;
