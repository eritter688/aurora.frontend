import React, {useState} from 'react';
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom'
import {asyncLogout} from "../../reducers/authSlice";


const navBarStyle = {
    fontVariant: "all-small-caps",
    borderBottomStyle: "solid",
    borderWidth: "1px",
    borderColor: "lightgray",
};

export default function AuroraNavBar() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [auth, setAuth] = useState(!!localStorage.getItem('currentUser') || false);


    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch(asyncLogout()).then(() => {
            // history.push("/");
        });
        history.push("/");
    };

    const renderAuth = () => {
        return (
            <Nav className={"ml-auto"}>
                <NavDropdown title="Welcome: eritter688@gmail.com" id={"drop"}>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        );
    };

    const renderNoAuth = () => {
        return (
            <Nav className={"ml-auto"}>
                <Nav.Item>
                    <Nav.Link href={""}>Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={"/login/"}>Log In</Nav.Link>
                </Nav.Item>
            </Nav>
        );
    };

    return (
        <NavBar style={navBarStyle}
                fixed={"top"}
                bg={"light"}
                variant={"light"}
                expand={"md"}>
            <NavbarBrand href={""}>Aurora</NavbarBrand>
            <NavBar.Toggle aria-controls="responsive-navbar-nav"/>
            <NavBar.Collapse id="responsive-navbar-nav">
                {localStorage.getItem('currentUser') ? renderAuth() : renderNoAuth()}
            </NavBar.Collapse>
        </NavBar>
    );
}