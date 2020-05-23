import React from 'react';
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem";
import {Link} from "react-router-dom";


export default function Footer() {

    // TODO
    // On phone, this styles into vertical, taking up a lot of screen
    // real estate.
    const FooterStyle = {
        fontVariant: "all-small-caps",
        fontSize: ".80em",
        borderTopStyle: "solid",
        borderWidth: "1px",
        borderColor: "lightgray",
    };

    return (
        <NavBar style={FooterStyle}
                fixed={"bottom"}
                bg={"light"}
                variant={"light"}
                expand={"sm"}>
            <NavBar.Toggle aria-controls="responsive-navbar-nav-left"/>
            <NavBar.Collapse id="responsive-navbar-nav-left">
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
                        <Nav.Link as={Link} to={"/bug/"}>Contact/Report Bug</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link as={Link} to={"/help/"}>Help</Nav.Link>
                    </NavItem>
                </Nav>
            </NavBar.Collapse>
            <Nav className={"ml-auto"}>
                <NavItem>
                    <Nav.Link as={Link} to={"/api/"}>{'<'}/{'>'}</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link eventKey={"disabled"} disabled>C 2020 Aurora LLC.</Nav.Link>
                </NavItem>
            </Nav>
        </NavBar>
    );

}