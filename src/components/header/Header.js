import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const navBarStyle2 = {
    fontVariant: "all-small-caps",
    borderBottomStyle: "solid",
    borderWidth: "1px",
    borderColor: "lightgray",
    minHeight: "5vh",

    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
};

export default function Header() {

    const userName = "Eric";
    const userEmail = "eritter688@gmail.com";
    const isAuthenticated = false;

    const NavLeft = () => {

        const style = {
            alignSelf: "flex-start",
        };

        return (
            <div style={style}>Aurora</div>
        );
    };

    const rightStyle = {
        alignSelf: "flex-end",
    };

    const navRightNoAuth = () => {
        return (
            <div style={rightStyle}>NO AUTH</div>
        );
    };

    const navRightAuth = () => {
        return (
            <div style={rightStyle}>AUTH</div>
        );
    };

    return (
        <div style={navBarStyle2}>
            <NavLeft/>
            {isAuthenticated ? navRightAuth() : navRightNoAuth()}
        </div>
    )


}

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
// export default function Header(props) {
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
