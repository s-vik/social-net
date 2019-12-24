import { actionCreateAddMessage, actionCreateChangeValueDialogsMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        onChangeTextArea: (text) => { dispatch(actionCreateChangeValueDialogsMessage(text)); },
        newMessage: () => { dispatch(actionCreateAddMessage()); }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;