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
import {AuthRoute} from "../utils/route_util"
import SplashContainer from './splash/splash_container'
import Discover from './discover/discover';
import LogoutContainer from './session/logoutscreen_container';
import SongUploadContainer from './song_upload/song_upload_container';
import PlayerContainer from './music_player/player_container';
import SongShowContainer from './song_show/song_show_container';

const App = () => {
    return (
    <> 
    <Route path="/" component={NavBarContainer}/>
    <Route path="/" component={PlayerContainer} />
    <Switch>
        <AuthRoute exact path="/" component={SplashContainer}/>
        <Route exact path="/logout" component={LogoutContainer} />
        <Route exact path="/discover" component={Discover}/>
        <Route exact path="/upload" component={SongUploadContainer}/>
        <Route exact path="/songs/:id" component={SongShowContainer} />
    </Switch>
    </>)
};

export default App;