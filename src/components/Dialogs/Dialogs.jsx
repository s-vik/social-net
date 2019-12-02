import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { actionCreateAddMessage,actionCreateChangeValueDialogsMessage } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id} ava={dialog.ava} />)
    let messagesElements = props.state.messages
        .map(message => <Message message={message.message} id={message.id} />)
    
    let newMessage = () => {
        props.dispatch(actionCreateAddMessage());
    }
    let handleTextAreaDialogs = (e) => {
        let text = e.target.value;
        props.dispatch(actionCreateChangeValueDialogsMessage(text));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea onChange={handleTextAreaDialogs} placeholder='Enter your message' value={props.state.inputValueDialogsPage}></textarea>
                <button onClick={newMessage}>Click here</button>
            </div>
        </div>
    )
}

export default Dialogs;