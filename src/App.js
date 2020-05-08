import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuroraNavBar from "./components/navbar/NavBar";
import LoginContainer from "./pages/login";


class App extends Component {

    componentDidMount() {
        // check for current user session
        // and load into secure space if so
        // otherwise, do nothing...
    }

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

export default App;

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
