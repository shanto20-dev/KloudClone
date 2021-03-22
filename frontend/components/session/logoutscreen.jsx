import React from 'react';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import { Link } from 'react-router-dom';

class Logoutscreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
        };
    }

    render() {
        let logout;
        this.props.location.pathname === '/logout' ? logout = " logoutSignin" : logout = ""
        return (
            <>
                <nav className="login-signup splash-header">
                    <Link to="/"><h1 className="splashlogo"></h1></Link>
                    <button className={`loginbutton` + logout} onClick={this.props.loginModal}> Sign In </button>
                    <button className="signupbutton" onClick={this.props.signupModal}> Create Account </button>
                </nav>
                <LoginContainer />
                <SignupContainer />
                <div className='splash'>
                    <div className='logouttop'>
                        <h1 className="maintitle black">Thanks for visiting KloudClone!</h1>
                        <h2 className="subtitle black">If you'd like to get in contact, please check out my LinkedIn and Github below.</h2>
                        <div className='splash-buttons'>
                            <a href="https://www.linkedin.com/in/sayeefalam/" target="-blank"><button className={`splashbutton1 black`}>LinkedIn</button></a>
                            <a href="https://www.github.com/shanto20-dev/" target="-blank"><button className='splashbutton2'>Github</button></a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default Logoutscreen;