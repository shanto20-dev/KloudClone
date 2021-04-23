import React from 'react';
import { Link } from 'react-router-dom';

class ProfPicModal extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        let errormessage
        if (this.props.errors) {
            errormessage = this.props.errors;
        }
        if (this.props.editModal) {
        return (
            <>
            <section className="modal-screen" onClick={this.props.handleModal}></section>
                <div className="upload-box details-box user-page-modal modal-box">
                    <h1 className="user-title-modal">Profile Picture</h1>
                    <div className="details-content">
                        <div className="details-form">
                            <p className="label">Image URL</p>
                            <input type="text" value={this.props.img_url} onChange={this.props.handleInput('img_url')} className="detail-input" />
                        </div>
                    </div>
                        <p className="error">{errormessage}</p>
                        <button onClick={(e) => this.props.handleSubmit(e)} className="save-button">Save</button>
                </div>
            </>
        )} else{
            return null
        }
    }
}

export default ProfPicModal;
