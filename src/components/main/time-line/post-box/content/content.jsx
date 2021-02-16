import React, { useState, useEffect } from 'react';
import Photo from './photo/photo';
import styles from './content.module.css';
import service from '../../../../../service/fetchService';
import CommentBox from './comment-box/comment-box';

const Content = ({postId , newComment,activeClass,editAction, editPost}) => {

  const [post,setPost] = useState({});
  const [ title , setTitle ] = useState('')


  useEffect(()=> {
    service.get(`/posts/${postId}`, {} , {credentials : 'include'})
    .then(post=> {
      setPost(post);
      setTitle(post.title)
    })
  },[newComment])

  const getNewTitle = (e) => {
    setTitle(e.target.value)
  }

  const sendNewTitle = () => {
    debugger
    service.post(`/posts/edit/${postId}`,{title}, { credentials : 'include'})
    .then(title =>{
      setTitle(title) ;
      editPost();
    })
  }

  const allComments = post.comments && post.comments.length >0 ? post.comments.map(c => 
    <CommentBox userImage={c.userImage} username={c.username} createdAt={c.createdAt} comment ={c.comment}/>
    ) : null

  return (
    <div className={styles['album-content']}>
      {editAction === true 
        ? <span className={styles['title-actions']}> <input onChange={getNewTitle} type="text" value={title}/>
            <i onClick={sendNewTitle} class="far fa-check-circle"></i>
            <i class="far fa-times-circle"></i> 
         </span> 
        : <span>{title}</span> }

      
      {/* { pictures.length>0 
          ? (
            <div className={styles['album-photos']}>
              <Photo path={pictures[0]}/>
              <div className={styles['album-right']}>
              <Photo path={pictures[1]}/>
              <Photo path={pictures[2]}/>
              </div>
            </div>
            )
          : null
    } */} 
        <div className={`${styles[`${activeClass}`]} ${styles['comments-container']}`}>
        { allComments ? allComments : null }
        </div>
    </div>
  )
}

export default Content
