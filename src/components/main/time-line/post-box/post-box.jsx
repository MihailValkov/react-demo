import React, { useState, useEffect } from 'react';
import Status from './status/status';
import Content from './content/content';
import Action from './action/action';
import styles from './post-box.module.css';
import service from '../../../../service/fetchService';

const PostBox = ({ user, postId, setNewPost }) => {
  const [post ,setPost] = useState({});
  const [activeClass, setActiveClass]= useState('');
  const [newComment, setNewComment] = useState({});
  const [ editAction , setEditAction ] = useState(false) 
  
  useEffect(()=> {
    service.get(`/posts/${postId}`,{},{credentials : 'include'})
    .then(post => {setPost(post)})
  },[])

  const editPost = () => {
    editAction === false ? setEditAction(true) : setEditAction(false) ;
  }


  return (
    <div className={`${styles.album} ${styles.box}`}>
        <Status editPost={editPost} setNewPost={setNewPost} postId={postId} user = { user } createdAt= { post.createdAt } pictures={post.pictures || ''} />
        <Content editPost={editPost} editAction={editAction} activeClass={activeClass} newComment={newComment} postId = {postId}/>
        <Action setNewComment= {setNewComment} userImage={user.userInfo.userImage} username = {user.username} postId={postId} activeClass={activeClass} setActiveClass={setActiveClass} />
    </div>
  )
}

export default PostBox
