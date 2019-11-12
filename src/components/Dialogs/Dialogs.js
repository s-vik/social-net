import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogsItem name={dialog.name} id={dialog.id} ava={dialog.ava} />)
    let messagesElements = props.state.messages
        .map(message => <Message message={message.message} id={message.id} />)
        let newMessageElement = React.createRef();
    let newMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea ref={newMessageElement}></textarea>
                <button onClick={newMessage}>Click here</button>
            </div>
        </div>
    )
}

export default Dialogs;