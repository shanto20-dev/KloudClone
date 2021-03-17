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
        this.props.login(this.state);
    }

    handleDemo(e){
        this.props.login({username: "demouser", password: "demo1234"});
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
                    <input className="login-input" type="text" value={this.state.username} onChange={this.handleInput('username')} placeholder="Your email address or profile URL" />
                    <br />
                    <br />
                    <input type="password" className="login-input" value={this.state.password} onChange={this.handleInput('password')} placeholder="Your Password"/>
                    <br/>
                    <br/>
                        <p className="error">{errormessage}</p>
                    <button className="signinbutton" onClick={this.handleSubmit}>Sign In</button>
                </form>
                
                    <p className="legalese">We may use your email and devices for updates and tips on KloudClone's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
                        We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.</p>
            </div>
            </>
        )} else{
            return null;
        };
       
    }
};

export default Login;