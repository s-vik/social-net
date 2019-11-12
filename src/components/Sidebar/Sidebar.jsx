import React from 'react';
import s from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    return (
        <li className={s.item}><NavLink to='/#' ><img src={props.ava} alt='ava'/> {props.name}</NavLink></li>
    )
}

const Sidebar = (props) => {
  let FriendsElements = props.friends.map(friend => <Friend name={friend.name} ava={friend.ava}/>)
  return (
    <div className={s.sidebar}>
    <h2>friends</h2>
      <ul className={s.friends}>
        {FriendsElements}
      </ul>
    </div>
  );
}

export default Sidebar;