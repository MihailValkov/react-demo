import React, { useState, useContext} from 'react';
import InfoItem from './info-item/info-item';
import styles from './introduction.module.css'
import service from '../../../../service/fetchService';
import { StoreContext } from '../../../store/store';
import Button from '../../../shared/button/button';

const Introduction = ({user}) => {
  const {setState : setUserState, state : userState} = useContext(StoreContext)

  const [active,setActive]= useState('');
  const [action,setAction]= useState('');
  const [ edit , setEdit ] = useState(false);

  const {profession , companyName ,liveInCity}= user.userInfo;
  const [state,setState] = useState({profession , companyName ,liveInCity, username: user.username});

  const showEditMenu = () => {
    active === '' ? setActive('active') : setActive('')
  }

  const editProfile = () => {
    setEdit(!edit);
    action === '' ? setAction('active') : setAction('')
  }

  const changeProfileInfo = (e) => {
    const [name , value] = [e.target.name , e.target.value];
    setState({...state, [name] : value });
  }

  const setNewProfileData = () => {
    const { profession , companyName ,liveInCity, username } = state;
    service.post(`/user/edit-profile/${user._id}`, { profession , companyName ,liveInCity,username } , { credentials : 'include'})
    .then((user) => {
      setUserState({...userState ,user })
      editProfile()
    })
  }

  return (
    <div className={`${styles['intro']} ${styles['box']}`}>
        <span className={`${styles['edit-menu']} ${styles[`${active}`]}`}>
          <i onClick={editProfile} className="fas fa-edit"></i> 
        </span>
        <div className={styles['intro-title']}>
        Introduction
            <Button clickHandler={showEditMenu} title='click to edit profile' />
        </div>
        <div className={styles['info']}>
            <InfoItem onChange={changeProfileInfo} edit={edit} name='companyName' icon={'fas fa-gopuram'} 
             title={'Works at'} info={state.companyName}/> 
            <InfoItem onChange={changeProfileInfo} edit={edit} name='profession' icon={'fas fa-briefcase'} profession={state.profession} title={'Profession'} info={state.profession}/> 
            <InfoItem onChange={changeProfileInfo} edit={edit} name='liveInCity' icon={'fas fa-map-marker-alt'} title={'Live in'}  info={state.liveInCity}/>
            <InfoItem onChange={changeProfileInfo} edit={edit} name='username' icon={'fas fa-user'} title={'Name'}  info={state.username}/>
        </div>
        <span className={`${styles['edit-actions']} ${styles[`${action}`]}`}>
          <i onClick={setNewProfileData} className="far fa-check-circle"></i>
          <i onClick={editProfile} className="far fa-times-circle"></i>
        </span>
    </div>
    
  )
}

export default Introduction
