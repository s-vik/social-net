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
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._subscriber = observer;
    },
    addPost(postText) {
        let newPost = {
            id: 5,
            likeCount: 0,
            message: postText
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.inputValue = '';
        this._subscriber(this._state);
    },
    changeValuePost(currentText) {
        this._state.profilePage.inputValue = currentText;
        this._subscriber(this._state);
    },
    addMessage(textMessage) {
        let newMessage = {
            id: 3,
            message: textMessage
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.inputValueDialogsPage = '';
        this._subscriber(this._state);
    },
    changeValueDialogsMessage(currentText) {
        this._state.dialogsPage.inputValueDialogsPage = currentText;
        this._subscriber(this._state);
    },
    dispatch(action) {
        if(action.type === 'ADD-POST') {
            this.addPost(action.PostText);
        } else if(action.type === 'CHANGE-VALUE-POST') {
            this.changeValuePost(action.currentText);
        } else if(action.type === 'ADD-MESSAGE') {
            this.addMessage(action.textMessage);
        } else if(action.type === 'CHANGE-VALUE-DIALOGS-MESSAGE') {
            this.changeValueDialogsMessage(action.currentText);
        }
    }
}

export default store;