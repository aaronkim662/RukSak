import React from 'react';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import { allGear, oneGear, deleteGear, loginUser, registerUser} from './services/api';

import './App.css';

class App extends React.Component {
  state = {
    currentUser: null,
    form: {
      username: "",
    },
    authFormData: {
      email: "",
      username: "",
      password: "",
    },
    authLoginData: {
      username: "",
      password: "",
    },
  }

handleChange = async (e) => {
  const{ name,value } = e.target
  this.setState(prevState => ({
    form: {
      [name]: value
    }
  }));
};

handleLogin = async (e) => {
  e.preventDefault();
  const userData = await loginUser(this.state.authFormData);
  this.setState({
    currentUser: userData.user
  })
  localStorage.setItem("jwt", userData.token)
};

handleLog = async (e) => {
  e.preventDefault();
  const userData = await loginUser(this.state.authLoginData);
  this.setState({
    currentUser: userData.user
  })
  localStorage.setItem("jwt", userData.token)
};

handleRegister = async (e) => {
  e.preventDefault();
  await registerUser(this.state.authFormData);
  this.handleLogin();
};

handleLogout = () => {
  localStorage.removeItem("jwt");
  this.setState({
    currentUser: null
  })
}

handleAuth = async (e) => {
  const { name, value } = e.target
  this.setState(prevState => ({
    authFormData: {
      ...prevState.authFormData,
      [name]: value,
    }
  }))
};

handleAuthLogin = async (e) => {
  const { name, value } = e.target
  this.setState(prevState => ({
    authLoginData: {
      ...prevState.authLoginData,
      [name]: value,
    }
  }))
};

  render(){
    return (
      <div className="App">
        <Header />
        <Login  handleLogin={(e) => this.handleLogin(e)}
                handleRegister={(e) => this.handleRegister(e)}
                authFormData={this.state.authFormData}
                authLoginData={this.state.authLoginData}
                handleChange={this.handleAuthLogin}
                handleAuthChange={this.handleAuth}
                handleLog={(e) => this.handleLog(e)}
                />
      </div>
    );
  }
}

export default App;
