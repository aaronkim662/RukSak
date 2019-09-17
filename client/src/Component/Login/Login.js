import React from 'react';
import './Login.css'



class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
      password: null,
    };
  };


  handleChange = (e) => {
    console.log('this is handleChange', e.target.value);
    this.setState({
      username: e.target.value,
      password: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      username: e.target.value,
      password: e.target.value,
    });
  };


  render() {
    return (
      <div className="loginStyles">hello</div>
    )
  };
};

export default Login;
