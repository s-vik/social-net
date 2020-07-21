import React from 'react';
import style from './users.module.css';
import User from './User';
import Pagination from '../common/Pagination';

const Users = (props) => {
    return (
        <div className={style.container}>
            <Pagination totalCount={props.totalCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            {props.users.map((user) => {
                return (
                <User user={user} followingInProgress={props.followingInProgress} unFollow={props.unFollow} follow={props.follow}  />
                )
            })}</div>
    )
}

export default Users;
