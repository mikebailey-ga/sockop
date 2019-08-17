import React from 'react';

const Hotspot = (props) => (
  <div className='card center-this'>
    <img className='card-img-top' src={props.hotspot.image}/>

    <div className='card-body'>
      <h5 className='card-title'>{props.hotspot.location}</h5>
      <a href="#" data-image={props.hotspot.image} name={props.hotspot.location} onClick={props.selectHotspot} className="btn btn-primary">Select</a>
    </div>  
  </div>
);

export default Hotspot; 