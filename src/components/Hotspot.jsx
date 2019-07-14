import React from 'react';

const Hotspot = (props) => (
  <div className='hotspot'>
    <li>{props.hotspot.location}</li>
    <li>{props.hotspot.people}</li>
  </div>
);

export default Hotspot; 