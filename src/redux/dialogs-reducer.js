const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_VALUE_DIALOGS_MESSAGE = 'CHANGE-VALUE-DIALOGS-MESSAGE';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 3,
                message: state.inputValueDialogsPage
            }
            state.messages.push(newMessage);
            state.inputValueDialogsPage = '';
            return state;
        case CHANGE_VALUE_DIALOGS_MESSAGE:
            state.inputValueDialogsPage = action.currentText;
            return state;
        default:
            return state;
    }
}
export const actionCreateAddMessage = () => ({type:ADD_MESSAGE});
export const actionCreateChangeValueDialogsMessage = (currentText) => ({type:CHANGE_VALUE_DIALOGS_MESSAGE,currentText:currentText});
export default dialogsReducer;