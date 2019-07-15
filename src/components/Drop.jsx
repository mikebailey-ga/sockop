import React, { Component } from 'react';

const Drop = (props) => (
<div className='card'>
  <div className='card-body'></div>
  <h5 className='card-title'>{props.drop.location}</h5>
  <p className='card-text'>User: {props.drop.user}</p>
</div>
);

export default Drop;