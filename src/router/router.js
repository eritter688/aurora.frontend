import React from "react";
import {useSelector} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import IndexContainer from "../pages";
import LoginContainer from "../pages/login";
import DashboardContainer from "../pages/secure/dashboard";
import {isAuthenticated} from "../reducers/authSlice";
import AboutContainer from "../pages/about";
import TermsContainer from "../pages/terms";

const PrivateRoute = ({auth: authenticated, component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        authenticated === true
            ? <Component {...props} />
            : <Redirect to='/login/'/>
    )}/>
);

export default function Router() {

    const auth = useSelector(isAuthenticated);

    return (
        <Switch>
            <PrivateRoute auth={"auth"} exact path={"/dashboard/"} component={DashboardContainer}/>
            <Route exact path={"/about/"} component={AboutContainer}/>
            <Route exact path={"/login/"} component={LoginContainer}/>
            <Route exact path={"/terms/"} component={TermsContainer}/>
            <Route exact path={"/"} component={IndexContainer}/>
            <Redirect push to="/"/>
        </Switch>
    );
}