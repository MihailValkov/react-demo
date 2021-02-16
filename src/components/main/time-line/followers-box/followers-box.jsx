import React from 'react'
import Follower from './follower/follower';
import styles from './followers-box.module.css';

const FollowersBox = ({user}) => {
    const followers = user && user.followers.map(follower => <Follower key={follower.id} follower={follower} />)
    
  return (
    <div className={`${styles['followers']} ${styles.box}`}>
        <div className={styles['intro-title']}>
            Your followers 
            <button className={styles['intro-menu']}></button>
        </div>
        {followers.length >0  ? followers : <div> there is no followers yet! </div>}
    </div>
  )
}

export default FollowersBox
