const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_VALUE_DIALOGS_MESSAGE = 'CHANGE-VALUE-DIALOGS-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    id: 3,
                    message: state.inputValueDialogsPage
                },],
                inputValueDialogsPage: ''
            }
        case CHANGE_VALUE_DIALOGS_MESSAGE:
            return {
                ...state,
                inputValueDialogsPage: action.currentText
            }
        default:
            return state;
    }
}
export const actionCreateAddMessage = () => ({ type: ADD_MESSAGE });
export const actionCreateChangeValueDialogsMessage = (currentText) => ({ type: CHANGE_VALUE_DIALOGS_MESSAGE, currentText: currentText });
export default dialogsReducer;