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
    }
  }

handleChange = async (e) => {
  const{ name,value } = e.target
  this.setState(prevState => ({
    form: {
      [name]: value
    }
  }));
};

handleLogin = async () => {
  const userData = await loginUser(this.state.authFormData);
  this.setState({
    currentUser: userData.user
  })
  localStorage.setItem("jwt", userData.token)
};

// Function to register a user
// After register, we just call the login function with the same data
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
  render(){
    console.log('app', this.state.authFormData)
    console.log('currentUser', this.state.currentUser)

    return (
      <div className="App">
        <Header />
        <Login  handleLogin={(e) => this.handleLogin(e)}
                handleAuthChange={this.handleAuth}
                authFormData={this.state.authFormData}
                handleRegister={(e) => this.handleRegister(e)}
                />
      </div>
    );
  }
}

export default App;
