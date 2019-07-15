import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DropoffPage from './pages/DropoffPage/DropoffPage';
import ViewPage from './pages/ViewPage/ViewPage';
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
      hotspots: [],
      hotspotSelected: null,
      districtSelected: null,
      dropState: 'map'
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

  selectHotspot = (e) => {
    this.setState({hotspotSelected: e.target.name});
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">SockOp
        <Navbar 
          handleLogout = {this.handleLogout}
          user={this.state.user}
        />
      </header>

      <Switch>
        <Route exact path='/' render={() =>
          <Homepage 
          />
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
            hotspotSelected = {this.state.hotspotSelected}
            districtSelected = {this.state.districtSelected}
            dropState = {this.state.dropState}
            selectHotspot = {this.selectHotspot}
            hotspots = {this.state.hotspots}
            dropoffs = {this.dropoffs}
            history={history}
            user={this.state.user}
          />
        }/>
        <Route exact path='/view' render={() =>
          <ViewPage 
            user={this.state.user}
          />
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
