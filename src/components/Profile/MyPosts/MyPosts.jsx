import React, { useEffect } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength, minLength } from '../../../helpers/validators/validators';
import { renderField } from '../../../hoc/formControls/FormControls';

const renderFieldTextarea = renderField('textarea');


const maxLength20 = maxLength(20);
const minLength5 = minLength(5);

let PostForm = (props) => {
  return (
    <form className={s.postForm} onSubmit={props.handleSubmit}>
      <div><Field validate={[required, maxLength20, minLength5]} component={renderFieldTextarea} placeholder='Enter your post' name='newPost'></Field></div>
      <div  className={s.postButtonContainer}><button className={s.postButton} >Add post</button></div>
    </form>
  )
}

PostForm = reduxForm({ form: 'post' })(PostForm);

const MyPosts = (props) => {
  let postsElements = props.posts
    .map(post => <Post key={post.id} likeCount={post.likeCount} message={post.message} />);
  let onSubmit = (formData) => {
    props.addPost(formData.newPost);
  }
  return (
    <div className={s.postBlock}>
      <h3>My post</h3>
      <PostForm onSubmit={onSubmit} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;