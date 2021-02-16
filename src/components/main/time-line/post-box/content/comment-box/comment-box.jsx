import React from 'react';
import styles from './comment-box.module.css'
import convertMinutes from '../../../../../../utils/timeConvert';

const CommentBox = ({userImage, username , createdAt, comment }) => {

  const now = new Date().getTime()
  const then = new Date(`${createdAt}`).getTime();
  const minutes = (now - then)/ 1000 / 60 ;
  const timeStamp = convertMinutes(minutes);

  return (
        <div className={styles['comment-box']}>
            <img src={userImage} title={username} className={styles['comment-img']} alt='account-profile' />
            <div className={styles['comment-detail']}>
            <div className={styles['comment-date']}><strong>{username}</strong>{ timeStamp || `New comment`}</div>
            <span>{comment} </span>
            </div>

        </div>  
  )
}

export default CommentBox
