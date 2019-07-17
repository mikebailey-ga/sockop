import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//AIzaSyCinVD6I6m_waucc2uRUCgliPmqui09Ljo
class Homepage extends Component {

  render(){
    return (
      <>
        <div className='fuzz-blue'/>
        <div className='homepage-intro'>
          <h2 className='homepage-text'>Socks are among the most requested items by the homeless</h2>
          <div className='fuzz-red'/>
          <h2 className='homepage-text'>Make a pledge to drop off a package of socks</h2>
          <div className='fuzz-blue'/>          
          <Link to='/dropoff'>  
            <button className="cta btn btn-default">Give Some Socks!</button>
          </Link>
        </div>
      </>
    );
  }
}

export default Homepage;