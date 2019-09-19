import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import Main from './Component/Main/main.js';
import Planning from './Component/Planning/Planning.js';
import Profile from './Component/Profile/Profile';
import Register from './Component/Form/Register';
import { allGear, oneGear, deleteGear, loginUser, registerUser, tripGear } from './services/api';

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
    isShowing: false,
    gear:[],
    selectedGear: [],
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
  // e.preventDefault();
  const userData = await loginUser(this.state.authFormData);
  this.setState({
    currentUser: userData.user
  })
  localStorage.setItem("jwt", userData.token)
    this.props.history.push('/home')
};

handleLog = async (e) => {
  e.preventDefault();

  if(this.state.authLoginData.username !== ""  && this.state.authLoginData.password !== ""){

  const userData = await loginUser(this.state.authLoginData);
  this.setState({
    currentUser: userData.user
  })
  localStorage.setItem("jwt", userData.token)
  this.props.history.push('/home')
  }
};

handleRegister = async (e) => {
  e.preventDefault();

  if(this.state.authFormData.username !== "" && this.state.authFormData.email !== "" && this.state.authFormData.password !== ""){

  await registerUser(this.state.authFormData);
  this.handleLogin();
  }
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

getGear = async (e) => {
  const gear = await allGear();
  this.setState({gear});
};

handleGearClick = (e) => {

  this.setState(prevState => ({
    selectedGear: [...prevState.selectedGear, e.gear]
  }))
};

removeGearClick = (e) => {
  this.setState(prevState => ({
  selectedGear: prevState.selectedGear.filter((ele,i) => i !== e)
  })
)}

handleTripClick = async (e) => {
  e.preventDefault();
  await tripGear(1,1 )
}


componentDidMount() {
  this.getGear();
}

  render(){
console.log(this.state.selectedGear)
    return (
      <>
      <div className="App">

      <div>
        <Switch>
          <Route exact path='/'render={(props) => (
            <>
            <div className="ruksak-landing">RukSak</div>
              <Login  {...props}
                      handleLogin={(e) => this.handleLogin(e)}
                      handleRegister={(e) => this.handleRegister(e)}
                      authFormData={this.state.authFormData}
                      authLoginData={this.state.authLoginData}
                      handleChange={this.handleAuthLogin}
                      handleAuthChange={this.handleAuth}
                      handleLog={(e) => this.handleLog(e)}
                      />
            </>
            )}/>
          <Route path='/home' render={() => (
            <>
              <Header />
              <Main />
            </>
          )}/>
        <Route path='/planning' render={(props) => (
            <>
              <Header />
              <Planning {...props}
                    selectedGear={this.state.selectedGear}
                    getGear={this.getGear}
                    gear={this.state.gear}
                    handleGearClick={(e) => this.handleGearClick(e)}
                    handleRemoveClick={(e)=>this.removeGearClick(e)}
                />
            </>
            )}/>
          <Route path='/profile' render={() => (
            <>
              <Header />
              <Profile />
            </>
          )}/>
          />
        </Switch>
      </div>
      </div>
      </>
    );
  }
}

export default withRouter(App);
