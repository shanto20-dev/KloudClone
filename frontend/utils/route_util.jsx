import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.currentUserId) };
};

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/discover" />
        }
    />
);


export const AuthRoute = withRouter(
    connect(
        mapStateToProps,
        null
    )(Auth)
);