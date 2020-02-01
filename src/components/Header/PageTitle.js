import React from 'react';
import './PageTitle.css';

class PageTitle extends React.Component {
  render() {
    return (
      <div className="pageTitle">
        <h1 className = "titleText">{this.props.pageTitle}</h1>
      </div>
    )
  }
}

export { PageTitle };