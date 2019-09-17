import React from 'react';
import './form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: null,
        password: null,
        email: null,
      }
    };
  };

  render() {
    return (
      <div className="formContainer">
        <div className="returnUsers">
          <h2 className="formHeading">Sign In</h2>
          <form className="returningForm"
            onSubmit={this.props.onSubmit}
          >
            <input
              type="text"
              placeholder="email"
              onChange={this.props.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              onChange={this.props.handleChange}
            />
          </form>
          <button className="submit signIn">Sign In</button>
          <button>Register</button>
        </div>
        <div className="newUsers">
          <h2 className="formHeading">Register</h2>
          <form className="returningForm"
            onSubmit={this.props.onSubmit}
          >
            <input
              type="text"
              placeholder="username"
              onChange={this.props.handleChange}
            />
            <input
              type="text"
              placeholder="email"
              onChange={this.props.handleChange}
            />
            <input
              type="password"
              placeholder="password"
              onChange={this.props.handleChange}
            />
          </form>
          <button className="submit">Register</button>
        </div>
      </div>
    )
  };
};

export default Form;
