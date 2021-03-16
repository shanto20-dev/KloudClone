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
    render() {
        let errormessage
        if (this.props.errors) {
            errormessage = this.props.errors;
        }
        return (
            <>
            <section className="modal-screen"></section>

            <div className='session-form modal-box'>
                <button onClick={this.handleDemo} className="demobutton">Continue with Demo User</button>
                <form>
                    <br />
                        <input className="login-input" type="text" value={this.state.username} onChange={this.handleInput('username')} placeholder="Your email address or profile URL" />
                    <br />
                    <br />
                    <label>
                        <br />
                        <input type="password" className="login-input" value={this.state.password} onChange={this.handleInput('password')} placeholder="Your Password"/>
                    </label>
                    <br/>
                    <br/>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
                <p>{errormessage}</p>
                    <p className="legalese">We may use your email and devices for updates and tips on KloudClone's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.
                        We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.</p>
            </div>
            </>
        );
    }
};

export default Login;