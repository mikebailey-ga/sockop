import React from 'react';
import Map from '../../components/Map';
import SelectHotspot from '../../components/SelectHotspot';

const DropoffPage = (props) => (
  <>
    <div className='dropoff-page-header'>
      <h2>Drop Off Socks</h2>
      <p>Select a district, then select a drop off spot. The districts are color-coded by how many people have dropped off socks recently.</p>
    </div>
    <Map 
      sampleColor = {props.need['10']}
      className='image-map' 
      selectDistrict = {props.selectDistrict}
      colorArray = {props.colorArray}
      need = {props.need}
    />
    <SelectHotspot 
      hotspotSelected = {props.hotspotSelected}
      history = {props.history}
      hotspots = {props.hotspots}
      districtSelected = {props.districtSelected}
      deselectDistrict={props.deselectDistrict}
      selectHotspot = {props.selectHotspot}
    />
  </>
);
export default DropoffPage;