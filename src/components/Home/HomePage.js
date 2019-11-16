import React from 'react';
import { Header } from '../Header/Navbar';

class HomePage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export { HomePage };