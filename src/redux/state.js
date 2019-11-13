import { renderEntireTree } from '../index';

//data

const state = {
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
        inputValueDialogsPage:'some text'
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
}
//end data

//for profilePage
export const addPost = (postText) => {
    let newPost = {
        id: 5,
        likeCount: 0,
        message: postText
    }
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}
export const changeValuePost = (currentText) => {
    state.profilePage.inputValue = currentText;
    renderEntireTree(state);
}
//for dialogsPage 
export const addMessage = (textMessage) => {
    let newMessage = {
        id: 3,
        message: textMessage
    }
    state.dialogsPage.messages.push(newMessage);
    renderEntireTree(state);
}
export const changeValueDialogsMessage = (currentText) => {
    state.dialogsPage.inputValueDialogsPage = currentText;
    renderEntireTree(state);
}
export default state;