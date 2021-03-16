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
import Splash from './splash/splash'


const App = () => {
    return (
    <>
     <header>
            <h1 className="logo"></h1>
        <NavBarContainer />
    </header>
    <AuthRoute path="/" component={Splash}/>
    <Switch>
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <Route exact path="/discover"/>
    </Switch>
    </>)
};

export default App;