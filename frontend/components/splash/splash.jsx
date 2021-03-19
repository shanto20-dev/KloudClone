import React from 'react';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>
             <nav className="login-signup splash-header">
                <h1 className="splashlogo"></h1>
                <button className="loginbutton" onClick={this.props.loginModal}> Sign In </button>
                <button className="signupbutton" onClick={this.props.signupModal}> Create Account </button>
            </nav>
            <LoginContainer />
            <SignupContainer />
            <div className='splash'>
                <div className='splashtop'>
                    <h1 className="maintitle">Discover more with KloudClone Go+</h1>
                    <h2 className="subtitle">KloudClone Go+ lets you listen offline, ad-free, with over 150 million tracks — and growing.</h2>
                    <div className='splash-buttons'>
                    <a href="https://www.linkedin.com/in/sayeefalam/" target="-blank"><button className='splashbutton1'>LinkedIn</button></a>
                    <a href="https://www.github.com/shanto20-dev/" target="-blank"><button className='splashbutton2'>Github</button></a>
                    </div>
                </div>
                <div className="searchorupload">
                    <input type="text" placeholder="Search for artists, bands, tracks, podcasts" className="searchbar-splash" /> <p className='head2'>or</p> <button className='splashbutton2 searchbutton'>Upload your own</button>
                </div>
                    <h3 className="trendingtitle">Hear what’s trending for free in the SoundCloud community</h3>
                    <button className='splashbutton2 explore'>Explore trending playlists</button>
            </div>
            </>
        );
    }
};

export default Splash;