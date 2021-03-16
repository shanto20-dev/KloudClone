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
        return (
            <div className='session-form'>
                <button onClick={this.handleDemo}>Continue with Demo User</button>
                <form>
                    <label> Username
                    <br />
                        <input type="text" value={this.state.username} onChange={this.handleInput('username')} placeholder="Your email address or profile URL" />
                    </label>
                    <br />
                    <br />
                    <label>
                        <br />
                        <input type="password" value={this.state.password} onChange={this.handleInput('password')} placeholder="Your Password"/>
                    </label>
                    <br/>
                    <br/>
                    <button onClick={this.handleSubmit}>Sign In</button>
                </form>
            </div>
        );
    }
};

export default Login;