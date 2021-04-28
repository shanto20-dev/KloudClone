import React from 'react';
import { Link } from 'react-router-dom';

class SongEdit extends React.Component {
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
                <div className="upload-box details-box edit-page-modal modal-box">
                    <h1 className="details-title">Basic info</h1>
                    <div className="details-content">
                        <div className="details-pic">
                            <img className='image-edit' src={`${this.props.img_url}`}/>
                        </div>
                        <div className="details-form">
                            <p className="label">Title*</p>
                            <input type="text" value={this.props.title} onChange={this.props.handleInput('title')} className="detail-input"/>
                            <br />
                            <p className="label" value={this.props.image_url}>Image URL</p>
                            <input type="text" value={this.props.img_url} onChange={this.props.handleInput('img_url')} className="detail-input" />
                            <p className="label">Genre</p>
                            <select onChange={this.props.handleInput('genre')} value={this.props.genre} className="detail-input">
                                <option value="Ambient">Ambient</option>
                                <option value="FutureFunk">Disco</option>
                                <option value="EDM">EDM</option>
                                <option value="FutureFunk">Future Funk</option>
                                <option value="FutureBass">Future Bass</option>
                                <option value="Jazz">Jazz</option>
                                <option value="NuDisco">Nu Disco</option>
                                <option value="Soul">Soul</option>
                                <option value="R&B">R&B</option>
                            </select>
                            <br/>
                            <p className="label">Description</p>
                            <textarea onChange={this.props.handleInput('description')} value={this.props.description} className="description-box"></textarea>
                            <br/>
                            <br/>
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

export default SongEdit;
