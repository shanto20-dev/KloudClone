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
import {AuthRoute} from "../utils/route_util"


const App = () => {
    return (
    <>
     <header>
        <Link to="/">
            <h1 className="logo"></h1>
        </Link>
        <NavBarContainer />
    </header>
    <Switch>
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <Route exact path="/discover"/>
        {/* <AuthRoute exact path="/" /> */}
    </Switch>
    </>)
};

export default App;