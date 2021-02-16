import React from 'react';
import styles from './user.module.css';

const StoriesUser = ({user}) => {
    const {userImage ,username ,lastOnline} = user;
  return (
        <div className={styles['user']}>
            <img src={userImage}
             alt="user-img" className={styles['user-img']} />
            <div className={styles['username']}>{username}
                <div className={styles['user-date']}>{lastOnline}</div>
            </div>
        </div>
  )
}

export default StoriesUser
