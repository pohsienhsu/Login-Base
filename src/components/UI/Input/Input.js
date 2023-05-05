import React from 'react';

import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div className={`${styles.control} ${props.isValid === false ? styles.invalid : ''}`}>
      <label htmlFor={props.inputId}>{props.label}</label>
      <input
        type={props.type}
        id={props.inputId}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
}

export default Input;