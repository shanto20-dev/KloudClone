import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
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
        this.props.login(this.state);
        // setTimeout(() => this.props.closeModal(), 300)
    }

    handleDemo(e){
        let modal = document.getElementsByClassName("modal-box")[0];
        modal.classList.add("modal-exit");
        this.props.login({username: "demouser", password: "demo1234"});
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
        this.props.signupModal();
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
        if (this.props.modal){
            window.onclick = this.handleModal;
        }
        if (this.props.modal) {
        return (
            <>
            <section className="modal-screen"></section>

            <div className='session-form modal-box'>
                <button onClick={this.handleDemo} className="demo-button">Continue with Demo User</button>
                {/* <button className="google-button">Continue with Google</button> */}
                {/* <button className="apple-button">Continue with Apple</button> */}
                <form>
                    <br />
                    <input className="login-input" type="text" value={this.state.username} onChange={this.handleInput('username')} placeholder="Your email address or username" />
                    <br />
                    <br />
                    <input type="password" className="login-input" value={this.state.password} onChange={this.handleInput('password')} placeholder="Your Password"/>
                    <br/>
                    <br/>
                        <p className="error">{errormessage}</p>
                    <button className="signinbutton" onClick={this.handleSubmit}>Sign In</button>
                </form>
                <p onClick={this.switchModal} className="switch-modal">Need to register? Sign Up</p>
                
            </div>
            </>
        )} else{
            return null;
        };
       
    }
};

export default Login;