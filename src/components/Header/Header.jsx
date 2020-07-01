import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.App_header}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png'
        alt='logo' />
      <div className={s.login}>
        {props.authUserData.isAuth ? <div><NavLink to='#'>{'Welcome, ' + props.authUserData.login}</NavLink> <button onClick = {props.logout}>Log out</button></div> :
          <NavLink to='login'>login</NavLink>}
      </div>
    </header>
  );
}

export default Header;