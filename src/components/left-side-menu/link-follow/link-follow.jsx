import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './link-follow.module.css'

const LinkFollow = ({path,currentUserImage,currentUsername}) => {
  return (
     <NavLink to={path} className={styles['follow-me']}>
     <span className={styles['follow-text']}>
     <i className="fas fa-home"></i>
       Follow me on Instagram
    </span>
     <span className={styles['follow-user']}>
       <img src={currentUserImage} alt='user-profile' />
      {currentUsername}
     </span>
   </NavLink>
  )
}

export default LinkFollow
