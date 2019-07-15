import React from 'react';
import Hotspot from '../../components/Hotspot';
import DropoffForm from '../../components/DropoffForm';

const DropoffPage = (props) => (
  props.hotspotSelected ?
    <DropoffForm  
      hotspotSelected = {props.hotspotSelected}
    />
  :
    <div className='hotspot-list'>
      {props.hotspots.map((hotspot, idx) =>
        <Hotspot 
          selectHotspot = {props.selectHotspot}
          hotspot = {hotspot}
        />
      )}
    </div>
);

export default DropoffPage;