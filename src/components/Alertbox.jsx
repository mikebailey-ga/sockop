import React from 'react';
import { Alert } from 'reactstrap';

const Alertbox = (props) => {
  return (
    <div>
      <Alert color="success" isOpen={props.isOpen}>
        Thank you for dropping off socks!
      </Alert>
    </div>
  );
};

export default Alertbox;