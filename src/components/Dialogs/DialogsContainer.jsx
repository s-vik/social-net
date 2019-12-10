import React from 'react';
import { actionCreateAddMessage, actionCreateChangeValueDialogsMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../redux/StoreContext';

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer> 
        {
            (store) => {
                let state = store.getState().dialogsPage;
                let newMessage = () => {
                    store.dispatch(actionCreateAddMessage());
                }
                let handleTextAreaDialogs = (text) => {
                    store.dispatch(actionCreateChangeValueDialogsMessage(text));
                }
                return <Dialogs
                    newMessage={newMessage}
                    onChangeTextArea={handleTextAreaDialogs}
                    state={state} />
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;