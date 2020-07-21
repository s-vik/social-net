import React from 'react';
import style from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const User = ({user,followingInProgress,unFollow,follow}) => {
                return (
                    <div className={style.user} key={user.id}>
                        <div className={style.innerBlock_10}>
                            <NavLink to={'profile/' + user.id}>
                                <img className={style.ava} src={user.photos.small != null ? user.photos.small : userPhoto} alt='ava' />
                            </NavLink>
                            <div> {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                   unFollow(user.id);
                                }}>unFollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                                    follow(user.id);
                                }}>Follow</button>
                            }</div>
                        </div>
                        <div className={style.innerBlock_20}><div>{user.name}</div>
                            <div>{user.status}</div></div>
                        <div className={style.innerBlock_70}>
                            <div>user.from.country<div>user.from.city</div>
                            </div>
                        </div>
                    </div>
                )
}

export default User;
