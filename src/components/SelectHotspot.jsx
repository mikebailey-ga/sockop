import React from 'react';
import DropoffForm from './DropoffForm';
import Hotspot from './Hotspot';

const SelectHotspot = (props) => (
  
  props.hotspotSelected ?
    <div>
      <DropoffForm  
        hotspotSelected = {props.hotspotSelected}
        hotspotId = {props.hotspotId}
        history = {props.history}
        districtSelected = {props.districtSelected}
        deselectDistrict={props.deselectDistrict}
      />
    </div>
  :
    <div className='hotspot-list container'>
      {props.hotspots.map((hotspot) =>
        <Hotspot 
          selectHotspot = {props.selectHotspot}
          hotspot = {hotspot}
          key = {hotspot.location}
        />
      )}
    </div>
);
export default SelectHotspot;