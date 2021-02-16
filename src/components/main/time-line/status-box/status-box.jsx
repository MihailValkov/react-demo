import React ,{useState,  useContext }from 'react';
import Link from '../../../left-side-menu/link/link';
import styles from './status-box.module.css';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../../store/store';

const StatusBox = ({ getPost , submitPost , value }) => {
    const { state , setState } = useContext(StoreContext)
    const [active, setActive] = useState({status : 'active'});
    const {userInfo}= state.user;

    const clickHandler = e => {
      const name = e.target.name ;
      active[name] === undefined 
      ? setActive({[name] : 'active'})
      : setActive({[name] : ''})
    }

  return (
    <div className= {`${styles.status} ${styles.box}`}>
        <div className={styles['status-menu']}>
            <NavLink to="#" onClick={clickHandler} name='status' className={`${styles['status-menu-item']} ${styles[`${active.status}`]}`} >Status</NavLink>
            <NavLink to="#" onClick={clickHandler} name='photos' className={`${styles['status-menu-item']}  ${styles[`${active.photos}`]}`}  >Photos</NavLink>
            <NavLink to="#" onClick={clickHandler} name='videos' className={`${styles['status-menu-item']}  ${styles[`${active.videos}`]}`}  >Videos</NavLink>
        </div>
        <div className={styles['status-main']}>
            <img src={userInfo && userInfo.userImage} className={styles['status-img']} alt='account-profile'/>
            <textarea onChange={getPost} className={styles['status-textarea']} value={value} name='title' placeholder="Write something"></textarea>
        </div>
        <div className={styles['status-actions']}>
          
            <Link secondClass='status-action' path='#' icon='fas fa-user'/>
            <Link secondClass='status-action' path='#' icon='fas fa-map-marker-alt'/>
            <Link secondClass='status-action' path='#' icon='fas fa-grin-stars'/>
       
            <button onClick={submitPost} type='button' className={styles['status-share']}>Share</button>
        </div>
    </div>
  
  )
}

export default StatusBox
