import React from 'react';
import styles from './search-bar.module.css';

const SearchBar = () => {
  return (
        <div className={`${styles['search-bar']} ${styles['right-side']}`}>
            <input type="text" placeholder="Search" />
            <div className={styles['search-bar-icons']}>
                <i className="fas fa-cog"></i>
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-plus"></i>
            </div>
        </div>
  )
}

export default SearchBar
