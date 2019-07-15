import React from 'react';
import Hotspot from '../../components/Hotspot';
import DropoffForm from '../../components/DropoffForm';

const DropoffPage = (props) => (
  props.hotspotSelected ?
    <div>
    <DropoffForm  
      hotspotSelected = {props.hotspotSelected}
    />
    </div>
  :
    <div className='hotspot-list'>
      {props.hotspots.map((hotspot, idx) =>
        <Hotspot 
          selectHotspot = {props.selectHotspot}
          hotspot = {hotspot}
          key = {hotspot.location}
        />
      )}
    </div>
);

export default DropoffPage;