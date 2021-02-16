import React from 'react';
import styles from './user.module.css';

const ContactsUser = ({contact}) => {
    const {userImage, username, userStatus, lastOnline} = contact;
  return (
        <div className={styles['user']}>
            <img src={userImage} alt='user-img' className={styles['user-img']}/>
            <div className={styles['username']}>{username}
                <div className={styles['user-date']}>{lastOnline}</div>
            </div>
            <div className={`${styles['user-status']} ${styles[`${userStatus}`]}`}></div>
        </div>
  )
}

export default ContactsUser
