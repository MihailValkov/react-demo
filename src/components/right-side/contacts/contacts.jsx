import React from 'react';
import ContactsUser from './user/user';
import styles from './contacts.module.css';

const Contacts = () => {
    const contacts= [
        { userImage : 'https://randomuser.me/api/portraits/men/1.jpg',username : 'Andrei Mashrin',userStatus : 'online' },
        { userImage : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=046c29138c1335ef8edee7daf521ba50',username : 'Aryn Jacobssen',userStatus : 'offline' },
        { userImage : 'https://images.unsplash.com/photo-1575084713138-342cae5f8d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80',username : 'Carole Landu',userStatus : 'online' },
        { userImage : 'https://images.pexels.com/photos/598745/pexels-photo-598745.jpeg?h=350&auto=compress&cs=tinysrgb',username : 'Chineze Afa',userStatus : 'offline' },
        { userImage : 'https://pbs.twimg.com/profile_images/2452384114/noplz47r59v1uxvyg8ku.png',username : 'Mok Kwang',userStatus : 'online' },
        { userImage : 'https://randomuser.me/api/portraits/women/63.jpg',username : 'Naomi Yepes',userStatus : 'online' },
        { userImage : 'https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=61eaea85f1aa3d065400179c78163f15',username : 'Shaamikh Ale',userStatus : 'online' },
        { userImage : 'https://m.media-amazon.com/images/M/MV5BMjI4NDcyNjQxNl5BMl5BanBnXkFtZTgwMzI4OTM3NjM@._V1_UY256_CR13,0,172,256_AL_.jpg',username : 'Sofia Alcocer',userStatus : 'offline' },
    
        { userImage : 'https://images.unsplash.com/photo-1509380836717-c4320ccf1a6f?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=e01c8c45a063daaf6d6e571a32bd6c90',username : 'Wen Yahui',userStatus : 'online' },
        { userImage : 'https://pbs.twimg.com/profile_images/737221709267374081/sdwta9Oh.jpg',username : 'Leslee Moss',userStatus : 'offline' }
    ].sort((a,b)=> b.userStatus.localeCompare(a.userStatus))
     .map(contact => contact.userStatus === 'offline' ? Object.assign(contact, {lastOnline : '18 hours ago'}) : contact )
     .map(contact => <ContactsUser contact={ contact }/>)
  return (
        <div className= {styles['contacts-wrapper']}>
            <div className={styles['contacts-title']}>CONTACTS</div>
            { contacts ? contacts : <div>no data</div> }
        </div>
   
  )
}

export default Contacts
