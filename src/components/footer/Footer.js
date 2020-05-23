import React from 'react';
import Nav from "react-bootstrap/Nav"
import NavBar from "react-bootstrap/Navbar";
import NavItem from "react-bootstrap/NavItem";
import {useMediaQuery} from "react-responsive";
import {Link} from "react-router-dom";

// TODO
// This is 'fine for now'. Not sure I like how it's worked up.
// Might rip it out in the future.
export default function Footer() {

    const isSmall = useMediaQuery({minDeviceWidth: 576})
    const isMedium = useMediaQuery({minDeviceWidth: 768})
    const isLarge = useMediaQuery({minDeviceWidth: 992})
    const isExtraLarge = useMediaQuery({minDeviceWidth: 1200})

    const FooterXSStyle = {
        fontVariant: "all-small-caps",
        fontSize: ".80em",

        borderTopStyle: "solid",
        borderWidth: "1px",
        borderColor: "lightgray",

        height: "4%",
    };
    const FooterSMStyle = {
        fontSize: ".75em",
        height: "5%",
    };
    const FooterMDStyle = {
        fontSize: "1.10em",
        height: "5%",
    };
    const FooterLGStyle = {
        fontSize: "1.60em",
        height: "5%",
    };
    const FooterXLStyle = {
        fontSize: "1.10em",
        height: "3%",
    };

    let FooterStyle;
    if (isExtraLarge) {
        FooterStyle = {...FooterXSStyle, ...FooterXLStyle};
    } else if (isLarge) {
        FooterStyle = {...FooterXSStyle, ...FooterLGStyle};
    } else if (isMedium) {
        FooterStyle = {...FooterXSStyle, ...FooterMDStyle};
    } else if (isSmall) {
        FooterStyle = {...FooterXSStyle, ...FooterSMStyle}
    } else {
        FooterStyle = FooterXSStyle;
    }

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