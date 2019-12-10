import React from 'react';
import { actionCreateAddPost, actionCreateChangeValuePost, } from '../../../redux/post-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../redux/StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer> 
    {
      (store) => {
        let state = store.getState();
        let addNewPost = () => {
          store.dispatch(actionCreateAddPost());
        }
        let handleChangeTextArea = (text) => {
          store.dispatch(actionCreateChangeValuePost(text));
        }
        return <MyPosts
          posts={state.profilePage.posts}
          currentInputValue={state.profilePage.inputValue}
          addNewPost={addNewPost}
          updateNewPostText={handleChangeTextArea} />
      }
    }
    </StoreContext.Consumer>
  );
}

export default MyPostsContainer;