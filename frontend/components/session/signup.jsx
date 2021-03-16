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
    render() {
        let errormessage
        if (this.props.errors) {
            errormessage = this.props.errors;
        }
        return (
            <>
            <div className='session-form'>
                <button onClick={this.handleDemo}>Continue with Demo User</button>
                <form>
                    <label> Username
                    <br/>
                    <input type="text" value={this.state.username} onChange={this.handleInput('username')} placeholder="Your email address or profile URL"/>
                    </label>
                    <br/>
                    <br/>
                    <label> Email
                    <br/>
                    <input type="text" value={this.state.email} onChange={this.handleInput('email')} placeholder="Your email address or profile URL" />
                    </label>
                    <br/>
                    <br/>
                    <label> Choose a password
                        <br/>
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>
                    <p>By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</p>
                    <button onClick={this.handleSubmit}>Accept and Continue</button>
                </form>
                <p>{errormessage}</p>
            </div>
            
            </>
        );
    }
};

export default Signup;