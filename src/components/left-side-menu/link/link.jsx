import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './link.module.css'

const Link = ({path,name, icon , secondClass , clickHandler }) => {
  return (
     <NavLink onClick = { clickHandler } className={`${styles.link} ${styles[`${secondClass}`]}`} to={path}> <i className={icon}></i> {name} </NavLink>
  )
}

export default Link
