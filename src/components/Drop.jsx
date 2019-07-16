import React from 'react';

const Drop = (props) => (
  <div class="col-sm-6">
    <div className='card'>
      <img className='card-img-top' src='https://via.placeholder.com/150'/>
      <div className='card-body'>  
        <h5 className='card-title'>{props.drop.location}</h5>
        {props.drop.pairs} pairs of socks were dropped off on {props.drop.createdAt}
      </div>
    </div>
  </div>  
);

export default Drop;