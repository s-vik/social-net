import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={s.head_prof_img} 
        src='https://economictimes.indiatimes.com/img/68721421/Master.jpg'
        alt={'wal'}
         />
      </div>
      <div className={s.descriptionBlock}>
      <img src={props.profile.photos.large || 'https://download-cs.net/steam/avatars/3377.jpg'} alt={'ava'} />
      <ul className={s.descriptionList}>
        <li>Name : {props.profile.fullName}</li>
        <li>Looking for a job : {props.profile.lookingForAJob? 'yes': 'no'}</li>
        <li>About me : {props.profile.aboutMe}</li>
        <ProfileStatus {...props} updateStatus={props.updateStatus} status={props.status} />
      </ul>
      </div>
    </div>
  );
}

export default ProfileInfo;