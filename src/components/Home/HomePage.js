import React from 'react';
import { Header } from '../Header/Navbar';
import Banner from './Banner';
import './HomePage.css';

class HomePage extends React.Component {

  render() {
    return (
      <div class="pageBody">
        <Header />
        <Banner />
      </div>
      
    );
  }
}

export { HomePage };