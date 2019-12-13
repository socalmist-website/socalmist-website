import React from 'react';
import { Header } from '../Header/Navbar';
import { PageTitle } from '../Header/PageTitle';

class SchedulePage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <PageTitle pageTitle="Schedule" />
        <div className="titleHolder">
          <h2>Stay tuned for this years schedule!</h2>
        </div>
      </div>
    );
  }
}

export { SchedulePage };