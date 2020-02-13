import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts
    .map(post => <Post key={post.id} likeCount={post.likeCount} message={post.message} />);

    let addNewPost = () => {
      props.addPost();
    }
    let handleChangeTextArea = (e) => {
      let text = e.target.value;
      props.changeValuePost(text);
    }
  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div><textarea onChange={handleChangeTextArea} value={props.currentInputValue} placeholder='Enter your message' ></textarea></div>
        <div><button onClick={addNewPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;