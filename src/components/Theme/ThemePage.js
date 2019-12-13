import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';

class ThemePage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Theme" />
        <div className="titleHolder">
          <h2>Stay tuned for this years theme!</h2>
        </div>
      </div>
    );
  }
}

export { ThemePage };