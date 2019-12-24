import { actionCreateAddPost, actionCreateChangeValuePost, } from '../../../redux/post-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    currentInputValue: state.profilePage.inputValue
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => { dispatch(actionCreateAddPost()) },
    updateNewPostText: (text) => { dispatch(actionCreateChangeValuePost(text)) }
  }
}


const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;