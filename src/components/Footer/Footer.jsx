import React from 'react';
import s from './Footer.module.css';

const Footer = (props) => {
    return(
        <footer className={s.footer}>
            <ul>
                <li>SomeLinks</li>
                <li>SomeLinks</li>
            </ul>
            <ul>
                <li>SomeLinks</li>
                <li>SomeLinks</li>
            </ul>
        </footer>
    );
}
export default Footer;