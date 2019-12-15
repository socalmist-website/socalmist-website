import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';


class BoardPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Meet the Board" />
        <div className="titleHolder">
          <h2>Board information coming soon!</h2>
        </div>
      </div>
    );
  }
}

export { BoardPage };