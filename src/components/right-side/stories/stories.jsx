import React from 'react';
import StoriesUser from './user/user';
import styles from './stories.module.css';

const Stories = () => {
    const users= 
    [ { userImage : 'https://pbs.twimg.com/profile_images/1102351320567164931/ZCkJgJIH.png',
    username:'Lisandro Matos',lastOnline:'12 hours ago' },
    { userImage : 'https://pbs.twimg.com/profile_images/1153966095444992000/1lpIyHaQ.jpg',
    username:'Gvozden Boskovsky',lastOnline:'29 minutes ago' },
    { userImage : 'https://pbs.twimg.com/profile_images/1157046181698011136/xZ4wg2Xj.jpg',
    username:'Hnek Fortuin',lastOnline:'3 hours ago' },
    { userImage : 'https://pbs.twimg.com/profile_images/1108443816565059590/Te-0H20q.png',
    username:'Lubomir Dvorak',lastOnline:'18 hours ago' }
    ].map(user=> <StoriesUser user={user} />)

  return (
    <div className={`${styles['stories-wrapper']} ${styles['stories']}`}>
        <div className={styles['stories-title']}>STORIES</div>
        { users ? users : <div>no data</div>}
    </div>
   
  )
}

export default Stories
