import React from 'react';
import AccountButton from './button/button';
import AccountUser from './user/user';
import styles from './account.module.css';

const Account = () => {
  return (
    <div className={styles['account']}>
      <AccountButton icon='far fa-envelope'/>
      <AccountButton icon='far fa-bell'/>
      <AccountUser/>
    </div>
  )
}

export default Account;
