import postReducer from './post-reducer';
import dialogsReducer from './dialogs-reducer';

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
            inputValueDialogsPage: ''
        },
        profilePage: {
            posts: [
                { id: 1, likeCount: 25, message: 'Hi, how are you?' },
                { id: 2, likeCount: 30, message: 'I\'m fine, and you?' }
            ],
            inputValue: ''
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
    
    dispatch(action) {
            this._state.profilePage = postReducer(this._state.profilePage,action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
            this._subscriber(this._state);
    }
}

export default store;