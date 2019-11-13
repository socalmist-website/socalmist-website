import React from 'react';
import fbapp from '../../firebase';

class AdminPanel extends React.Component {
  constructor(props) {
    super(props);

    this.clickSignOut = this.clickSignOut.bind(this);
  }

  clickSignOut() {
    fbapp.auth().signOut().then(p => {
      this.props.updateParent();
    });
  }

  render() {
    return (
      <div>
        <button onClick={ this.clickSignOut }>Sign out</button>
      </div>
    );
  }
}

export { AdminPanel };