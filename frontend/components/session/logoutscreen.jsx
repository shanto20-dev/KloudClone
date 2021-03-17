import React from 'react';

class Logoutscreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className='logoutscreen'>
                    <h1 className="maintitle">You've signed out. Thanks for checking out KloudClone!</h1>
                    <h2 className="subtitle">If you'd like to get in contact, please check out my LinkedIn or Github profiles below.</h2>
                    <div className='splash-buttons'>
                        <a href="https://www.linkedin.com/in/sayeefalam/" target="-blank"><button className='splashbutton1'>LinkedIn</button></a>
                        <a href="github.com/shanto20-dev/" target="-blank"><button className='splashbutton2'>Github</button></a>
                    </div>
                    <div className='splashimg2'></div>
                </div>
            </>
        );
    }
};

export default Logoutscreen;