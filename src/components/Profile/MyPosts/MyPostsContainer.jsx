import { addPost } from '../../../redux/post-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    currentInputValue: state.profilePage.inputValue
  }
}

const MyPostsContainer = connect(mapStateToProps,{addPost})(MyPosts);

export default MyPostsContainer;