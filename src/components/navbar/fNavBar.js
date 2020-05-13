import React from 'react';
import {useSelector} from 'react-redux';
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavItem from "react-bootstrap/NavItem";
import NavDropdown from "react-bootstrap/NavDropdown";
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css'
import {isAuthenticated,} from "../../reducers/authSlice";

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
    const renderAuth = useSelector(isAuthenticated);

    return (
        <NavBar style={{fontVariant: "all-small-caps"}}
                fixed={"top"}
                bg={"light"}
                variant={"light"}
                expand={"md"}>
            <NavbarBrand href={""}>Aurora</NavbarBrand>
            <NavBar.Toggle aria-controls="responsive-navbar-nav"/>
            <NavBar.Collapse id="responsive-navbar-nav">
                <Nav className={"mr-auto"}>
                    <NavItem>
                        <Nav.Link href={""}>Home</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href={""}>About Us</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href={""}>Contact</Nav.Link>
                    </NavItem>
                </Nav>
                {renderAuth ? renderAuth() : renderNoAuth()}
            </NavBar.Collapse>
        </NavBar>
    );
}