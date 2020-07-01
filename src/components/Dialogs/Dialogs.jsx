import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';


let DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name='newMessage' component='textarea' placeholder='Enter your message' />

            <button>Click here</button>
        </form>
    )
}

DialogForm = reduxForm({ form: 'newMessage' })(DialogForm);


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogsItem name={dialog.name} key={dialog.id} id={dialog.id} ava={dialog.ava} />);
    let messagesElements = props.state.messages
        .map(message => <Message message={message.message} key={message.id} id={message.id} />);
    let newMessage = (newMessageBody) => {
        props.addMessage(newMessageBody.newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <DialogForm onSubmit={newMessage} />
            </div>
        </div>
    )
}

export default Dialogs;