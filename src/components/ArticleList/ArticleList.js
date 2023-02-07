import React, { Component } from 'react';
import ArticleListCell from '../ArticleListCell/ArticleListCell';

const items = [
  {
    key: '1',
    title: 'Test Title 1',
    time: '2023-02-01',
    viewCount: '999',
    commentCount: '99999',
  },
  {
    key: '2',
    title: 'Test Title 2',
    time: '2023-02-01',
    viewCount: '9',
    commentCount: '9',
  },
];

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { tags } = this.props;
    return (
      <div>
        {items.map((item, index) => (
          <ArticleListCell
            history={this.props.history}
            key={index}
            data={item}
            tags={tags}
          />
        ))}
      </div>
    );
  }
}
