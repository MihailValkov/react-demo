import React, { useContext } from 'react';
import styles from './main.module.css';
import SearchBar from './search-bar/search-bar';
import Profile from './profile/profile';
import TimeLine from './time-line/time-line';
import { StoreContext } from '../store/store';

const Main = ({showRightSideMenu}) => {
  const {state} = useContext(StoreContext);
  if (!state.user) { return <div>Loading ...</div>}

  return (
    <div className={styles.main}>
    <SearchBar showRightSideMenu={showRightSideMenu}/>
    <div className={styles['main-container']}>
        <Profile />
        <TimeLine user={state && state.user}/>
     </div>
  </div>
 
  )
}

export default Main
