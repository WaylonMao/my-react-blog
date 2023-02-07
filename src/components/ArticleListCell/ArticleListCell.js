import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

class ListCell extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className='ac_container'
        onClick={() => {
          this.props.navigate(`/detail/${this.props.data.key}`);
        }}>
        <div className='content'>
          <div className='title'>
            <h2>
              {this.props.data.title} {this.props.tags}
            </h2>
          </div>
          <div>
            <p className='info'>
              <div className='tag'>
                <img src={require('./calendar.png')} alt='Date' />
                <div>{this.props.data.time}</div>
              </div>
              <div className='tag'>
                <img src={require('./views.png')} alt='View' />
                <div>{this.props.data.viewCount}</div>
              </div>
              <div className='tag'>
                <img src={require('./comments.png')} alt='Comment' />
                <div>{this.props.data.commentCount}</div>
              </div>
            </p>
            <span className='lastSpan'>Read More</span>
          </div>
        </div>
      </div>
    );
  }
}

function ArticleListCell(props) {
  const navigate = useNavigate();
  return <ListCell navigate={navigate} {...props} />;
}

export default ArticleListCell;
