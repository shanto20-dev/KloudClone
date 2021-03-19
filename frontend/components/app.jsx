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
import SplashContainer from './splash/splash_container'
import Logoutscreen from './session/logoutscreen'
import Discover from './discover/discover';
import Player from './music_player/player'

const App = () => {
    return (
    <> 
    <Route path="/" component={NavBarContainer}/>
    <Switch>
        <AuthRoute exact path="/" component={SplashContainer}/>
        <Route exact path="/logout" component={Logoutscreen} />
        <Route exact path="/discover" component={Discover}/>
    </Switch>
    </>)
};

export default App;