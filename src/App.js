import React, { Component } from 'react';
//import ImageMapper from 'react-image-mapper';
import { Switch, Route, Link } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import DropoffPage from './pages/DropoffPage/DropoffPage';
import ViewPage from './pages/ViewPage/ViewPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Navbar from './components/Navbar'
import Admin from './pages/Admin/Admin';
import userService from './services/userService';
//import tokenService from './services/tokenService';
import calcNeed from './services/statService';
import './App.css';

class App extends Component {
  
  colorArray = [
    'rgba(0, 255, 0, 0.3)',
    'rgba(60, 174, 0, 0.3)',
    'rgba(99, 130, 0, 0.3)',
    'rgba(125, 97, 0, 0.3)',
    'rgba(171, 66, 0, 0.3)',
    'rgba(255, 0, 0, 0.3)'
    ];

  constructor(e){
    super();
    this.state = {
      user: userService.getUser(),
      hotspots: [],
      need: [],
      updated: false,
      recentDrops: [],
      hotspotSelected: null,
      hotspotId: null,
      districtSelected: null,
      dropoffSubmitted: false    
    }
  }

  // async getInitialNeed(){
  //   let recentDrops = await fetch('/api/drop/recent').then(res=>res.json());
  //   let need = calcNeed(recentDrops); 
  //   this.setState({need}); 
  // }

  async componentDidMount(){
    let recentDrops = await fetch('/api/drop/recent').then(res=>res.json());
    let need = calcNeed(recentDrops);      
    this.setState({need: need, updated: true});    
  }  

  async componentDidUpdate(){
    if(!this.state.updated){
      let recentDrops = await fetch('/api/drop/recent').then(res=>res.json());
      let need = calcNeed(recentDrops);      
      this.setState({need});
    }
  }  

  /*
  async componentDidUpdate(prevProp){
    if(prevProp !== this.props){
      let recentDrops = await fetch('/api/drop/recent').then(res=>res.json());
      let need = calcNeed(recentDrops);      
      this.setState({need});      
    }
  }
*/
  handleSignupOrLogin = () => {
    this.setState({user: userService.getUser()});
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }  

  deselectDistrict = async () => {
    let recentDrops = await fetch('/api/drop/recent').then(res=>res.json());
    let need = calcNeed(recentDrops);
    this.setState({districtSelected: null, hotspotSelected: null, need: need, updated: true});
  }

  selectHotspot = (e) => {
    this.setState({
      hotspotSelected: e.target.name
    });
  }

  dropoffComplete = (e) => {
    this.setState({
      dropoffSubmitted: true
    });
  }  

  selectDistrict = (value) => {
    this.setState({districtSelected: value, dropoffSubmitted: false}, () => {
        this.updateHotspots();
    });
  }
  
  async updateHotspots(){
    let hotspots = await fetch(`/api/hotspot/${this.state.districtSelected}`).then(res=>res.json());
    this.setState({hotspots});  
  }  

  render() {
    return (
    <div className="App">
      <header className="App-header">
        <Link to='/' className='logo'>
          <span className='logo-blue'>S</span>
          <span className='logo-red'>O</span>
          <span className='logo-blue'>C</span>
          <span className='logo-red'>K</span>
          <span className='logo-blue'>O</span>
          <span className='logo-red'>P</span>
          </Link>
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
            hotspotId = {this.state.hotspotId}
            districtSelected = {this.state.districtSelected}
            dropState = {this.state.dropState}
            selectHotspot = {this.selectHotspot}
            selectDistrict = {this.selectDistrict}
            hotspots = {this.state.hotspots}
            dropoffs = {this.dropoffs}
            history={history}
            need={this.state.need}
            user={this.state.user}
            colorArray={this.colorArray}
            deselectDistrict={this.deselectDistrict}
            dropoffSubmitted={this.state.dropoffSubmitted}
            dropoffComplete={this.dropoffComplete}
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
