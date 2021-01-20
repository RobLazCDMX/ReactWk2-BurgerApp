import React from 'react';

import classes from './Button.css';

const button = (props) => (
    <button 
    className={[classes.Button, classes[props.btnType]].join(' ')} // by attaching join(' ') at the end we make sure the array is a string
    onClick={props.clicked}>{props.children}</button>
);
 
export default button;