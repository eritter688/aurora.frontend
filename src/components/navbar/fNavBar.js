import React from 'react';
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import {useSelector} from "react-redux";
import {isAuthenticated} from "../../reducers/authSlice";

// const dispatch = useDispatch();
//
// function logoutHandler() {
//     logout();
//     dispatch(LOGOUT);
// }

function renderAuth() {
    return (
        <Nav className={"ml-auto"}>
            <NavDropdown title="Welcome: eritter688@gmail.com" id={"drop"}>
                <NavDropdown.Item>Profile</NavDropdown.Item>
                <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    );
}

function renderNoAuth() {
    return (
        <Nav className={"ml-auto"}>
            <Nav.Item>
                <Nav.Link href={""}>Register</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href={""}>Log In</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default function FAuroraNavBar() {
    const authenticated = useSelector(isAuthenticated);
    // const authenticated = 1;

    const navBarStyle = {
        fontVariant: "all-small-caps",
        borderBottomStyle: "solid",
        borderWidth: "1px",
        borderColor: "lightgray",
    }

    return (
        <NavBar style={navBarStyle}
                fixed={"top"}
                bg={"light"}
                variant={"light"}
                expand={"md"}>
            <NavbarBrand href={""}>Aurora</NavbarBrand>
            <NavBar.Toggle aria-controls="responsive-navbar-nav"/>
            <NavBar.Collapse id="responsive-navbar-nav">
                {authenticated ? renderAuth() : renderNoAuth()}
            </NavBar.Collapse>
        </NavBar>
    );
}