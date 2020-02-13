import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
      <div className={s.item}>
      <img alt ='post' src='https://hornews.com/images/news_large/c1d4b2b8ec608ea72764c5678816d5c9.jpg'/>
      {props.message}
      <span>like {props.likeCount}</span>
     </div>
    );
}

export default Post;