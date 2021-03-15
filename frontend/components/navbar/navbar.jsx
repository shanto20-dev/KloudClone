import React from 'react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component{
    constructor(props){
        super(props)
    }
    
     sessionLinks(){
        return(
        <nav className="login-signup">
            <button><Link to="/login"> Sign In </Link></button>
            <button><Link to="/signup"> Create Account </Link></button>
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
