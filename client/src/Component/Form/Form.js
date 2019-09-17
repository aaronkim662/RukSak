import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: null,
        password: null,
        email: null,
      },
      test: {
        val: ''
      }
    };
  };
  render() {
    console.log('form ', this.props.authFormData)

    return (
      <div className="formContainer">

        <div className="returnUsers">
          <h2>Returning Users</h2>
          <form className="returningForm" id="login"
            onSubmit={() => this.props.handleLogin()}
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.props.authFormData.username}
              onSubmit={this.props.handleAuthChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.props.authFormData.password}
              onChange={this.props.handleAuthChange}
            />
          </form>
        </div>

        <div className="newUsers">
          <h2>New Users</h2>
          <form className="returningForm" id="register"
            onSubmit={this.props.handleRegister}
          >
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.props.authFormData.email}
            onChange={(e) => this.props.handleAuthChange(e)}
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
              onChange={(e) => this.props.handleAuthChange(e)}
            />
          <button>Register</button>
          </form>
        </div>
      </div>
    )
  };
};

export default Form;
