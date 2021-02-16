import React , { useState} from 'react';
import styles from './home.module.css'
import LeftSideMenu from '../left-side-menu/left-side-menu';
import Main from '../main/main';
import RightSide from '../right-side/right-side';

const Home = () => {

    const [leftSideMenu,setLeftSideMenu]=useState('');
    const [rightSideMenu,rightSideMenuIsActive]=useState('');
    const [overlay,setOverlay]=useState('');


    const showLeftSideMenu = () => {
        if (leftSideMenu === '') {
            setLeftSideMenu('active');setOverlay('active') ;
        } else {
            setLeftSideMenu('');setOverlay('');
        }
       
    }
    const showRightSideMenu = () => {
        if (rightSideMenu === '') {
            rightSideMenuIsActive('active') ;setOverlay('active');
        } else {
            rightSideMenuIsActive('');setOverlay('');
        }
        
    }

    const hideLeftOrRightMenu = () => {
        if (overlay === 'active') {
            rightSideMenuIsActive('') ;
            setLeftSideMenu('');
            setOverlay('');
        } 
    }
  return (

    <div className={styles.container}>
        <LeftSideMenu hideMenu={leftSideMenu} showMenu={showLeftSideMenu}/>
        <Main showRightSideMenu={showRightSideMenu}/>
        <RightSide rightSideMenu={rightSideMenu}/>
        <div onClick={hideLeftOrRightMenu} className={`${styles.overlay} ${styles[`${overlay}`]} `}></div>
    </div>
  )
}

export default Home
