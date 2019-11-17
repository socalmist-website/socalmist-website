import React from 'react';
import { Header } from '../Header/Navbar';
import Banner from './Banner';
import Numbers from './Numbers';
import './HomePage.css';

class HomePage extends React.Component {

  render() {
    return (
      <div className="pageBody">
        <Header />
        <Banner />
        <Numbers />
      </div>
      
    );
  }
}

export { HomePage };