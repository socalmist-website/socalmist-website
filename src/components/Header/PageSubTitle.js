import React from 'react';
import './PageSubTitle.css';

class PageSubTitle extends React.Component {
  render() {
    return (
      <div className="pageSubTitle">
        <h2>{this.props.pageSubTitle}</h2>
      </div>
    )
  }
}

export { PageSubTitle };