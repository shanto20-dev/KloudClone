import React from 'react';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
                <div className='splashtop'>
                    <h1 className="maintitle">Discover more with KloudClone Go+</h1>
                    <h2 className="subtitle">KloudClone Go+ lets you listen offline, ad-free, with over 150 million tracks — and growing.</h2>
                    <div className='splash-buttons'>
                    <button className='splashbutton1'>Learn More</button>
                    <button className='splashbutton2'>Purchase Now</button>
                    </div>
                   <div className='splashimg'></div>
                </div>
            </>
        );
    }
};

export default Splash;