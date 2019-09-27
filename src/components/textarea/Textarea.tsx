import React from 'react';
import './Textarea.scss';

const Textarea = (props: any) => {
    return (
      <textarea className="textarea" value={props.value} readOnly={props.readOnly}>
      </textarea>
    );
  }
  
  export default Textarea;
