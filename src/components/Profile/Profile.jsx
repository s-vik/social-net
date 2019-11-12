import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts changeValue={props.changeValue} currentInputValue={props.state.inputValue} addPost={props.addPost} posts={props.state.posts}/>
    </div>
  );
}

export default Profile;