import React from 'react';
import './UserOutput.css';

const userOutput = props => {
  return (
    <div className="UserOutput">
      <p>Use the input field above to change the Username</p>
      <p>
        Username: <span className="hl"> {props.userName} </span>
      </p>
    </div>
  );
};

export default userOutput;
