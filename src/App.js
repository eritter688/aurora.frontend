import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import AuroraNavBar from "./components/navbar/NavBar";
import NavBar from "react-bootstrap/Navbar";
import DashboardContainer from "./pages/dashboard";
import LoginContainer from "./pages/login";

const uname = "eritter688@gmail.com";
const pswd = "22890501";

const handleClick = () => login(uname, pswd);

class App extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <AuroraNavBar/>
                </header>
                <body style={{paddingTop: "5rem", backgroundColor: "cornsilk"}}>
                <LoginContainer/>
                </body>
            </div>
        );
    }

}

function login(email, password) {
  
  var response;
  
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
    }

    response = fetch('http://localhost:8000/api/v1/token/auth/', requestOptions);
    console.log(response);
    return;
}

export default App;


// WORKING LOGO + CLICKABLE BUTTON

// render() {
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo"/>
//                 <Button onClick={handleClick}>
//                     'LOGIN'
//                 </Button>
//             </header>
//         </div>
//     );
// }


// function App() {
//
//     return (
//         <div className="App">
//             <header className="App-header">
//                 <img src={logo} className="App-logo" alt="logo"/>
//             </header>
//         </div>
//     );
// }
//
// export default App;

// <Counter />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <span>
//           <span>Learn </span>
//           <a
//               className="App-link"
//               href="https://reactjs.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//               className="App-link"
//               href="https://redux.js.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//               className="App-link"
//               href="https://redux-toolkit.js.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//               className="App-link"
//               href="https://react-redux.js.org/"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
