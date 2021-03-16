import React from 'react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component{
    constructor(props){
        super(props);
    }

  
    
     sessionLinks(){
        return(
        <nav className="login-signup">
                <Link to="/login"> <button className="loginbutton" to="/login" > Sign In </button></Link>
                <Link to="/signup"><button className="signupbutton"> Create Account </button></Link>
        </nav>
         )
    }
    personalGreeting(){
        return(
        <hgroup className="header-group">
            <h2 className="header-name">{`Hey, ${this.props.currentUser.username}!`}</h2>
            <button className="header-button" onClick={this.props.logout}>Log Out</button>
        </hgroup>
        )
    };

    render(){
        if (!this.props.currentUser) {
            return this.sessionLinks()
        }else{
            return this.personalGreeting()
        }

    }
};


export default Navbar;
