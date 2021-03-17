import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemo = this.handleDemo.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({
                [type]: e.target.value
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state);
    }

    handleDemo(e) {
        this.props.login({ username: "demouser", password: "demo1234"});
    }

    handleModal(e) {
        if (e.target.className === 'modal-screen') {
            this.props.closeModal()
        }
    }
    
    render() {
        let errormessage
        if (this.props.errors) {
            errormessage = this.props.errors;
        }
        if (this.props.modal) {
            window.onclick = this.handleModal
        }
        if (this.props.modal){
        return (
            <>
            <section className="modal-screen"></section>
                <div className='session-form modal-box'>
                    <button onClick={this.handleDemo} className="demo-button">Continue with Demo User</button>
                    <button className="google-button">Continue with Google</button>
                    <button className="apple-button">Continue with Apple</button>
                <form className="create-form">
                    <br/>
                    <input type="text" className="login-input" value={this.state.username} onChange={this.handleInput('username')} placeholder="Your profile URL"/>
                    <br/>
                    <br/>
                    <input type="text" className="login-input" value={this.state.email} onChange={this.handleInput('email')} placeholder="Your email address" />
                    <br/>
                    <br/>
                    <input className="login-input" type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Choose a password" />
                    <p className="error">{errormessage}</p>
                    <p className="legalese" >By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</p>
                    <br/>
                        <button className="signinbutton" onClick={this.handleSubmit}>Accept and Continue</button>
                </form>
               
            </div>
            
            </>
        )}else{
            return null;
        }
    }
};

export default Signup;