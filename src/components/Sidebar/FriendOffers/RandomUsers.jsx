import React from 'react';
import s from './SidebarRandomUser.module.css';
import { NavLink } from 'react-router-dom';


const RandomUsers = (props) => {
  return (
    <div className={s.sidebar}>
      <h2>Make friends</h2>
      <ul className={s.friends}>
        {props.randomUsers.map(randomUser => {
          return (
            <li key={randomUser.userId} className={s.item} >
              <NavLink to={`/profile/${randomUser.userId}`} >
                <img src={randomUser.photos.small || 'https://download-cs.net/steam/avatars/3377.jpg'} alt='ava' />
                <p>{randomUser.fullName}</p>
              </NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  );


}

export default RandomUsers;