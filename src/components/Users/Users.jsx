import React from 'react';
import style from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesNumber = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i);
    }
    return (
        <div className={style.container}>
            <div>
                {pages.map(p => {
                    if (p > 15) {
                        return false
                    }
                    return <span
                        onClick={() => { props.onPageChanged(p) }}
                        className={props.currentPage === p && style.selectedPage}>{p}</span>
                })}
            </div>
            {props.users.map((user) => {
                return (
                    <div className={style.user} key={user.id}>
                        <div className={style.innerBlock_10}>
                            <NavLink to={'profile/' + user.id}>
                                <img className={style.ava} src={user.photos.small != null ? user.photos.small : userPhoto} alt='ava' />
                            </NavLink>
                            <div> {user.followed
                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                   props.unFollow(user.id);
                                }}>unFollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.follow(user.id);
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
            })}</div>
    )
}

export default Users;
