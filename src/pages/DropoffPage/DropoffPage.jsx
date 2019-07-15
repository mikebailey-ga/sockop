import React from 'react';
import Hotspot from '../../components/Hotspot';
import DropoffForm from '../../components/DropoffForm';
import Map from '../../components/Map';

const DropoffPage = (props) => (
  /*
  switch(props.dropState) {
    case 'map':
      return <Map />;
    default:
      return null;
  }
  */
  
  props.hotspotSelected ?
    <div>
    <DropoffForm  
      hotspotSelected = {props.hotspotSelected}
      history = {props.history}
    />
    </div>
  :
    <>
      <Map />
      <div className='hotspot-list'>
        {props.hotspots.map((hotspot) =>
          <Hotspot 
            selectHotspot = {props.selectHotspot}
            hotspot = {hotspot}
            key = {hotspot.location}
          />
        )}
      </div>
    </>
    
);
export default DropoffPage;