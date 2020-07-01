import React from 'react';
import s from './SidebarRandomUser.module.css';
import { NavLink } from 'react-router-dom';


const RandomUsers = (props) => {
  let RandomUsersElements = props.randomUsers.map(randomUser => {
    let setProfileRandomUser = (userId) => {
      props.setUserProfile(userId);
      props.setStatus(userId);
    }
    return (
      <li key={randomUser.userId} className={s.item} >
        <NavLink to={`/profile/${randomUser.userId}`}  onClick={setProfileRandomUser.bind(null,randomUser.userId)}>
          <img src={randomUser.photos.small || 'https://download-cs.net/steam/avatars/3377.jpg'} alt='ava' />
          <p>{randomUser.fullName}</p>
        </NavLink>
      </li>
    )
  })
  return (
    <div className={s.sidebar}>
      <h2>friend offers</h2>
      <ul className={s.friends}>
        {RandomUsersElements}
      </ul>
    </div>
  );

}

export default RandomUsers;