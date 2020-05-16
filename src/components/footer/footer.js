import React from 'react';
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem";

export default function AuroraFooter() {

    // TODO
    // On phone, this styles into vertical, taking up a lot of screen
    // real estate.
    const auroraFooterStyle = {
        fontVariant: "all-small-caps",
        fontSize: ".80em",
        borderTopStyle: "solid",
        borderWidth: "1px",
        borderColor: "lightgray",
    };

    return (
        <NavBar style={auroraFooterStyle}
                fixed={"bottom"}
                bg={"light"}
                variant={"light"}
                expand={"sm"}>
            <NavBar.Toggle aria-controls="responsive-navbar-nav-left"/>
            <NavBar.Collapse id="responsive-navbar-nav-left">
                <Nav className={"mr-auto"}>
                    <NavItem>
                        <Nav.Link href={"/about/"}>About</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href={"/terms/"}>Terms</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href={"/privacy/"}>Privacy</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href={"/bug/"}>Contact/Report Bug</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link href={"/help/"}>Help</Nav.Link>
                    </NavItem>
                </Nav>
            </NavBar.Collapse>
            <NavBar.Toggle aria-controls="responsive-navbar-nav-right"/>
            <NavBar.Collapse id="responsive-navbar-nav-right">
                <Nav className={"ml-auto"}>
                    <NavItem>
                        <Nav.Link href={""}>{'<'}/{'>'}</Nav.Link>
                    </NavItem>
                    <NavItem>
                        <Nav.Link eventKey={"disabled"} disabled>C 2020 Aurora LLC.</Nav.Link>
                    </NavItem>
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    );

}