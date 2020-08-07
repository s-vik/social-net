import React, { useState, useEffect } from 'react';
import { renderField } from '../../../hoc/formControls/FormControls';
import { Field, reduxForm } from 'redux-form';
import { maxLength } from '../../../helpers/validators/validators';

const inputField = renderField('input');
const maxLength30 = maxLength(30);

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(() => {
        props.initialize({ userStatus: props.status })
    }, [props.status]);
    const activateEditMode = () => {
        if (props.authUserId === props.profile.userId) setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        if(props.valid){ props.updateStatus(status);}
    }
    const updateStatus = (event) => {
        setStatus(event.target.value);
    }
    return (
        <>
            {!editMode &&
                <li>
                    Status :  <span onDoubleClick={activateEditMode}>{props.status || '...'}</span>
                </li>
            }
            {editMode &&
                <li>
                    <form onSubmit={props.handleSubmit}>
                        <div>
                            <Field 
                                validate={[maxLength30]}
                                onBlur={deactivateEditMode}
                                onChange={updateStatus}
                                type='text'
                                component={inputField}
                                name="userStatus"
                            />
                        </div>
                    </form>
                </li>
            }
        </>
    )
}

export default reduxForm({
    form: 'userStatus'
})(ProfileStatus);