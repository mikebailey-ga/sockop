import React from 'react';

const Hotspot = (props) => (
  <div className='card'>
    <div className='card-body'></div>
    <h5 className='card-title'>{props.hotspot.location}</h5>
    <p className='card-text'>People who need socks: {props.hotspot.people}</p>
    <a href="#" class="btn btn-primary">Dropoff</a>
  </div>
);

export default Hotspot; 