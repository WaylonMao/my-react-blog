import React, { Component } from 'react';
import './style.css';
import { Menu } from 'antd';

const categories = ['Home', 'Blog', 'Projects', 'About Me'];

export default class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: categories[0],
    };
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode='horizontal'
        className='menucontainer'>
        {categories.map((item, index) => (
          <Menu.Item key={item}>{item}</Menu.Item>
        ))}
      </Menu>
    );
  }
}
