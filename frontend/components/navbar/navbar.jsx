import React from 'react';
import { Link } from 'react-router-dom';
import LoginContainer from '../session/login_container';
import SignupContainer from '../session/signup_container';
import {Redirect} from 'react-router-dom'



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
        this.handleModal = this.handleModal.bind(this);

    }

    toggleLogoutDropdown(){
        this.setState({ logoutDropdown: !this.state.logoutDropdown, profileDropdown: false})
    }

    toggleProfileDropdown() {
        this.setState({ profileDropdown: !this.state.profileDropdown, logoutDropdown: false })
    }
    handleLogout(){
        this.props.logout().then(() => <Redirect to='/logout' />);
        this.toggleLogoutDropdown();
        
    }

    handleModal(e){
        if (e.target !== document.getElementsByClassName('modal-box') && (this.props.loginModal || this.props.signupModal)) {
            this.props.closeModal()
        }
    }
    


    personal(){
        let profdropdownclass
        let dropdownclass
        this.state.profileDropdown ? profdropdownclass = "prof-dropdown-active" : profdropdownclass = "dropdown-inactive";
        this.state.logoutDropdown ? dropdownclass = "dropdown-active" : dropdownclass="dropdown-inactive";
        let searchbar
        if (this.props.location.pathname !== '/'){
            searchbar = <input type="text" placeholder="Search" className="searchbar"/>
        }

        return(
        <>
        <header>
        <div className = "nav-bar-container">
            <div className='nav-stuff'>
                <Link to='/' className='logo-link'><h1 className="logo"></h1></Link>
                {searchbar}
                <Link to="/upload"><button className="user-button"> Upload </button></Link>
                    <div className="divdropdown">
                        <button className="user-button" onClick={this.toggleProfileDropdown}>{this.props.currentUser.username}</button>
                            <div className={profdropdownclass}>
                                <button className="dropdown-button" >Profile</button>
                                <button className="dropdown-button" >Likes</button>
                                <button className="dropdown-button" >Playlists</button>
                                <button className="dropdown-button" >Stations</button>
                                <button className="dropdown-button" >Following</button>
                                <button className="dropdown-button" >Try Pro</button>
                            </div>
                    </div>
                <div className="divdropdown">
                    <button className="options-button" onClick={this.toggleLogoutDropdown}></button>
                        <div className={dropdownclass}>
                            <Link to="/logout"><button className="dropdown-button" onClick={this.handleLogout} >Sign Out</button></Link>
                        </div>
                </div>
            </div>
        </div>
        </header>
        </>
        )
    };

    render(){
        if (this.props.location.pathname === '/' || this.props.location.pathname === '/logout'){
            return null;
        }else{
            return this.personal()
        }
    }
};


export default Navbar;
