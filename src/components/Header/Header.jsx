import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.App_header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png' alt='logo' />
      </header>
    );
}

export default Header;