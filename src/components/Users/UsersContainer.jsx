import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from './../../redux/users-reducer';
import Users from './Users';
import * as axios from 'axios';

class UsersContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&&count=${this.props.count}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&&count=${this.props.count}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            });
    }
    render() {
        return <Users totalCount={this.props.totalCount}
                      count={this.props.count}
                      onPageChanged={this.onPageChanged}
                      currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
        />
    }
}
const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        count: state.usersPage.count
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)=>{dispatch(followAC(userId))},
        unfollow: (userId)=>{dispatch(unfollowAC(userId))},
        setUsers: (users) =>{dispatch(setUsersAC(users))},
        setCurrentPage: (currentPage) =>{dispatch(setCurrentPageAC(currentPage))},
        setTotalUsersCount: (totalCount) =>{dispatch(setTotalUsersCountAC(totalCount))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);