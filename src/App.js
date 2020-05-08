import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuroraNavBar from "./components/navbar/NavBar";
import LoginContainer from "./pages/login";


class App extends Component {

    componentDidMount() {
        localStorage.setItem("isAuthenticated", false);
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
