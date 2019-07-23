import React from 'react';

//AIzaSyA_zXCIbLpG_Tv9ijcxlgRHDkTvH4u1BsE

//https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyA_zXCIbLpG_Tv9ijcxlgRHDkTvH4u1BsE

const Drop = (props) => (
    <div className='card'>
      <img className='card-img-top' src='https://maps.googleapis.com/maps/api/staticmap?center=Hyde+and+Geary+st&zoom=16&scale=1&size=300x300&maptype=roadmap&key=AIzaSyA_zXCIbLpG_Tv9ijcxlgRHDkTvH4u1BsE&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CHyde+and+Geary+st'/>
      <div className='card-body'>  
        <h5 className='card-title'>{props.drop.location}</h5>
        <strong>{props.drop.pairs}</strong> pairs of socks were dropped off on {props.drop.createdAt.substring(5,10)}
      </div>
    </div>
);

export default Drop;