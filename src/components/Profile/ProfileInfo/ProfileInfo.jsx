import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={s.head_prof_img} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjcyq46P-2OYlgZakIJfr4NpEWYaGCm7TKPNpBWeybjeNyb7GyQ&s' />
      </div>
      <div className={s.descriptionBlock}>
        avatar + description
      </div>
    </div>
  );
}

export default ProfileInfo;