import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'

import Form from './Component/Form/Form';
import Header from './Component/Header/Header';
import Main from './Component/main/main'
import Planning from './Component/planning/Planning'
import Profile from './Component/Profile/Profile'
// import { allGear, oneGear, deleteGear,}

import './App.css';

class App extends React.Component {
  state = {
    form: {
      username: null,
      password: null,
      email: null,
    }
  }
  handleChange = async (e) => {
const{ name,value } = e.target
  this.setState(prevState => ({
    form: {
      ...prevState.form,
      [name]: value
    }
  }));
}


  render(){
    return (
      <>
        <div className="App">
          <Header />
          <Form />
        </div>
        <div>
          <Switch>
            <Route path='/home' component={Main} />
            <Route path='/planning' component={Planning} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
