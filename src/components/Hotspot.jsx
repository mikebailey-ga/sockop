import React from 'react';

const Hotspot = (props) => (
  <div className='card center-this'>
    <div className='card-body'>
      <h5 className='card-title'>{props.hotspot.location}</h5>
      <p className='card-text'>Est. # of pairs needed: {props.hotspot.people}</p>
      <a href="#" name={props.hotspot.location} onClick={props.selectHotspot} className="btn btn-primary">Select</a>
    </div>  
  </div>
);

export default Hotspot; 