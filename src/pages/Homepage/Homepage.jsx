import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Homepage extends Component {

  render(){
    return (
      <>
        <div className='homepage-intro'>
          <h2>Homelessness in San Francisco is up 30% since 2017</h2>
          <p>On July 9, 2019, the San Francisco Point-in-Time Count and Survey was released. On January 24, <strong>8,011 homeless people were counted in San Francisco</strong>. (5,180 in 2017)</p>
          <p>Contemplating the complex issue of homelessness can make one feel hopeless, but you can ease comfort for our brothers and sisters on the street with a small but meaningful gesture</p>
          <h2>Socks are among the most requested items by homeless people</h2>
          <p>Makes sense ones you put yourselves in their...socks...</p>
          <h2>Make a pledge to drop off a package of socks</h2>
          <Link to='/dropoff'>  
            <button className="cta btn btn-default">Give Some Socks!</button>
          </Link>
        </div>
      </>
    );
  }
}

export default Homepage;