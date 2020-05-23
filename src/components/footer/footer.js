import React from 'react';
import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import {Link} from "react-router-dom";

// TODO
// Debating on making this a tack on footer style where it's appended to the body
// content, as opposed to sticky on the bottom of the SPA.
export default function Footer() {

    const FooterStyle = {
        fontVariant: "all-small-caps",
        fontSize: ".75em",

        borderTopStyle: "solid",
        borderWidth: "1px",
        borderColor: "lightgray",

        height: "5%",
    };

    return (
        <NavBar style={FooterStyle}
                fixed={"bottom"}
                bg={"light"}
                variant={"light"}>
            <Nav className={"mr-auto"}>
                <NavItem>
                    <Nav.Link as={Link} to={"/about/"}>About</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link as={Link} to={"/terms/"}>Terms</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link as={Link} to={"/privacy/"}>Privacy</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link as={Link} to={"/bug/"}>Bug</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link as={Link} to={"/help/"}>Help</Nav.Link>
                </NavItem>
            </Nav>
            <Nav className={"ml-auto"}>
                <NavItem>
                    <Nav.Link as={Link} to={"/api/"}>{'<'}/{'>'}</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link as={Link} to={"/copyright/"}>&copy;</Nav.Link>
                </NavItem>
            </Nav>
        </NavBar>
    );

}