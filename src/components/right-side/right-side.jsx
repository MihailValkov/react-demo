import React from 'react';
import styles from './right-side.module.css';
import Account from './account/account';
import Stories from './stories/stories';
import Contacts from './contacts/contacts';
import SearchBar from './search-bar/search-bar';

const RightSide = ({rightSideMenu}) => {
  return (
        <div className={`${styles['right-side']} ${styles[`${rightSideMenu}`]}`} >
            <Account/>
            <Stories/>
            <Contacts/>
            <SearchBar/>
        </div>
  )
}

export default RightSide
