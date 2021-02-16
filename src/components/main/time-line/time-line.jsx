import React , { useState,useEffect } from 'react';
import Introduction from './introduction/introduction';
import EventBox from './event-box/event-box';
import FollowersBox from './followers-box/followers-box';
import StatusBox from './status-box/status-box';
import PostBox from './post-box/post-box'
import styles from './time-line.module.css';
import service from '../../../service/fetchService';



const TimeLine = ({user}) => {
  const [ post , setPost ] = useState({title : ''});
  const [ posts , setPosts ]= useState([]);
  const [ newPost , setNewPost ]= useState('');

  const events = user && user.joinedEvents.map((event,i) => {
    event.day=event.eventFullDate.split(', ')[1].split(' ')[0] ;
    event.month=event.eventFullDate.split(', ')[1].split(' ')[1] ;
    return <EventBox key={i} event = { event }/>
  });
  
  const getPost = (e) => {
    setPost({ [e.target.name] : e.target.value });
  }

  const submitPost = () => {
    const { title } = post;
    service.post('/posts/create', {title}, {credentials: 'include'})
    .then(newPost=> {
      setNewPost(newPost);
      setPost({title:''})
    })
  }

  useEffect(()=> {
    service.get('/user/posts',{},{credentials : 'include'}).then(posts => setPosts(posts))
  },[newPost]);

  const allPosts = posts.slice(0).reverse().map(postId =><PostBox setNewPost={setNewPost}  key={postId} user={user} postId={postId}/>);
 

  return (
    <div className={styles.timeline}>
        <div className={styles['timeline-left']}>
            <Introduction user={user}/>
            { events ? events : <div>there is no events yet!</div>}
            <FollowersBox user={user}/>
        </div>
        <div className={styles['timeline-right']}>
          <StatusBox getPost={getPost} submitPost={submitPost} value={post.title} />
          { allPosts }
           </div>
      </div>
   
  )
}

export default TimeLine
