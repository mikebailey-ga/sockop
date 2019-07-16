import React, { Component } from 'react';
import Drop from '../../components/Drop';
import userService from '../../services/userService';

class ViewPage extends Component {

  state = {
    allDrops: [],
    userDrops: [],
    all: true,
    userId: userService.getUser()._id
  };

  async componentDidMount(){
    let allDrops = await fetch('/api/drop').then(res=>res.json());
    if (this.props.user){
      let userDrops = await fetch(`/api/drop/${this.state.userId}`).then(res=>res.json());
      this.setState({userDrops});
    }  
    this.setState({allDrops});
  }  

  handleView = (e) => {
    if (e.target.name == 'user'){
      this.setState({
        all: false
      });
    }
    if (e.target.name == 'all'){
      this.setState({
        all: true
      });
    }    
  }

  render() {
    return (
      <>
        <h2>Previous Sock Drops</h2>
        <div>
          <button name='all' 
            onClick={this.handleView} 
            className={this.state.all ? 'btn view-selected view-button': 'btn view-button'}>All Drops</button>
          <button name='user' 
            onClick={this.handleView} 
            className={this.state.all ? 'btn view-button': 'btn view-selected view-button'}>Your Drops</button>          
        </div>
        {this.state.all ? 
           <div className = 'container .card-columns'>
            {this.state.allDrops.map((drop) =>
              <Drop
                drop = {drop}
              />
            )}
          </div>
        :
          <div className = 'container .card-columns'>
            {this.state.userDrops.map((drop) =>
              <Drop
                drop = {drop}
              />
            )}
          </div>
        }
      </>
    );
  }
}

export default ViewPage;