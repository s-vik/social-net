import { addPost, changeValuePost, } from '../../../redux/post-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    currentInputValue: state.profilePage.inputValue
  }
}

const MyPostsContainer = connect(mapStateToProps,{addPost,changeValuePost})(MyPosts);

export default MyPostsContainer;