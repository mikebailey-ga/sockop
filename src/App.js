import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DropoffPage from './pages/DropoffPage/DropoffPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Navbar from './components/Navbar'
import Admin from './pages/Admin/Admin';
import userService from './services/userService';
import tokenService from './services/tokenService';
import statService from './services/statService';
import './App.css';

class App extends Component {

  constructor(e){
    super();
    this.state = {
      user: userService.getUser(),
      hotspots: []
    }
  }

  async componentDidMount(){
    let hotspots = await fetch('/api/hotspot').then(res=>res.json());
    this.setState({hotspots});
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
      <Navbar 
        user={this.state.user}
      />
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
        <Route exact path='/dropoff' render={({ history }) => 
          <DropoffPage
            hotspots = {this.state.hotspots}
            dropoffs = {this.dropoffs}
            history={history}
            user={this.state.user}
          />
        }/>
        <Route exact path='/profile' render={() =>
          <h1>Profile</h1>
        }/>
        <Route exact path='/admin' render={() =>
          <Admin 
          user={this.state.user}
          />
        }/>                                
      </Switch>
    </div>
    );}
}

export default App;
