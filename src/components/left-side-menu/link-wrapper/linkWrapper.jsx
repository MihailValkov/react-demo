import React from 'react';
import styles from './link-wrapper.module.css';

const LinkWrapper = ({children,title}) => {
  return (
    <div className={styles['side-wrapper']}>
        <div className={styles['side-title']}>{title}</div>
        <div className={styles['side-menu']}>
          {children}
        </div>
      </div>
  )
}

export default LinkWrapper
