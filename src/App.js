import logo from "./logo.svg";
import "./App.css";
import ReactGA from "react-ga";
import { useEffect } from "react";

function App() {
    function initializeReactGA() {
        ReactGA.initialize("G-D9VXGEGLKE");
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    useEffect(() => {
        initializeReactGA();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Hello...
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
