import React from 'react';
import styles from './error-message.module.css'

const ErrorMessage = ({message , errorClass}) => {
  return (
    <div className={`${styles.error} ${styles[`${errorClass}`]}`}><span >{message ? message : ''}</span></div>
  )
}

export default ErrorMessage
