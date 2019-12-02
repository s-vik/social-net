const ADD_POST = 'ADD-POST';
const CHANGE_VALUE_POST = 'CHANGE-VALUE-POST';

let initialState = {
    posts: [
        { id: 1, likeCount: 25, message: 'Hi, how are you?' },
        { id: 2, likeCount: 30, message: 'I\'m fine, and you?' }
    ],
    inputValue: ''
}

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                likeCount: 0,
                message: state.inputValue
            }
            state.posts.push(newPost);
            state.inputValue = '';
            return state;
        case CHANGE_VALUE_POST:
            state.inputValue = action.currentText;
            return state;
        default:
            return state;
    }
}
export const actionCreateAddPost = () => ({type:ADD_POST});
export const actionCreateChangeValuePost = (currentText) => ({type:CHANGE_VALUE_POST,currentText:currentText});
export default postReducer;