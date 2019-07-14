import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage/LoginPage';
import userService from './services/userService';
import tokenService from './services/tokenService';
import statService from './services/statService';
import './App.css';

class App extends Component {
  constructor(e){
    super();
    this.state = {
      user: userService.getUser()
    }
  }

  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }  

  render() {
    return (
    <div className="App">
      <header className="App-header">SockOp</header>
      <Switch>
        <Route exact path='/' render={() =>
          <h1>Home</h1>
        }/>

        <Route exact path='/login' render={({ history }) => 
          <LoginPage
            handleSignupOrLogin={this.handleSignupOrLogin}
            history={history}
          />
        }/>
        <Route exact path='/signup' render={({ history }) => 
          <SignUpPage
            handleSignupOrLogin={this.handleSignupOrLogin}
            history={history}
          />
        }/>

        <Route exact path='/users/profile' render={() =>
          <h1>Profile</h1>
        }/>                        
      </Switch>
    </div>
    );}
}

export default App;
