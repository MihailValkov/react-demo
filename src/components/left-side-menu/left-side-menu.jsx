import React, { useContext } from "react";
import styles from './left-side-menu.module.css';
import LinkWrapper from "./link-wrapper/linkWrapper";
import Link from "./link/link";
import LinkFollow from './link-follow/link-follow';
import { StoreContext } from "../store/store";

const LeftSideMenu = ({hideMenu,showMenu}) => {
  const { state } = useContext(StoreContext);
  if (!state.user) { return <div>Loading ....</div>} 
  const { username , userInfo } = state && state.user;


  return (
    <div className={`${styles['left-side']} ${styles[`${hideMenu}`]}`}>
      <div onClick={showMenu} className={styles['left-side-button']}>
        <i className="fa fa-bars"></i>
        <i className="fa fa-arrow-left"></i>
      </div>
      <div className={styles.logo}><span>FRIENDS</span> <span> BOOK</span></div>

      <LinkWrapper title={"MENU"}>
          <Link path={'/home'} name={'Home'} icon={'fas fa-home'} />
          <Link path={'/home'} name={'Latest News'} icon={'fas fa-home'} />
          <Link path={'/home'} name={'Explore'} icon={'fas fa-home'} />
          <Link path={'/home'} name={'Files'} icon={'fas fa-home'} />
          <Link path={'/home'} name={'Gallery'} icon={'fas fa-home'} />
          <Link path={'/home'} name={'Events'} icon={'fas fa-home'} />

      </LinkWrapper>
      <LinkWrapper title={"YOUR FAVORITES"}>
          <Link path={'/home'} name={'Home'} icon={'fas fa-home'} />
          <Link path={'/home'} name={'Test1'} icon={'fas fa-home'} />
          <Link path={'/home'} name={'Test2'} icon={'fas fa-home'} />
          <Link path={'/home'} name={'Test3'} icon={'fas fa-home'} />
          <Link path={'/home'} name={'Test4'} icon={'fas fa-home'} />
          <Link path={'/home'} name={'Test5'} icon={'fas fa-home'} />
      </LinkWrapper>

      <LinkFollow
         path={"https://twitter.com/AysnrTrkk"}
        currentUserImage={userInfo && userInfo.userImage}
        currentUsername={username}
        />
    </div>
  );
};

export default LeftSideMenu;
