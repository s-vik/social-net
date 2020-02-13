import { addMessage, changeValueDialogsMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
}

const DialogsContainer = connect(mapStateToProps, {changeValueDialogsMessage,addMessage})(Dialogs);
export default DialogsContainer;