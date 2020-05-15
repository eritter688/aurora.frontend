import React from "react";
import {Route, Switch,} from "react-router-dom";
import IndexContainer from "../pages";
import LoginContainer from "../pages/login";


export default function Router() {
    return (
        <Switch>
            <Route path={"/login"} component={LoginContainer}/>
            <Route exact_path={"/"} component={IndexContainer}/>
        </Switch>
    );
}

// function PrivateRoute({ children, ...rest }) {
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 fakeAuth.isAuthenticated ? (
//                     children
//                 ) : (
//                     <Redirect
//                         to={{
//                             pathname: "/login",
//                             state: { from: location }
//                         }}
//                     />
//                 )
//             }
//         />
//     );
// }