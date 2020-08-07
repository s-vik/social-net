import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={s.App_header}>
      <img className={s.logo}
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png'
        alt='logo' />
      <div className={s.login}>
        {props.authUserData.isAuth ? <div><NavLink to={'/profile'}>{'Welcome, ' + props.authUserData.login}</NavLink> <button className={s.loginButton} onClick = {props.logout}>Logout</button></div> :
          <NavLink className={s.loginButton} to='/login'>login</NavLink>}
      </div>
    </header>
  );
}

export default Header;
