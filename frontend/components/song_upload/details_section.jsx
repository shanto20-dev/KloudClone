import React from 'react';
import { Link } from 'react-router-dom';

class DetailsSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let errormessage
        if (this.props.errors) {
            errormessage = this.props.errors;
        }
        if (this.props.currentStep === 2) {
        return (
            <div className="upload-box details-box">
                <h1 className="details-title">Basic info</h1>
                <div className="details-content">
                    <div className="details-pic">
                        <img className='image-edit' src={`${this.props.photo}`}/>
                    </div>
                    <div className="details-form">
                        <p className="label">Title*</p>
                        <input type="text" value={this.props.title} onChange={this.props.handleInput('title')} className="detail-input"/>
                        <br />
                        <p className="label">Image URL</p>
                        <input type="text" value={this.props.img_url} onChange={this.props.handleInput('img_url')} className="detail-input" />
                        <p className="label">Genre</p>
                        <select onChange={this.props.handleInput('genre')} className="detail-input">
                            <option value="Ambient">Ambient</option>
                            <option value="Disco">Disco</option>
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
                        <textarea onChange={this.props.handleInput('description')} className="description-box"></textarea>
                        <br/>
                        <br/>
                    </div>
                </div>
                    <p className="error">{errormessage}</p>
                    <button onClick={(e) => this.props.handleSubmit(e)} className="save-button">Save</button>
            </div>
        )} else{
            return null
        }
    }
}

export default DetailsSection;
