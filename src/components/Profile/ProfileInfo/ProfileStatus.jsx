import React, { useState, useEffect } from 'react';


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=>{setStatus(props.status)},[props.status]);

    const activateEditMode = () => {
        if (props.authUserId === props.profile.userId) setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const updateStatus = (e) => {
        setStatus( e.target.value );
    }
        return (
            <>
                {!editMode &&
                    <li>
                        Status :  <span onDoubleClick={activateEditMode}>{props.status || '...'} </span>
                    </li>
                }
                {editMode &&
                    <li>
                        <input autoFocus onChange={updateStatus} onBlur={deactivateEditMode} value={status} />
                    </li>
                }
            </>
        )
    }

export default ProfileStatus;