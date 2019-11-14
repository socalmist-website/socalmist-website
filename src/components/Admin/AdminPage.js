import React from 'react';
import { Header } from '../Header/Navbar';
import { SignInForm } from './SignInForm';
import { AdminPanel } from './AdminPanel';
import fbapp from '../../firebase';

class AdminPage extends React.Component {
  constructor(props) {
    super(props);

    this.updateThis = this.updateThis.bind(this);
  }

  updateThis() {
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <Header />
        {fbapp.auth().currentUser == null 
        ? <SignInForm updateParent={this.updateThis} />
        : <AdminPanel updateParent={this.updateThis} />}
      </div>
    );
  }
}

export { AdminPage };