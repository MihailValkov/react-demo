import React from 'react';
import styles from './follower.module.css';

const Follower = ({follower}) => {
  const {name, image} = follower;
  return (
    <div className={styles.user}>
        <img src={image} alt="profile" className={styles['user-img']}/>
        <div className={styles['username']}>{name}</div>
    </div>
  )
}

export default Follower
