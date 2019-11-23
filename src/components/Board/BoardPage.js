import React from 'react';
import { Header } from '../Header/Navbar';

class BoardPage extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <h1>Hello World Board</h1>
      </div>
    );
  }
}

export { BoardPage };