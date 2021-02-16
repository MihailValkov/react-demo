import React from 'react';
import styles from './photo.module.css'

const Photo = ({path}) => {
  return (
    <img src={path} alt="album-cover" className={styles['album-photo']} />
  )
}

export default Photo
