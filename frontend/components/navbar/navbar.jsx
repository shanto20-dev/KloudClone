import React from 'react';
import { Link } from 'react-router-dom';



class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            logoutDropdown: false,
            profileDropdown: false
        }
        this.toggleLogoutDropdown = this.toggleLogoutDropdown.bind(this);
        this.toggleProfileDropdown = this.toggleProfileDropdown.bind(this);
        this.handleLogout = this.handleLogout.bind(this);

    }

    toggleLogoutDropdown(){
        this.setState({ logoutDropdown: !this.state.logoutDropdown, profileDropdown: false})
    }

    toggleProfileDropdown() {
        this.setState({ profileDropdown: !this.state.profileDropdown, logoutDropdown: false })
    }
    handleLogout(){
        this.props.logout()
        this.toggleLogoutDropdown()
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
        let profdropdownclass
        let dropdownclass
        this.state.profileDropdown ? profdropdownclass = "prof-dropdown-active" : profdropdownclass = "dropdown-inactive";
        this.state.logoutDropdown ? dropdownclass = "dropdown-active" : dropdownclass="dropdown-inactive";
        window.onclick = this.windowClick;

        return(
        <hgroup className="navbar-right-group">
            <div className="divdropdown">
                <button className="user-button" onClick={this.toggleProfileDropdown}>{this.props.currentUser.username}</button>
                    <div className={profdropdownclass}>
                        <button className="dropdown-button" >Profile</button>
                        <button className="dropdown-button" >Likes</button>
                        <button className="dropdown-button" >Playlists</button>
                    </div>
            </div>
            <button className="bell"></button>
            <div className="divdropdown">
                <button className="options-button" onClick={this.toggleLogoutDropdown}></button>
                    <div className={dropdownclass}>
                        <button className="dropdown-button" onClick={this.handleLogout} >Sign Out</button>
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
