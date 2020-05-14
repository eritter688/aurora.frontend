import React from 'react';
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem";

export default function AuroraFooter() {

    // TODO
    // On phone, this styles into vertical, taking up a lot of screen
    // real estate.
    const auroraFooterStyle = {
        fontVariant: "small-caps",
        fontSize: ".65em",
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
            <Nav className={"mr-auto"}>
                <NavItem>
                    <Nav.Link href={""}>About</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link href={""}>Terms</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link href={""}>Privacy</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link href={""}>Contact/Report Bug</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link href={""}>Help</Nav.Link>
                </NavItem>
            </Nav>
            <Nav className={"ml-auto"}>
                <NavItem>
                    <Nav.Link href={""}>T</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link href={""}>F</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link href={""}>{'<'}/{'>'}</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link eventKey={"disabled"} disabled>C 2020 Aurora LLC.</Nav.Link>
                </NavItem>
            </Nav>
        </NavBar>
    );

}