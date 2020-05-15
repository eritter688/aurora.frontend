import React from "react";
import {useSelector} from "react-redux";
import {Route, Switch,} from "react-router-dom";
import IndexContainer from "../pages";
import LoginContainer from "../pages/login";
import DashboardContainer from "../pages/dashboard";
import {isAuthenticated} from "../reducers/authSlice";


export default function Router() {

    const authenticated = useSelector(isAuthenticated);

    const authRoutes = () => {
        return (
            <Route path={"/dashboard/"} component={DashboardContainer}/>
        );
    };

    const noAuthRoutes = () => {
        return (
            <Route path={"/login/"} component={LoginContainer}/>
        );
    };

    const defaultRoute = () => {
        return (
            <Route path={"/"} component={IndexContainer}/>
        );
    };

    return (
        <Switch>
            {authenticated === true && authRoutes()}
            {noAuthRoutes()}
            {defaultRoute()}
        </Switch>
    );
}