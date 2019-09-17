import React from 'react';
import './form.css'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        username: null,
        password: null,
      },
    };
  };

  handleChange = async (e) => {
    const{ name,value } = e.target
    this.setState(prevState => ({
      form: {
        [name]: value
      }
    }));
  };

  render() {
    console.log('form ', this.props.authLoginData)

    return (
      <div className="formContainer">

        <div className="returnUsers">

          <h2 className="formHeading">Sign In</h2>
          <form className="returningForm" id="login"
            onSubmit={(e) => this.props.handleLog(e)}
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              value={this.props.authLoginData.username}
              onChange={this.props.handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              value={this.state.form.username}
              onChange={(e) => this.props.handleChange(e)}
            />
          <button className="submit signIn">Sign In</button>
          <button>Register</button>
          </form>
        </div>

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
          <button>Register</button>
          </form>
          <button className="submit">Register</button>
        </div>
      </div>
    )
  };
};

export default Form;
