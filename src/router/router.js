import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import authService from "../services/tokenService";
import IndexContainer from "../pages";
import LoginContainer from "../pages/login";
import DashboardContainer from "../pages/secure/dashboard";
import AboutContainer from "../pages/about";
import TermsContainer from "../pages/terms";


function PrivateRoute({component: Component, ...rest}) {

    if (authService.hasAuthTokens()) {
        return <Route {...rest} render={(props) => <Component {...props}/>}/>
    } else {
        // return <Redirect push to={"/login/"}/>
        return <Route {...rest}
                      render={(props) => <Redirect to={{pathname: '/login/', state: {from: props.location}}}/>}/>
    }

    // return (
    //     <Route {...rest} render={(props) => {
    //         return (
    //             {isAuthenticated}
    //                 ? <Component {...props}/>
    //                 // : <Redirect to={{pathname: '/login/', state: {from: props.location}}}/>
    //                 : <Redirect push to={"/login/"}/>
    //
    //     }}/>
    // );
}

export default function Router() {
    return (
        <Switch>
            <PrivateRoute exact path={"/dashboard/"} component={DashboardContainer}/>
            <Route exact path={"/about/"} component={AboutContainer}/>
            <Route exact path={"/login/"} component={LoginContainer}/>
            <Route exact path={"/terms/"} component={TermsContainer}/>
            <Route exact path={"/"} component={IndexContainer}/>
            <Redirect push to="/"/>
        </Switch>
    );
}