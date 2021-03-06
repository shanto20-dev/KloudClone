import React from 'react';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import SongIndexContainerSplash from '../songIndex/song_index_splash_container'

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <>

            <LoginContainer />
            <SignupContainer />
            <div className='splash'>
                <div className='splashtop'>
                <nav className="login-signup splash-header">
                    <h1 className="splashlogo"></h1>
                    <button className="loginbutton" onClick={this.props.loginModal}> Sign In </button>
                    <button className="signupbutton" onClick={this.props.signupModal}> Create Account </button>
                </nav>
                    <div className='splash-top-text'>
                        <h1 className="maintitle">Discover more with KloudClone Go+</h1>
                        <h2 className="subtitle">KloudClone Go+ lets you listen offline, ad-free, with over 150 million tracks — and growing.</h2>
                        <div className='splash-buttons'>
                            <a href="https://www.linkedin.com/in/sayeefalam/" target="-blank"><button className='splashbutton1'>LinkedIn</button></a>
                            <a href="https://www.github.com/shanto20-dev/" target="-blank"><button className='splashbutton2'>Github</button></a>
                        </div>
                    </div>

                </div>
                <div className='splash-bottom'>
                    <div className="searchorupload">
                            <input type="text" placeholder="Search for artists, bands, tracks, podcasts (Coming Soon)" className="searchbar-splash" /><button className="splashSearch"><i className="fas fa-search navsearch"></i></button> <p className='head2'>or</p> <a href="https://angel.co/u/sayeef-alam" target='blank'><button className='splashbutton2 searchbutton'>AngelList</button></a>
                    </div>
                    <h3 className="trendingtitle">Hear what’s trending for free in the SoundCloud community</h3>
                    <a href="http://www.sayeefalam.com/" target='blank'><button className='splashbutton2 explore'>Explore my portfolio</button></a>
                    <div className="splashIndex">
                        <SongIndexContainerSplash />
                        <div className='footerlinks'>
                            <a href="https://github.com/shanto20-dev/" target='blank'>GitHub</a>
                            <a href="https://www.linkedin.com/in/sayeefalam/" target='blank'>LinkedIn</a>
                            <a href="https://angel.co/u/sayeef-alam" target='blank'>AngelList</a>
                            <a href="http://www.sayeefalam.com/" target='blank'>Portfolio</a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            </>
        );
    }
};

export default Splash;