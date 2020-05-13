import React from 'react';
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav"
import NavItem from "react-bootstrap/NavItem";

export default function AuroraFooter() {

    const auroraFooterStyle = {
        fontVariant: "all-small-caps",
        borderTopStyle: "solid",
        borderWidth: "1px",
        borderColor: "lightgray",
    };

    return (
        <NavBar style={auroraFooterStyle}
                fixed={"bottom"}
                bg={"light"}
                variant={"light"}
                expand={"md"}>
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
                    <Nav.Link href={""}>Twitter</Nav.Link>
                </NavItem>
                <NavItem>
                    <Nav.Link href={""}>Facebook</Nav.Link>
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