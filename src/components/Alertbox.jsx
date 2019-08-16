import React from 'react';
import { Alert } from 'reactstrap';

const Alertbox = (props) => {
  return (
    <div>
      <Alert color="success" isOpen={props.isOpen}>
        This is a success alert — check it out!
      </Alert>
    </div>
  );
};

export default Alertbox;