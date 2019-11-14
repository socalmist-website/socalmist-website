import React from 'react';
import { Header } from '../Header/Navbar';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <h1>Hello World</h1>
        </div>
      </div>
    );
  }
}

export { HomePage };