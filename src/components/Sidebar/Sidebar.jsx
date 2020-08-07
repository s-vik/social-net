import React from 'react';
import s from './FriendOffers/Sidebar.module.css';
import Nav from '../Nav/Nav';
import SidebarRandomUserContainer from './FriendOffers/SidebarRandomUserContainer';

const Sidebar = (props) => {
    return (
        <section className={s.sidebarContainer}>
            <Nav />
            <SidebarRandomUserContainer />
        </section>
    );
}

export default Sidebar;