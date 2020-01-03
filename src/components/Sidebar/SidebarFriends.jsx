import React from 'react';
import s from './SidebarFriends.module.css';
import { NavLink } from 'react-router-dom';

// const Friend = (props) => {
//     return (
//         <li className={s.item}><NavLink to='/#' ><img src={props.ava} alt='ava'/> {props.name}</NavLink></li>
//     )
// }

const SidebarFriends = (props) => {
  let FriendsElements = props.friends.map(friend => <li className={s.item}>
    <NavLink to='/#' ><img src={friend.ava} alt='ava' /> {friend.name}</NavLink></li>)
  return (
    <div className={s.sidebar}>
      <h2>friends</h2>
      <ul className={s.friends}>
        {FriendsElements}
      </ul>
    </div>
  );
}

export default SidebarFriends;