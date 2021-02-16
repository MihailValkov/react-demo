import React from 'react';
import styles from './button.module.css';

const AccountButton = ({icon}) => {
  return (
    <button className={styles['account-button']}>
        <i className={icon}></i>
    </button>
  )
}

export default AccountButton
