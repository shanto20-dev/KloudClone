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
                    <a href="https://www.linkedin.com/in/sayeefalam/" target="-blank"><button className='splashbutton1'>LinkedIn</button></a>
                    <a href="https://www.github.com/shanto20-dev/" target="-blank"><button className='splashbutton2'>Github</button></a>
                    </div>
                   <div className='splashimg'></div>
                </div>
                <div className="searchorupload">
                <input type="text" placeholder="Search for artists, bands, tracks, podcasts" className="searchbar-splash" /> <h2 className='head2'>or</h2> <button className='splashbutton2'>Upload your own</button>
                </div>
            </>
        );
    }
};

export default Splash;