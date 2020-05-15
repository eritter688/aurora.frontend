import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuroraNavBar from "./components/navbar/NavBar";
import AuroraFooter from "./components/footer/footer";
import Router from "./router/router";

class App extends Component {

    componentDidMount() {
        //localStorage.setItem("isAuthenticated", false);
        // check for current user session
        // and load into secure space if so
        // otherwise, do nothing...
    }

    render() {

        const bodyStyle = {
            paddingTop: "5rem",
            paddingBottom: "5rem",
            backgroundColor: "lightsteelblue",
        }

        return (
            <div className="App">
                <header className="App-header">
                    <AuroraNavBar/>
                </header>
                <body style={bodyStyle}>
                {Router()}
                </body>
                <footer className="App-footer">
                    <AuroraFooter/>
                </footer>
            </div>
        );
    }

}

export default App;
