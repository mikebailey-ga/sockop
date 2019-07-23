import React from 'react';

const Drop = (props) => (
    <div className='card'>
      <img className='card-img-top' src='https://via.placeholder.com/150'/>
      <div className='card-body'>  
        <h5 className='card-title'>{props.drop.location}</h5>
        <strong>{props.drop.pairs}</strong> pairs of socks were dropped off on {props.drop.createdAt.substring(5,10)}
      </div>
    </div>
);

export default Drop;