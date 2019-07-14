import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
//import adminService from '../../services/adminService';

class Admin extends Component {

  state = {
    location: '',
    people: ''
  };
  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleChange = (e) => {
    this.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }
  
  handleAddHotspot = (e) => {
    e.preventDefault();
    console.log('Submitted');
    fetch('/api/hotspot/add', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(this.state)
    })
  }

  isFormInvalid() {
    return !(this.state.location && this.state.people);
  }

  render() {
    return (
      <div>
        <h1>Add Hotspot</h1>
        <form className="form-horizontal" onSubmit={this.handleAddHotspot} >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="Location" value={this.state.location} name="location" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="People" value={this.state.people} name="people" onChange={this.handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn btn-default" disabled={this.isFormInvalid()}>Add Hotspot</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
            </div>
          </div>
        </form>          
      </div>
    );
  }
}
export default Admin;