import React, { useState } from 'react';
import styles from './status.module.css'
import convertMinutes from '../../../../../utils/timeConvert';
import Button from '../../../../shared/button/button';
import service from '../../../../../service/fetchService';

const Status = ({postId ,user, createdAt,pictures ,setNewPost , editPost}) => {
  const { userImage }= user && user.userInfo; 
  const [ active , setActive] = useState('');


  const now = new Date().getTime()
  const then = new Date(`${createdAt}`).getTime();
  const minutes = (now - then)/ 1000 / 60 ;
  const timeStamp = convertMinutes(minutes);

  const showEditMenu = () => {
    active === '' ? setActive('active') : setActive('')
  }

  const deletePost = () => {
    service.post(`/posts/delete/${postId}`,{},{credentials : 'include'}).
    then(response => setNewPost(response._id))
  }
  
  return (
        <div className={styles['album-status']}>
            <img src={userImage} className={styles['album-status-img']} alt='account-profile' />
            <span className={`${styles['edit-post']} ${styles[`${active}`]}`}>
                  <i  onClick={editPost} title='edit post' className="fas fa-edit"></i> 
                  <i  onClick={deletePost} title='delete post' className="fas fa-trash-alt"></i>
                </span>
            <div className={styles['album-detail']}>
              {pictures.length>0 
                ? <div className={styles['album-title']}><strong>{ user && user.username }
                    </strong> create new <span>album</span>
                  </div>
                : <div className={styles['album-title']}><strong>{ user && user.username } </strong> create new <span>Post</span> 
                </div>
            }
                <div className={styles['album-date']}>{ timeStamp || "Now"}</div>
                <Button clickHandler={showEditMenu} title='edit post' />
                
            </div>


            
            
        </div>  
  )
}

export default Status
