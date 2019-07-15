import React from 'react';
import Hotspot from '../../components/Hotspot';
import DropoffForm from '../../components/DropoffForm';
import Map from '../../components/Map';
import SelectHotspot from '../../components/SelectHotspot';

const DropoffPage = (props) => (
  <>
    <Map 
      className='image-map' 
      selectDistrict = {props.selectDistrict}
    />
    <SelectHotspot 
      hotspotSelected = {props.hotspotSelected}
      history = {props.history}
      hotspots = {props.hotspots}
      districtSelected = {props.districtSelected}
      selectHotspot = {props.selectHotspot}
    />
  </>
);
export default DropoffPage;