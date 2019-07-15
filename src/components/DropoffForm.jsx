import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class DropoffForm extends Component {
  state = {
    hotspotSelected: '',
    pairs: ''
  };

  updateMessage = (msg) => {
    this.setState({message: msg});
  }

  handleChange = (e) => {
    this.updateMessage('');
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  
  handleAddHotspot = (e) => {
    e.preventDefault();
    fetch('/api/drop/add', {
      method: 'POST',
      headers: new Headers({'Content-Type': 'application/json'}),
      body: JSON.stringify(this.state)
    })
  }

  isFormInvalid() {
    return !(this.state.pairs);
  }

  render(){
  <div>
    <form>
      <div className="form-group">
        <div className="col-sm-12">
          <input type="text" className="form-control" placeholder="# of Pairs" name="pairs" onChange={this.handleChange} />
          <input type="hidden" name={this.props.hotspotSelected}/>
        </div>
      </div>  
      <div className="form-group">
          <div className="col-sm-12 text-center">
            <button className="btn btn-default">Dropoff</button>&nbsp;&nbsp;
          <Link to='/dropoff'>Cancel</Link>
        </div>
      </div>      
    </form>  
  </div>
  }
}

export default DropoffForm;