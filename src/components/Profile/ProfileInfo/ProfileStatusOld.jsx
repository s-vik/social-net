import React from 'react';


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        localStatus: this.props.status

    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ localStatus: this.props.status });
        }

    }
    toggleEditMode = () => {
        if (this.props.authUserId === this.props.profile.userId) {
            this.setState({
                editMode: !this.state.editMode
            });
            if (this.state.editMode) {
                this.props.updateStatus(this.state.localStatus);
            }
        }
    }
    updateStatusTextHandler = (e) => {
        this.setState({ localStatus: e.target.value })
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <li>
                        Status :  <span onDoubleClick={this.toggleEditMode}>{this.props.status || '...'} </span>
                    </li>
                }
                {this.state.editMode &&
                    <li>
                        <input autoFocus onChange={this.updateStatusTextHandler} onBlur={this.toggleEditMode} value={this.state.localStatus} />
                    </li>
                }
            </>
        )
    }
}

export default ProfileStatus;