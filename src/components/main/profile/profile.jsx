/* eslint-disable no-undef */
import React, { useState , Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './profile.module.css';
import service from '../../../service/fetchService';
import { StoreContext } from '../../store/store';

const Profile = () => {
  const {state,setState}= useContext(StoreContext);
  const { user } = state;
  const { userImage , coverImage } = user && user.userInfo;
  const [profile, setProfile] = useState({timeLine : 'active'});

  const clickHandler = e => {
    const name = e.target.name ;
    profile[name] === undefined 
    ? setProfile({[name] : 'active'})
    : setProfile({[name] : ''})
  }


  const uploadCoverPicture = () => {
    cloudinary.openUploadWidget({cloudName: 'dofijitd8', apiKey:'535895213831866',uploadPreset: 'friends_book'},
     (error, result) => { 
        if (!error && result && result.event === "success") { 
           service.post(`/user/edit-profile/${user._id}`, { coverImage:result.info.url } , { credentials : 'include'})
          .then(user => setState({...state , user}))
        }
      })
    }

  const uploadAvatarPicture = () => {
    cloudinary.openUploadWidget({cloudName: 'dofijitd8', apiKey:'535895213831866',uploadPreset: 'friends_book'},
    (error, result) => { 
       if (!error && result && result.event === "success") { 
          service.post(`/user/edit-profile/${user._id}`, { userImage:result.info.url } , { credentials : 'include'})
         .then(user => setState({...state , user}))
       }
     })
   }


  return (
      <div className={styles.profile}>
        <div className={styles['profile-avatar']}>
          <img src={ userImage } alt="profile" className={styles['profile-img']}/>
          <p onClick={uploadAvatarPicture} className={styles['edit-avatar-photo']}> <i className="fas fa-edit"></i>  edit photo </p>
          <div className={styles['profile-name']}>{ user.username }</div>
        </div>
        { coverImage 
            ? <Fragment>
              <img src={ coverImage } alt="profile-cover" className={styles['profile-cover']}/>
              <p onClick={uploadCoverPicture} className={styles['edit-cover-photo']}> <i className="fas fa-edit"></i>  edit cover photo </p>
            </Fragment>
            : <p onClick={uploadCoverPicture} className={styles['edit-cover-photo']}> <i className="fas fa-edit"></i>  edit cover photo </p>
        }
        <div className={styles['profile-menu']}>
          <Link onClick={clickHandler} to='/test' name='timeLine' className={`${styles['profile-menu-link']} ${styles[`${profile.timeLine}`]}`}>Timeline</Link>
          <Link onClick={clickHandler} to='/test' name='about' className={`${styles['profile-menu-link']} ${styles[`${profile.about}`]}`} >About</Link>
          <Link onClick={clickHandler} to='/test' name='friends' className={`${styles['profile-menu-link']} ${styles[`${profile.friends}`]}`} >Friends</Link>
          <Link onClick={clickHandler} to='/test' name='photos' className={`${styles['profile-menu-link']} ${styles[`${profile.photos}`]}`} >Photos</Link>
          <Link onClick={clickHandler} to='/test' name='more' className={`${styles['profile-menu-link']} ${styles[`${profile.more}`]}`} >More</Link>
        </div>
    </div>
  )
}

export default Profile
