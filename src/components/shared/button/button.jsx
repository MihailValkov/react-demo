import React from 'react';
import styles from './button.module.css'

const Button = ({clickHandler, title}) => {
  return (
    <button onClick={clickHandler} title={title} type='button' className={styles['intro-menu']}>
    <span></span> <span></span> <span></span>
    </button>
  )
}

export default Button
