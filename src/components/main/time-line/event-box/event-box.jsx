import React from 'react';
import styles from './event-box.module.css';

const EventBox = ({event}) => {
  const {eventImage, eventTitle , eventFullDate , month , day} = event;
  return (
    <div className={`${styles['event']} ${styles['box']}`}>
        <div className={styles['event-wrapper']}>
            <img src={eventImage} alt='event' className={styles['event-img']} />
            <div className={styles['event-date']}>
                <div className={styles['event-month']}>{ month } </div>
                <div className={styles['event-day']}>{ day }</div>
            </div>
            <div className={styles['event-title']}>{ eventTitle }</div>
            <div className={styles['event-subtitle']}>{ eventFullDate }</div>
        </div>
    </div>
  )
}

export default EventBox
