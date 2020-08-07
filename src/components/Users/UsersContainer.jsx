import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setCurrentPage, getUsers } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import { extractUsers } from '../../redux/userSelectors';


const UsersContainer = (props) => {
    useEffect(() => {
            props.getUsers(props.currentPage, props.pageSize);
    }, [props.currentPage, props.pageSize]);
    const onPageChanged = (currentPage) => {
        props.setCurrentPage(currentPage);
        props.getUsers(currentPage, props.pageSize);
    }
    return (
        <>
            {props.isFetching ? <Preloader /> : null}
            <Users totalCount={props.totalCount}
                pageSize={props.pageSize}
                onPageChanged={onPageChanged}
                currentPage={props.currentPage}
                users={props.users}
                unFollow={props.unFollow}
                follow={props.follow}
                followingInProgress={props.followingInProgress}
            />
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        users: extractUsers(state),
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
export default compose(
    connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        getUsers
    })
)(UsersContainer);
