import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuroraNavBar from "./components/navbar/NavBar";
import AuroraFooter from "./components/footer/footer";
import Router from "./router/router";
import {useSelector} from "react-redux";
import {isAuthenticated} from "./reducers/authSlice";

const bodyStyle = {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    backgroundImage: "url(./aurora.jpg)",
    // backgroundColor: "lightsteelblue",
}

export default function App() {

    const authenticated = useSelector(isAuthenticated);

    return (
        <div className="App">
            <div className="App-header">
                <AuroraNavBar/>
            </div>
            <div style={bodyStyle}>
                <Router/>
            </div>
            <div className="App-footer">
                <AuroraFooter/>
            </div>
        </div>

    );
}
