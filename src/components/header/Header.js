import React, {useLayoutEffect, useState} from 'react';
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch} from "react-redux";
import {Link, useHistory} from 'react-router-dom'
import {asyncLogout} from "../../slices/authSlice";
import authService from "../../services/tokenService";

const navBarStyle = {
    fontVariant: "all-small-caps",
    borderBottomStyle: "solid",
    borderWidth: "1px",
    borderColor: "lightgray",
};

export default function Header(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const [isAuthenticated, setIsAuthenticated] = useState(authService.hasAuthTokens());

    useLayoutEffect(() => {
        setIsAuthenticated(authService.hasAuthTokens());
    }, []);

    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch(asyncLogout()).then(() => {
            setIsAuthenticated(false);
            history.push("/");
        })
    };

    const renderAuth = () => {
        const email = authService.getUserEmail();
        const title = "Welcome: " + email;
        return (
            <Nav className={"ml-auto"}>
                <NavDropdown title={title} id={"drop"}>
                    <NavDropdown.Item as={Link} to={"/clients/"}>Clients</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to={"/lessons/"}>Lessons</NavDropdown.Item>
                    <NavDropdown.Divider/>
                    <NavDropdown.Item as={Link} to={"/profile/"}>Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        );
    };

    const renderNoAuth = () => {
        return (
            <Nav className={"ml-auto"}>
                <Nav.Item>
                    <Nav.Link as={Link} to={"/register/"}>Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to={"/login/"}>Log In</Nav.Link>
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
            <NavbarBrand as={Link} to={"/"}>Aurora</NavbarBrand>
            <NavBar.Toggle aria-controls="responsive-navbar-nav"/>
            <NavBar.Collapse id="responsive-navbar-nav">
                {isAuthenticated ? renderAuth() : renderNoAuth()}
            </NavBar.Collapse>
        </NavBar>
    );
}
