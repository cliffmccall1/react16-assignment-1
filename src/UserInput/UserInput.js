import React from 'react';

const userInput = props => {
  const style = {
    width: '60%',
    margin: '16px',
    border: '2px dotted blue',
    textAlign: 'center',
    padding: '10px'
  };
  return (
    <input
      type="text"
      style={style}
      onChange={props.changed}
      value={props.currentName}
    />
  );
};

export default userInput;
