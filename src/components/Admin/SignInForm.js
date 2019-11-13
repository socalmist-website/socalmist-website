import React from "react";
import fbapp from '../../firebase';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event)  {
    this.setState({
      username: event.target.value,
    });
  };

  handlePasswordChange(event)  {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit(event) {
    //alert("Test: " + this.state.username + " " + this.state.password);
    fbapp.auth().signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(p => {
        this.props.updateParent();
      })
      .catch (e => {
        this.setState({
          error: e.message
        });
      })
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>{this.state.error}</p>
        <label>Username:</label>
        <input
          type="text"
          value={this.state.username}
          onChange={this.handleUsernameChange}
        />
        <label>Password:</label>
        <input
          type="text"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export { SignInForm };
