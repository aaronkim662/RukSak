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
          <h2 className="formHeading">Returning Users</h2>
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
        </div>
        <div className="newUsers">
          <h2 className="formHeading">New Users</h2>
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
        </div>
      </div>
    )
  };
};

export default Form;
