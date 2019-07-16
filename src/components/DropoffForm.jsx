
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../services/userService';

class DropoffForm extends Component {

  state = {
    userId: '',
    location: '',
    pairs: ''
  };

  constructor(e){
    super();
    this.state = {
      userId: userService.getUser()._id
    }
  }

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleChange = (e) => {
    this.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value,
      location: this.props.hotspotSelected,
      district: this.props.districtSelected
    });
  }
  
  handleAddDrop = (e) => {
    e.preventDefault();
    fetch('/api/drop/add', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(this.state)
    });
    this.props.deselectDistrict();
    this.props.history.push('/dropoff');

  }

  isFormInvalid() {
    return !(this.state.pairs);
  }

  render(){
    return (    
      <>
        <form >
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" placeholder="# of Pairs" name="pairs" onChange={this.handleChange} />
            </div>
          </div>  
          <div className="form-group">
              <div className="col-sm-12 text-center">
                <button onClick={this.handleAddDrop} className="btn btn-default">Dropoff</button>&nbsp;&nbsp;
                <button onClick={this.props.deselectDistrict} className='btn btn-default'>Cancel</button>
            </div>
          </div>      
        </form>  
      </>
    );
  }
}

export default DropoffForm;