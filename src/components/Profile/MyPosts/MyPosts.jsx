import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts
    .map(post => <Post likeCount={post.likeCount} message={post.message} />)
    let messageElement = React.createRef();

    let addNewPost = () => {
      let text = messageElement.current.value;
      props.dispatch({type:'ADD-POST',PostText:text});
      // messageElement.current.value = null;
    }
    let handleChangeTextArea = () => {
      let text = messageElement.current.value;
      props.dispatch({type:'CHANGE-VALUE-POST',currentText:text});
    }
  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <div>
        <div><textarea onChange={handleChangeTextArea} value={props.currentInputValue} ref={messageElement}></textarea></div>
        <div><button onClick={addNewPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;