import React from 'react';

const FollowUnFollowButton = ({user, followingInProgress, unFollow, follow}) => {
    return (
        <div> {user.followed
            ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
               unFollow(user.id);
            }}>unFollow</button>
            : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                follow(user.id);
            }}>Follow</button>
        }</div>
    );
}