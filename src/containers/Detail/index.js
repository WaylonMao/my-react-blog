import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import '../Home/style.css';
import '../../components/Header/style.css';
import './style.css';

const articleContent = '## Title \n```code``` \n content';

class Detail extends Component {
  render() {
    return (
      <div className='h_container'>
        <div className='header'>
          <h1>Title Test</h1>
        </div>
        <div className='main'>
          <div id='preview' className='main'>
            <div className='markdown_body'>
              <ReactMarkdown>{articleContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
