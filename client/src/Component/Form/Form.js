import React from 'react';
import './form.css';

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
    console.log('reg', this.props.handleRegisterClick)

    return (
      <div className="formContainer">

        <div className="returnUsers">

          <h2 className="formHeading">Sign In</h2>
          <form className="form returningForm" id="login"
            onSubmit={(e) => this.props.handleLog(e)}
          >
            <input
              className="formInput"
              type="text"
              name="username"
              placeholder="username"
              value={this.props.authLoginData.username}
              onChange={this.props.handleChange}
            />
            <input
              className="formInput"
              type="password"
              name="password"
              placeholder="password"
              value={this.state.form.username}
              onChange={(e) => this.props.handleChange(e)}
            />

            <button className="submitSignIn" id="buttonSignIn">Sign In</button>
            <button
              className="newUserButton"
              onClick={(e) => this.props.handleRegisterClick(e)}>New Users</button>
          </form>
        </div>

        <div className="newUsers">
         <h2 className="formHeading">Register</h2>
          <form className="form returningForm" id="register"
            onSubmit={this.props.handleRegister}
          >
          <input
            className="formInput"
            type="text"
            name="email"
            placeholder="email"
            value={this.props.authFormData.email}
            onChange={this.props.handleAuthChange}
          />
            <input
              className="formInput"
              type="text"
              name="username"
              placeholder="username"
              value={this.props.authFormData.username}
              onChange={this.props.handleAuthChange}
            />
            <input
              className="formInput"
              type="password"
              name="password"
              placeholder="password"
              value={this.props.authFormData.password}
              onChange={this.props.handleAuthChange}
            />
            <button className="submit">Register</button>
          </form>
        </div>
      </div>
    )
  };
};

export default Form;
