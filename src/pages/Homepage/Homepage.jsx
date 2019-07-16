import React, {Component} from 'react';
import statService from '../../services/statService';

class Homepage extends Component {

  render(){
    return (
      <>
        <div className='homepage-intro'>
          <h2>Deliver Socks to People Who Need Them</h2>
          <p>There are nearly 10,000 people living on the streets of San Francisco.
            Socks are always in demand and a highly requested item.
          </p>
          <h3>But you can help! Here is how:</h3>
        </div>
        <div className='homepage-steps'>
          <ul>

          </ul>
        </div>
      </>
    );
  }
}

export default Homepage;