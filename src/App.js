import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuroraNavBar from "./components/navbar/NavBar";
import AuroraFooter from "./components/footer/footer";
import Router from "./router/router";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'
import authService from './services/authService';


const bodyStyle = {
    paddingTop: "5rem",
    paddingBottom: "5rem",
    backgroundColor: "lightsteelblue",
}

export default function App(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [banana, setBanana] = useState(true);

    useEffect(() => {
        setIsAuthenticated(authService.checkAuth());
    })

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
