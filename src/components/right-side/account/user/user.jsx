import React from 'react';
import styles from './user.module.css';

const AccountUser = () => {
  return (
        <span className={styles['account-user']}>Quan Ha
            <img src="https://images.genius.com/2326b69829d58232a2521f09333da1b3.1000x1000x1.jpg" 
             className={styles['account-profile']} alt="account-profile"/>
            <span>▼</span>
        </span>
  )
}

export default AccountUser
