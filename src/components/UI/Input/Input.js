import React, { useRef, useImperativeHandle } from 'react';

import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {

  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  }

  useImperativeHandle(ref, () => {
    return {
      focus: activate
    }
  });

  return (
    <div className={`${styles.control} ${props.isValid === false ? styles.invalid : ''}`}>
      <label htmlFor={props.inputId}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.inputId}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  )
});

export default Input;