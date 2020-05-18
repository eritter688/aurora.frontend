import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuroraNavBar from "./components/navbar/NavBar";
import AuroraFooter from "./components/footer/footer";
import Router from "./router/router";
import authService from './services/authService';
import {useDispatch} from "react-redux";


const bodyStyle = {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    backgroundColor: "lightsteelblue",
}

export default function App(props) {

    const dispatch = useDispatch();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(authService.checkAuth(dispatch));
    }, []);

    return (
        <div className={"App"}>
            <AuroraNavBar auth={isAuthenticated}/>
            <div style={bodyStyle}>
                <Router auth={isAuthenticated}/>
            </div>
            <AuroraFooter/>
        </div>
    );
}
