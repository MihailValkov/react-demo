import React from 'react';
import styles from './search-bar.module.css';

const SearchBar = ({showRightSideMenu}) => {
  return (
    <div className={styles['search-bar']}>
        <input type="text" placeholder="Search" />
        <button onClick={showRightSideMenu} className={styles['right-side-button']} >
            <i className='fas fa-comment-alt'></i>
        </button>
    </div>
  )
}

export default SearchBar
