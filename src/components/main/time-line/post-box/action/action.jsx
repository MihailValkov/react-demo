import React, { useState, useEffect } from 'react';
import styles from './action.module.css';
import service from '../../../../../service/fetchService';

const Action = ({ username ,userImage ,postId ,setNewComment , setActiveClass , activeClass }) => {
  const [likeCounter , setLikeCounter] = useState(0);
  const [commentsCounter , setCommentsCounter] = useState(0);
  const [comment, setComment]= useState('');
  const [iconClass , setIconClass] = useState('far fa-heart')

  const like = (e) => {
    const postId = e.currentTarget.id;
    if(iconClass === `${styles['is-like']} fas fa-heart`) {
      service.post(`/posts/edit/${postId}`,{username,disLike:true}, { credentials : 'include'})
      .then(usersLike=>{
        const likes = usersLike.length > 0 ? usersLike.length : 0;
        setLikeCounter(likes)
        setIconClass('far fa-heart') 
    })
    } else {

      service.post(`/posts/edit/${postId}`,{username,like:true}, { credentials : 'include'})
      .then(usersLike=>{
        const likes = usersLike.length > 0 ? usersLike.length : 0;
          setLikeCounter(likes)
          setIconClass(`${styles['is-like']} fas fa-heart`) 
      })
    }
  }

  const showCommentBox = () => {
    activeClass === '' ? setActiveClass('active') : setActiveClass('')

  }
  useEffect(()=> {
    service.get(`/posts/${postId}`,{}, { credentials : 'include'})
    .then(({likes,comments}) => {
      setLikeCounter(likes.length)
      setCommentsCounter(comments.length)
      if (likes.includes(username) ) {
        setIconClass(`${styles['is-like']} fas fa-heart`) 
      } else {
        setIconClass('far fa-heart') 
      }
    })
    
  },[])


  const getComment= (e) => {
   e.target.style.height = e.target.scrollHeight+'px';
   setComment(e.target.value)
 
  }

  const sendComment = () => {
    if(comment !== '') {
      service.post(`/comment/create`,{username,userImage,comment,postId}, { credentials : 'include'})
      .then(newCmt => {
        setComment('')
        setCommentsCounter(commentsCounter+1)
        setNewComment(newCmt)
      })
    }
  }

  return (
        <div className={styles['album-actions']}>
          <div className={`${styles[`${activeClass}`]} ${styles['commentBox']}`}>
            <textarea onChange={getComment} value={comment}></textarea>
            
          </div>
           <button id={postId} className={styles['album-action']} type='button' onClick = { like } > <i className={iconClass}></i> {likeCounter} </button>
           <button className={styles['album-action']} type='button' onClick = { showCommentBox } > <i className='far fa-comment-alt'></i> {commentsCounter } </button>
           <button onClick={sendComment} className={`${styles['album-action']} ${styles[`${activeClass}`]}`}  type="button"><i className='far fa-paper-plane'></i></button> 
        </div>
  )
}

export default Action
