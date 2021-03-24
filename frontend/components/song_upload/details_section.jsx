import React from 'react';

class DetailsSection extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.currentStep === 2) {
        return (
            <div className="upload-box">
                <h1>Basic Info</h1>
                <div className="details-content">
                    <div className="details-pic">


                    </div>
                    <div className="details-form">
                        <p>Title</p>
                        <input type="text" value={this.props.title} onChange={this.props.handleInput('title')} className="detail-input"/>
                        <br />
                        <p>Image URL</p>
                        <input type="text" value={this.props.img_url} onChange={this.props.handleInput('img_url')} />
                        <p>Genre</p>
                        <select onChange={this.props.handleInput('genre')}>
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
                        <p>Description</p>
                        <textarea onChange={this.props.handleInput('description')}></textarea>
                        <br/>
                        <br/>
                        <button onClick={(e) => this.props.handleSubmit(e)}>Save</button>
                    </div>
                </div>
            </div>
        )} else{
            return null
        }
    }
}

export default DetailsSection;
