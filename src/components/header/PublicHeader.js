import React from 'react';
import Button from 'react-bootstrap/Button'
import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import {Link} from "react-router-dom";
import "./header.css";


export default function PublicHeader() {

    const loginHandler = () => {
        console.log("LOG IN");
    };

    const registerHandler = () => {
        console.log("SIGN UP");
    };

    return (
        <NavBar className={"border-bottom header-typography"}
                fixed={"top"}
                bg={"light"}
                variant={"light"}>
            <NavbarBrand as={Link} to={"/"}>Aurora</NavbarBrand>
            <Nav className={"ml-auto"}>
                <Nav.Item className={"mr-2"}>
                    <Button variant={"outline-primary"}
                            size={"sm"}
                            onClick={loginHandler}>
                        Log In
                    </Button>
                </Nav.Item>
                <Nav.Item>
                    <Button variant={"outline-primary"}
                            size={"sm"}
                            onClick={registerHandler}>
                        Sign Up
                    </Button>
                </Nav.Item>
            </Nav>
        </NavBar>
    );

}
