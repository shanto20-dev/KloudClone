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
        this.switchModal = this.switchModal.bind(this);
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
        if (!this.props.errors){
            let modal = document.getElementsByClassName("modal-box")[0];
            modal.classList.add("modal-exit");
        }
        this.props.createNewUser(this.state);
    }

    handleDemo(e) {
        let modal = document.getElementsByClassName("modal-box")[0];
        modal.classList.add("modal-exit");
        this.props.login({ username: "demouser", password: "demo1234"});
        setTimeout(() => this.props.closeModal(), 300)
    }

    handleModal(e) {
        if (e.target.className === 'modal-screen') {
            let modal = document.getElementsByClassName("modal-box")[0];
            modal.classList.add("modal-exit");
            setTimeout(() => this.props.closeModal(), 300)
        }
    }

    switchModal(){
        this.props.closeModal();
        this.props.loginModal();
    }
    
    render() {
        let errormessage
        if (this.props.errors) {
                errormessage = <ul> {
                Object.keys(this.props.errors).map((error, i) => (
                <li key={`error-${i}`}>{this.props.errors[error]}</li>
                ))}
             </ul>
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
                    {/* <button className="google-button">Continue with Google</button> */}
                    {/* <button className="apple-button">Continue with Apple</button> */}
                <form className="create-form">
                    <br/>
                    <input type="text" className="login-input" value={this.state.username} onChange={this.handleInput('username')} placeholder="Your username"/>
                    <br/>
                    <br/>
                    <input type="text" className="login-input" value={this.state.email} onChange={this.handleInput('email')} placeholder="Your email address" />
                    <br/>
                    <br/>
                    <input className="login-input" type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Choose a password" />
                    <p className="error">{errormessage}</p>
                    <br/>
                        <button className="signinbutton" onClick={this.handleSubmit}>Accept and Continue</button>
                </form>
                <p onClick={this.switchModal} className="switch-modal">Already have an account? Login</p>
               
            </div>
            
            </>
        )}else{
            return null;
        }
    }
};

export default Signup;