const ADD_POST = 'ADD-POST';
const CHANGE_VALUE_POST = 'CHANGE-VALUE-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_VALUE_DIALOGS_MESSAGE = 'CHANGE-VALUE-DIALOGS-MESSAGE';

//action creator

export const actionCreateAddPost = (PostText) => ({type:ADD_POST,PostText:PostText});
export const actionCreateChangeValuePost = (currentText) => ({type:CHANGE_VALUE_POST,currentText:currentText});
export const actionCreateAddMessage = (textMessage) => ({type:ADD_MESSAGE,textMessage:textMessage});
export const actionCreateChangeValueDialogsMessage = (currentText) => ({type:CHANGE_VALUE_DIALOGS_MESSAGE,currentText:currentText});

//data
const store = {
    _subscriber() {
        console.log('observer is undefined');
    },
    _state: {
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Viktor', ava: 'https://download-cs.net/steam/avatars/3377.jpg' },
                { id: 2, name: 'Inna', ava: 'https://download-cs.net/steam/avatars/3377.jpg' },
                { id: 3, name: 'Dimych', ava: 'https://download-cs.net/steam/avatars/3377.jpg' },
                { id: 4, name: 'Ihor', ava: 'https://download-cs.net/steam/avatars/3377.jpg' },
                { id: 5, name: 'Toxa', ava: 'https://download-cs.net/steam/avatars/3377.jpg' },
                { id: 6, name: 'Ruslan', ava: 'https://download-cs.net/steam/avatars/3377.jpg' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your React?' },
                { id: 3, message: 'Thanks, very well' }
            ],
            inputValueDialogsPage: 'some text'
        },
        profilePage: {
            posts: [
                { id: 1, likeCount: 25, message: 'Hi, how are you?' },
                { id: 2, likeCount: 30, message: 'I\'m fine, and you?' }
            ],
            inputValue: 'I\'m the best'
        },
        sidebar: {
            friends: [{ name: 'Inna', ava: 'https://download-cs.net/steam/avatars/3377.jpg' },
            { name: 'Toxa', ava: 'https://download-cs.net/steam/avatars/3377.jpg' },
            { name: 'Dima', ava: 'https://download-cs.net/steam/avatars/3377.jpg' }]
        }
    },
    _addPost(postText) {
        let newPost = {
            id: 5,
            likeCount: 0,
            message: postText
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.inputValue = '';
        this._subscriber(this._state);
    },
    _changeValuePost(currentText) {
        this._state.profilePage.inputValue = currentText;
        this._subscriber(this._state);
    },
    _addMessage(textMessage) {
        let newMessage = {
            id: 3,
            message: textMessage
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.inputValueDialogsPage = '';
        this._subscriber(this._state);
    },
    _changeValueDialogsMessage(currentText) {
        this._state.dialogsPage.inputValueDialogsPage = currentText;
        this._subscriber(this._state);
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    
    dispatch(action) {
        if(action.type === ADD_POST) {
            this._addPost(action.PostText);
        } else if(action.type === CHANGE_VALUE_POST) {
            this._changeValuePost(action.currentText);
        } else if(action.type === ADD_MESSAGE) {
            this._addMessage(action.textMessage);
        } else if(action.type === CHANGE_VALUE_DIALOGS_MESSAGE) {
            this._changeValueDialogsMessage(action.currentText);
        }
    }
}

export default store;