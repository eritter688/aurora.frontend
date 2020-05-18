import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuroraNavBar from "./components/navbar/NavBar";
import AuroraFooter from "./components/footer/footer";
import Router from "./router/router";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'


const bodyStyle = {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    // backgroundImage: "url(./aurora.jpg)",
    backgroundColor: "lightsteelblue",
}

export default function App(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // setIsAuthenticated(false);
        console.log("effect fired!");
        // are there any tokens at all?
        // is the access token still valid?
        // is the refresh token still valid?
        // refresh
    })

    return (
        <div className={"App"}>
            <AuroraNavBar auth={isAuthenticated}/>
            <div style={bodyStyle}>
                <Router/>
            </div>
            <AuroraFooter/>
        </div>
    );
}
