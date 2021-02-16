import React from 'react';
import styles from './info-item.module.css';

const InfoItem = ({ edit , icon , title , info , name ,onChange}) => {
     return edit === true 
      ?  <div className={styles['info-item']}>
          <p className={styles['edit-profile']} > {title}: <input onChange={onChange} name={name} value={info}/> </p>
        </div> 
      : <div className={styles['info-item']}>
          <i className={icon}></i>
          {title} <span>{ info } </span>
        </div>
    
    
}

export default InfoItem
