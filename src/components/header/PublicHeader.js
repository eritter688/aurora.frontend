import React from 'react';
import {Link} from "react-router-dom";
import './header.css'
import {useMediaQuery} from 'react-responsive'

export default function PublicHeader() {

    const XS = useMediaQuery({minWidth: 0, maxWidth: 576})
    const SM = useMediaQuery({minWidth: 576, maxWidth: 768})
    const MD = useMediaQuery({minWidth: 768, maxWidth: 992})
    const LG = useMediaQuery({minWidth: 992, maxWidth: 1200})
    const XL = useMediaQuery({minWidth: 1200})
    const mediaPosition = {
        position: "absolute",
        zIndex: "1001",
    }

    return (
        <>
            <div id={"nav-header"} className={"nav-header"}>
                <div id={"nav-header-logo"} className={"nav-header-logo"}>
                    <Link to={"/home/"}>
                        <img src={"https://via.placeholder.com/100x60"} alt={"placeholder"}/>
                    </Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to={"/login/"} className={"nav-header-button"}>Login</Link></li>
                        <li><Link to={"/register/"} className={"nav-header-button"}>Signup</Link></li>
                    </ul>
                </nav>
            </div>
            {/*just floating showing us size*/}
            {XS && <span style={mediaPosition}>XS</span>}
            {SM && <span style={mediaPosition}>SM</span>}
            {MD && <span style={mediaPosition}>MD</span>}
            {LG && <span style={mediaPosition}>LG</span>}
            {XL && <span style={mediaPosition}>XL</span>}
        </>
    );
}


// const navBarStyle2 = {
//     fontVariant: "all-small-caps",
//     borderBottomStyle: "solid",
//     borderWidth: "1px",
//     borderColor: "lightgray",
//     minHeight: "5vh",//
//     display: "flex",
//     // justifyContent: "center",
//     alignItems: "center",
// };
//
// export default function PublicHeader() {
//
//     const userName = "Eric";
//     const userEmail = "eritter688@gmail.com";
//     const isAuthenticated = false;
//
//     const NavLeft = () => {
//
//         const style = {
//             alignSelf: "flex-start",
//         };
//
//         return (
//             <div style={style}>Aurora</div>
//         );
//     };
//
//     const rightStyle = {
//         alignSelf: "flex-end",
//     };
//
//     const navRightNoAuth = () => {
//         return (
//             <div style={rightStyle}>NO AUTH</div>
//         );
//     };
//
//     const navRightAuth = () => {
//         return (
//             <div style={rightStyle}>AUTH</div>
//         );
//     };
//
//     return (
//         <div style={navBarStyle2}>
//             <NavLeft/>
//             {isAuthenticated ? navRightAuth() : navRightNoAuth()}
//         </div>
//     )
//
//
// }

// const navBarStyle = {
//     fontVariant: "all-small-caps",
//     borderBottomStyle: "solid",
//     borderWidth: "1px",
//     borderColor: "lightgray",
// };
//
//
//
//
// export default function PublicHeader(props) {
//
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const [isAuthenticated, setIsAuthenticated] = useState(authService.hasAuthTokens());
//
//     useLayoutEffect(() => {
//         setIsAuthenticated(authService.hasAuthTokens());
//     }, []);
//
//     const logoutHandler = (event) => {
//         event.preventDefault();
//         dispatch(asyncLogout()).then(() => {
//             setIsAuthenticated(false);
//             history.push("/");
//         })
//     };
//
//     const renderAuth = () => {
//         const email = authService.getUserEmail();
//         const title = "Welcome: " + email;
//         return (
//             <Nav className={"ml-auto"}>
//                 <NavDropdown title={title} id={"drop"}>
//                     <NavDropdown.Item as={Link} to={"/clients/"}>Clients</NavDropdown.Item>
//                     <NavDropdown.Item as={Link} to={"/lessons/"}>Lessons</NavDropdown.Item>
//                     <NavDropdown.Divider/>
//                     <NavDropdown.Item as={Link} to={"/profile/"}>Profile</NavDropdown.Item>
//                     <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
//                 </NavDropdown>
//             </Nav>
//         );
//     };
//
//     const renderNoAuth = () => {
//         return (
//             <Nav className={"ml-auto"}>
//                 <Nav.Item>
//                     <Nav.Link as={Link} to={"/register/"}>Register</Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                     <Nav.Link as={Link} to={"/login/"}>Log In</Nav.Link>
//                 </Nav.Item>
//             </Nav>
//         );
//     };
//
//     return (
//         <NavBar style={navBarStyle}
//                 fixed={"top"}
//                 bg={"light"}
//                 variant={"light"}
//                 expand={"md"}>
//             <NavbarBrand as={Link} to={"/"}>Aurora</NavbarBrand>
//             <NavBar.Toggle aria-controls="responsive-navbar-nav"/>
//             <NavBar.Collapse id="responsive-navbar-nav">
//                 {isAuthenticated ? renderAuth() : renderNoAuth()}
//             </NavBar.Collapse>
//         </NavBar>
//     );
// }
