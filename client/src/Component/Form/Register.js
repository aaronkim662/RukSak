import React from 'react';
import './form.css';

class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowing: false,
    }
  }

  render() {
    return (
      <div className="newUsers">
       <h2 className="formHeading">Register</h2>
        <form className="returningForm" id="register"
          onSubmit={this.props.handleRegister}
        >
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.props.authFormData.email}
            onChange={this.props.handleAuthChange}
          />
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.props.authFormData.username}
            onChange={this.props.handleAuthChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.props.authFormData.password}
            onChange={this.props.handleAuthChange}
          />
          <button className="submit">Register</button>
        </form>
      </div>
    )
  }
}




export default Register;
