import React, { Component } from 'react';
import Drop from '../../components/Drop';
class ViewPage extends Component {

  state = {
    drops: []
  };

  async componentDidMount(){
    let drops = await fetch('/api/drop').then(res=>res.json());
    this.setState({drops});
  }  

  render() {
    return (
      <div className = 'drop-list'>
        {this.state.drops.map((drop) =>
          <Drop
            drop = {drop}
          />
        )}
      </div>
    );
  }
}

export default ViewPage;