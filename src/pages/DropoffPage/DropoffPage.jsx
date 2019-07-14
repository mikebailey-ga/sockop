import React from 'react';
import Hotspot from '../../components/Hotspot';

const DropoffPage = (props) => (
  <div className='hotspot-list'>
    {props.hotspots.map((hotspot, idx) =>
      <Hotspot 
        hotspot = {hotspot}
      />
    )}
  </div>
);

export default DropoffPage;