import React from 'react';

const Hotspot = (props) => (
  <div className='card'>
    <div className='card-body'></div>
    <h5 className='card-title'>{props.hotspot.location}</h5>
    <p className='card-text'>Est. # of pairs needed: {props.hotspot.people}</p>
    <a href="#" name={props.hotspot.location} onClick={props.selectHotspot} class="btn btn-primary">Select</a>
  </div>
);

export default Hotspot; 