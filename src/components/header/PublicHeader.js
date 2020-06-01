import React from 'react';
import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import { Link } from "react-router-dom";
import "./header.css";


export default function PublicHeader() {

    return (
        <NavBar className={"border-bottom header-typography"}
                fixed={"top"}
                bg={"light"}
                variant={"light"}
                expand={"md"}
                collapseOnSelect>
            <NavbarBrand as={Link} to={"/"}>Aurora</NavbarBrand>
            <NavBar.Toggle/>
            <NavBar.Collapse>
                <Nav className={"ml-auto"}>
                    <Nav.Item>
                        <Nav.Link as={Link}
                                  to={"/register/"}
                                  href={"/register/"}>
                            Register
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link}
                                  to={"/login/"}
                                  href={"/login/"}>
                            Log In
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    );

}
