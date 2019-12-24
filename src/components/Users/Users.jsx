import React from 'react';
import style from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
    if (props.state.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => { props.setUsers(response.data.items) })

    }
    let usersElement = props.state.users.map((user) => {
        return (
            <div className={style.user} key={user.id}>
                <div className={style.innerBlock_10}>
                    <img className={style.ava} src={user.photos.small != null ? user.photos.small : userPhoto} alt='ava' />
                    <div> {user.followed
                        ? <button onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(user.id) }}>Follow</button>
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
    })
    return (
        <div className={style.container}>{usersElement}</div>
    )

}

export default Users;
