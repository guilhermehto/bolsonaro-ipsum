import React from 'react';
import './Input.scss';

type Props = {
    type: string
}

const Input = (props: Props) => {
    return (
      <input type={props.type} className="input">
      </input>
    );
  }
  
  export default Input;
