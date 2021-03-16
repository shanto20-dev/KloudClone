import React from 'react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dropdown: false
        }
        this.toggleDropdown = this.toggleDropdown.bind(this);

    }

    toggleDropdown(){
        this.setState({dropdown: !this.state.dropdown})
    }

  
    
     sessionLinks(){
        return(
        <nav className="login-signup">
                <Link to="/login"> <button className="loginbutton" to="/login" > Sign In </button></Link>
                <Link to="/signup"><button className="signupbutton"> Create Account </button></Link>
        </nav>
         )
    }


    personal(){
        let dropdownclass
        this.state.dropdown ? dropdownclass = "dropdown-active" : dropdownclass="dropdown-inactive";
        window.onclick = this.windowClick;

        return(
        <hgroup className="navbar-right-group">
            <button className="user-button">{this.props.currentUser.username}</button>
            <div className="dropdown">
            <button className="dropdown-button" onClick={this.toggleDropdown}></button>
                <div className={dropdownclass}>
                    <button className="logout-button" onClick={this.props.logout}>Sign Out</button>
                </div>
            </div>
        </hgroup>
        )
    };

    render(){
        if (!this.props.currentUser) {
            return this.sessionLinks()
        }else{
            return this.personal()
        }

    }
};


export default Navbar;
