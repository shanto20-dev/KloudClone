import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import NavBarContainer from "./navbar/navbar_container"
import SignupContainer from "./session/signup_container"
import LoginContainer from "./session/login_container"


const App = () => {
    return (
    <>
     <header>
        <Link to="/">
            <h1>KloudClone</h1>
        </Link>
        <NavBarContainer />
    </header>
    <Switch>
        <Route exact path="/signup" component={SignupContainer} />
        <Route exact path="/login" component={LoginContainer} />
    </Switch>
    </>)
};

export default App;