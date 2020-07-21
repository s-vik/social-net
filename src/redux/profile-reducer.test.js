import postReducer, { addPost, setUserProfileAccess } from "./profile-reducer";
import { profileAPI } from "../api/api";

let state = {
    posts: [
        { id: 1, likeCount: 25, message: 'Hi, how are you?' },
        { id: 2, likeCount: 30, message: 'I\'m fine, and you?' }
    ],
    profile: null,
    status: '',
    isFetching: false
}

it('post should be added', () => {
    let action = addPost('test was successful');
    let newState = postReducer(state, action);
    expect(newState.posts.length).toBe(3);
});
it('post should be correct', () => {
    let action = addPost('test was successful');
    let newState = postReducer(state, action);
    expect(newState.posts[2].message).toBe('test was successful');
});
it('profile should be added', () => {
    let action = setUserProfileAccess({ name: 'Some name' });
    let newState = postReducer(state, action);
    expect(newState.profile.name).toBe('Some name');
});
it('profile should be received', () => {
    //test API 
    profileAPI.getUserProfile(12).then((response) => {
        let id = response.data.userId;
        expect(id).toBe(12);
    })

});
