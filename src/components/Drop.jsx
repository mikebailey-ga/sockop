import React from 'react';

const Drop = (props) => (
<div className='card drop-view-card'>
  <img className='card-img-top' src='https://via.placeholder.com/150'/>
  <div className='card-body'>  
    <h4 className='card-title'>{props.drop.location}</h4>
    {props.drop.pairs} pairs of socks were dropped off on {props.drop.createdAt}
  </div>
</div>
);

export default Drop;