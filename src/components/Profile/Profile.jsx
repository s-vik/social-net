import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo {...props} updateStatus={props.updateStatus} status={props.status} profile = {props.profile}/>
      { (props.authUserId === props.profile.userId) && <MyPostsContainer />}
    </div>
  );
}

export default Profile;